<?php
namespace App\Http\Controllers\Api\Module\Car;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 汽车品牌控制器类
 */
class BrandController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Api\Module\Car\Brand';

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
   * @api {get} /api/car/brand/list?page={page} 01. 汽车品牌列表
   * @apiDescription 获取汽车品牌分页列表
   * @apiGroup 41. 汽车品牌模块
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (basic params) {Number} id 汽车品牌编号
   * @apiSuccess (basic params) {Number} title 汽车品牌名称
   * @apiSuccess (basic params) {Number} picture 汽车品牌图片
   *
   * @apiSampleRequest /api/car/brand/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'list');

      $response = $this->_model::getPaging($condition, $relevance, $this->_order);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }


  /**
   * @api {get} /api/car/brand/select 02. 汽车品牌数据
   * @apiDescription 获取汽车品牌不分页列表数据
   * @apiGroup 41. 汽车品牌模块
   *
   * @apiSuccess (basic params) {Number} id 汽车品牌编号
   * @apiSuccess (basic params) {Number} title 汽车品牌名称
   * @apiSuccess (basic params) {Number} picture 汽车品牌图片
   *
   * @apiSampleRequest /api/car/brand/select
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
