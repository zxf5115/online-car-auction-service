<?php
namespace App\Http\Controllers\Api\Module\Common;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use App\Http\Constant\Code;
use App\Http\Constant\Parameter;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-12-30
 *
 * 联系客服控制器类
 */
class LogisticsController extends BaseController
{
  protected $_model = 'App\Models\Api\Module\Common\Logistics';

  protected $_where = [];

  protected $_params = [];

  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
  ];

  protected $_relevance = [];


  /**
   * @api {post} /api/common/logistics/data 08. 物流类型
   * @apiDescription 获取物流类型
   * @apiGroup 01. 公共模块
   *
   * @apiSuccess (basic params) {Number} id 物流类型编号
   * @apiSuccess (basic params) {Number} title 物流类型名称
   *
   * @apiSampleRequest /api/common/logistics/data
   * @apiVersion 1.0.0
   */
  public function data(Request $request)
  {
    try
    {
      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($this->_where, $filter);

      $response = $this->_model::getList($condition);

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
