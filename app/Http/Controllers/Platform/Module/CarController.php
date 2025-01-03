<?php
namespace App\Http\Controllers\Platform\Module;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Platform\BaseController;
use App\Models\Platform\Module\Member\MemberMessage;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-23
 *
 * 汽车控制器类
 */
class CarController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Platform\Module\Car';

  // 默认查询条件
  protected $_where = [];

  // 客户端搜索字段
  protected $_params = [
    'source_id',
    'title',
  ];

  // 客户端关联查询字段
  protected $_addition = [
    'member' => [
      'nickname'
    ]
  ];


  // 关联对象
  protected $_relevance = [
    'list' => [
      'member',
      'source',
      'brand',
      'shape',
    ],
    'select' => false,
    'view' => [
      'member.certification',
      'source',
      'brand',
      'shape',
      'config'
    ],
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-13
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
      'id.required'           => '请您输入汽车编号',
      'audit_status.required' => '请您输入审核状态',
    ];

    $rule = [
      'id'           => 'required',
      'audit_status' => 'required',
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

        $organization_id = self::getOrganizationId();

        $model->organization_id = $organization_id;
        $model->audit_status    = $request->audit_status;
        $model->audit_content   = $request->audit_content;
        $model->save();

        $message = MemberMessage::firstOrNew(['id' => '']);
        $message->member_id  = $model->member_id;
        $message->message_id = $request->audit_status == 1 ? 1 : 2;
        $message->save();

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
   * 禁用（解禁）学员账户
   * ------------------------------------------
   *
   * 禁用（解禁）学员账户
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

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-13
   * ------------------------------------------
   * 推荐汽车
   * ------------------------------------------
   *
   * 推荐汽车
   *
   * @param Request $request [description]
   * @return [type]
   */
  public function recommend(Request $request)
  {
    try
    {
      $model = $this->_model::find($request->id);

      $model->is_recommend = $model->is_recommend == 1 ? 2 : 1;

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
