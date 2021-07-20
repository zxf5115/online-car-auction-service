<?php
namespace App\Http\Controllers\Platform\Module;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Models\Platform\Module\Member;
use App\Http\Controllers\Platform\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-07-20
 *
 * 前台消息控制器类
 */
class MessageController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Platform\Module\Message';

  protected $_relevance = [
    'list' => [
      'member'
    ]
  ];

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-07-20
   * ------------------------------------------
   * 操作信息
   * ------------------------------------------
   *
   * 操作信息
   *
   * @param Request $request [请求参数]
   * @return [type]
   */
  public function handle(Request $request)
  {
    $messages = [
      'title.required'   => '请您输入前台消息标题',
      'content.required' => '请您输入前台消息内容',
    ];

    $rule = [
      'title'   => 'required',
      'content' => 'required',
    ];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      DB::beginTransaction();

      try
      {
        $model = $this->_model::firstOrNew(['id' => $request->id]);

        $model->organization_id = self::getOrganizationId();
        $model->type            = 2;
        $model->title           = $request->title;
        $model->content         = $request->content;
        $model->save();

        $where = [];

        $condition = self::getSimpleWhereData();

        $role_id = $request->role_id ?? 0;

        if(!empty($role_id))
        {
          $where = [
            'role_id' => $role_id,
          ];
        }

        $condition = array_merge($condition, $where);


        $result = Member::getPluck('id', $condition, false, false, true);

        if(!empty($result))
        {
          $data = [];

          foreach($result as $item)
          {
            $data[]['member_id'] = $item;
          }

          $model->relevance()->delete();
          $model->relevance()->createMany($data);
        }

        DB::commit();

        return self::success(Code::message(Code::HANDLE_SUCCESS));
      }
      catch(\Exception $e)
      {
        DB::rollback();

        // 记录异常信息
        self::record($e);

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }

    /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-13
   * ------------------------------------------
   * 禁用（解禁）前台消息信息
   * ------------------------------------------
   *
   * 禁用（解禁）前台消息信息
   *
   * @param Request $request [description]
   * @return [type]
   */
  public function enable(Request $request)
  {
    try
    {
      $model = $this->_model::find($request->id);

      $model->status = $model->status['value'] == 1 ? 2 : 1;

      $model->save();

      return self::success(Code::message(Code::HANDLE_SUCCESS));
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::HANDLE_FAILURE);
    }
  }
}
