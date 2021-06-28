<?php
namespace App\Http\Controllers\Api\Module\Member\Order;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-01-18
 *
 * 会员订单控制器类
 */
class LogisticsController extends BaseController
{
  protected $_model = 'App\Models\Api\Module\Order\Logistics';

  protected $_params = [
    'type',
    'order_id'
  ];

  protected $_order = [
    ['key' => 'create_time', 'value' => 'asc'],
  ];


  /**
   * @api {get} /api/member/order/logistics/select 01. 课程订单列表(不分页)
   * @apiDescription 获取当前会员课程订单列表(不分页)
   * @apiGroup 33. 会员订单物流模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} type 物流分类编号
   * @apiParam {string} order_id 订单编号
   *
   * @apiSuccess (logistics params) {Number} type 物流类型
   * @apiSuccess (logistics params) {Number} logistics_name 物流名称
   * @apiSuccess (logistics params) {Number} logistics_no 物流单号
   * @apiSuccess (logistics params) {Number} logistics_status 物流状态 0 待发货 1 已发出 2 待收货 3 已签收
   * @apiSuccess (logistics params) {Number} logistics_time 变更时间
   * @apiSuccess (logistics params) {Number} address 物流地址
   * @apiSuccess (logistics params) {Number} content 详情
   *
   * @apiSampleRequest /api/member/order/logistics/select
   * @apiVersion 1.0.0
   */
  public function select(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'select');

      $response = $this->_model::getList($condition, $relevance, $this->_order);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }
}
