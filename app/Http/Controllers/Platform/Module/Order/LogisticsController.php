<?php
namespace App\Http\Controllers\Platform\Module\Order;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Platform\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-01-16
 *
 * 课程订单物流控制器类
 */
class LogisticsController extends BaseController
{
  // 模型
  protected $_model = 'App\Models\Platform\Module\Order\Logistics';

  // 默认查询条件
  protected $_where = [];

  // 查询条件
  protected $_params = [
    'order_id'
  ];

  // 附加关联查询条件
  protected $_addition = [];

  // 排序
  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  // 关联信息
  protected $_relevance = [
    'category'
  ];



  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-02-12
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
      'order_id.required'         => '请您输入订单编号',
      'type.required'             => '请您选择物流类型',
      'logistics_status.required' => '请您选择物流状态',
      'logistics_name.required'   => '请您输入物流名称',
      'logistics_no.required'     => '请您输入物流编号',
    ];

    $rule = [
      'order_id'         => 'required',
      'type'             => 'required',
      'logistics_status' => 'required',
      'logistics_name'   => 'required',
      'logistics_no'     => 'required',
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

        $model->organization_id  = self::getOrganizationId();
        $model->order_id         = $request->order_id;
        $model->type             = $request->type;
        $model->logistics_status = $request->logistics_status;
        $model->logistics_name   = $request->logistics_name;
        $model->logistics_no     = $request->logistics_no;
        $model->logistics_time   = strtotime($request->logistics_time);
        $model->address          = $request->address;
        $model->content          = $request->content;
        $model->operator         = $request->operator;

        $model->save();

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
}
