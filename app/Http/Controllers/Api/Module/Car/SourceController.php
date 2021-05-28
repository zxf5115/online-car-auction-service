<?php
namespace App\Http\Controllers\Api\Module\Car;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 汽车来源控制器类
 */
class SourceController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Api\Module\Car\Source';

  protected $_where = [];

  protected $_params = [];

  protected $_addition = [];

  /**
   * 排序条件
   */
  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
  ];

  protected $_relevance = [];


  /**
   * @api {get} /api/car/source/select 01. 汽车来源数据
   * @apiDescription 获取汽车来源不分页列表数据
   * @apiGroup 40. 汽车来源模块
   *
   * @apiSuccess (basic params) {Number} id 汽车来源编号
   * @apiSuccess (basic params) {Number} title 汽车来源名称
   *
   * @apiSampleRequest /api/car/source/select
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
