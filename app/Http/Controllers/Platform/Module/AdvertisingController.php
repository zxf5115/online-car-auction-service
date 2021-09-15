<?php
namespace App\Http\Controllers\Platform\Module;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Platform\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-01-11
 *
 * 广告控制器类
 */
class AdvertisingController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Platform\Module\Advertising';

  protected $_where = [];

  protected $_params = [
    'position_id',
  ];

  /**
   * 排序条件
   */
  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  protected $_relevance = [
    'list' => [
      'position'
    ],
    'select' => false,
    'view' => [
      'position'
    ]
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-12-12
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
      'position_id.required' => '请您输入广告位标题',
      'title.required'       => '请您输入广告标题',
      'picture.required'     => '请您输入广告图片',
    ];

    $rule = [
      'position_id' => 'required',
      'title'       => 'required',
      'picture'     => 'required',
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
        $model->position_id     = $request->position_id;
        $model->title           = $request->title;
        $model->content         = $request->content;
        $model->sort            = $request->sort ?? 0;
        $model->save();

        $data = self::packRelevanceData($request, 'picture');

        if(!empty($data))
        {
          $model->resource()->delete();
          $model->resource()->createMany($data);
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
   * 禁用（解禁）广告信息
   * ------------------------------------------
   *
   * 禁用（解禁）广告信息
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
