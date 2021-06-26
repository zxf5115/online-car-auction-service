<?php
namespace App\Http\Controllers\Api\Module\Car\Shape;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 汽车车型配置控制器类
 */
class ConfigController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Api\Module\Car\Shape\Config';

  // 查询条件
  protected $_params = [
    'shape_id'
  ];


  /**
   * 排序条件
   */
  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
  ];


  /**
   * @api {get} /api/car/shape/config/data 04. 汽车车型配置
   * @apiDescription 汽车车型配置
   * @apiGroup 42. 汽车车型模块
   *
   * @apiParam {int} shape_id 汽车车型编号
   *
   * @apiSuccess (basic params) {Number} type 汽车配置类型
   * @apiSuccess (basic params) {String} title 汽车配置名字
   * @apiSuccess (basic params) {String} params 汽车配置参数
   * @apiSuccess (basic params) {String} is_must 是否必须
   *
   * @apiSampleRequest /api/car/shape/config/data
   * @apiVersion 1.0.0
   */
  public function data(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'list');

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
