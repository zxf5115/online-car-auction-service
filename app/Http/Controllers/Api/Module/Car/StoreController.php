<?php
namespace App\Http\Controllers\Api\Module\Car;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 汽车门店控制器类
 */
class StoreController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Api\Module\Store';

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
   * @api {get} /api/car/store/list?page={page} 01. 汽车门店列表
   * @apiDescription 获取汽车门店分页列表
   * @apiGroup 39. 汽车门店模块
   *
   * @apiParam {int} page 当前页数
   * @apiParam {int} limit 每页数量
   *
   * @apiSuccess (basic params) {Number} id 汽车门店编号
   * @apiSuccess (basic params) {Number} title 汽车门店名称
   * @apiSuccess (basic params) {Number} mobile 汽车门店电话
   * @apiSuccess (basic params) {Number} address 汽车门店地址
   *
   * @apiSampleRequest /api/car/store/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData();

      $page = $request->limit ?? 10;

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'list');

      $response = $this->_model::getPaging($condition, $relevance, $this->_order, false, $page);

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
   * @api {get} /api/car/store/select 02. 汽车门店数据
   * @apiDescription 获取汽车门店不分页列表数据
   * @apiGroup 39. 汽车门店模块
   *
   * @apiSuccess (basic params) {Number} id 汽车门店编号
   * @apiSuccess (basic params) {Number} title 汽车门店名称
   * @apiSuccess (basic params) {Number} mobile 汽车门店电话
   * @apiSuccess (basic params) {Number} address 汽车门店地址
   *
   * @apiSampleRequest /api/car/store/select
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
   * @api {get} /api/car/store/view/{id} 03. 汽车门店详情
   * @apiDescription 获取汽车门店详情
   * @apiGroup 39. 汽车门店模块
   *
   * @apiSuccess (basic params) {Number} id 汽车门店编号
   * @apiSuccess (basic params) {Number} title 汽车门店名称
   * @apiSuccess (basic params) {Number} mobile 汽车门店电话
   * @apiSuccess (basic params) {Number} address 汽车门店地址
   *
   * @apiSampleRequest /api/car/store/view/{id}
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
