<?php
namespace App\Http\Controllers\Api\Module\Car;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 汽车车型控制器类
 */
class ShapeController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Api\Module\Car\Shape';

  protected $_where = [];

  protected $_params = [];

  protected $_addition = [];

  /**
   * 排序条件
   */
  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
  ];

  protected $_relevance = [
    'list' => false,
    'select' => false,
    'view' => [
      'brand'
    ]
  ];


  /**
   * @api {get} /api/car/shape/list?page={page} 01. 汽车车型列表
   * @apiDescription 获取汽车车型分页列表
   * @apiGroup 42. 汽车车型模块
   *
   * @apiParam {int} page 当前页数
   * @apiParam {int} brand_id 汽车品牌编号
   *
   * @apiSuccess (basic params) {Number} id 汽车车型编号
   * @apiSuccess (basic params) {Number} brand_id 汽车品牌编号
   * @apiSuccess (basic params) {Number} title 汽车车型名称
   *
   * @apiSampleRequest /api/car/shape/list
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
   * @api {get} /api/car/shape/select 02. 汽车车型数据
   * @apiDescription 获取汽车车型不分页列表数据
   * @apiGroup 42. 汽车车型模块
   *
   * @apiSuccess (basic params) {Number} id 汽车车型编号
   * @apiSuccess (basic params) {Number} brand_id 汽车品牌编号
   * @apiSuccess (basic params) {Number} title 汽车车型名称
   *
   * @apiSampleRequest /api/car/shape/select
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


  /**
   * @api {get} /api/car/shape/view/{id} 03. 汽车车型详情
   * @apiDescription 获取汽车车型详情
   * @apiGroup 42. 汽车车型模块
   *
   * @apiSuccess (basic params) {Number} id 汽车车型编号
   * @apiSuccess (basic params) {Number} brand_id 汽车品牌编号
   * @apiSuccess (basic params) {Number} title 汽车车型名称
   * @apiSuccess (brand params) {Number} id 汽车品牌编号
   * @apiSuccess (brand params) {Number} title 汽车品牌名称
   * @apiSuccess (brand params) {Number} picture 汽车品牌图片
   *
   * @apiSampleRequest /api/car/shape/view/{id}
   * @apiVersion 1.0.0
   */
  public function view(Request $request, $id)
  {
    try
    {
      $condition = self::getSimpleWhereData($id);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'view');

      $response = $this->_model::getRow($condition, $relevance);

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
