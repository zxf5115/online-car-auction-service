<?php
namespace App\Http\Controllers\Api\Module;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 广告控制器类
 */
class AdvertisingController extends BaseController
{
  protected $_model = 'App\Models\Api\Module\Advertising';

  protected $_where = [];

  protected $_params = [
    'position_id',
  ];

  protected $_addition = [];

  /**
   * 排序条件
   */
  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
  ];

  protected $_relevance = [
    'resource'
  ];


  /**
   * @api {get} /api/advertising/list?page={page} 01. 广告列表
   * @apiDescription 获取广告分页列表
   * @apiGroup 05. 广告模块
   *
   * @apiParam {int} page 当前页数
   * @apiParam {int} limit 每页数量
   * @apiParam {int} position_id 广告位编号
   *
   * @apiSuccess (basic params) {Number} id 广告编号
   * @apiSuccess (basic params) {Number} position_id 广告位编号
   * @apiSuccess (basic params) {String} title 广告标题
   * @apiSuccess (basic params) {String} content 广告内容
   * @apiSuccess (basic params) {Number} create_time 添加时间
   * @apiSuccess (resource params) {String} picture 广告图片资源
   *
   * @apiSampleRequest /api/advertising/list
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
   * @api {get} /api/advertising/select 02. 广告数据
   * @apiDescription 获取广告数据
   * @apiGroup 05. 广告模块
   *
   * @apiParam {int} position_id 广告位编号
   *
   * @apiSuccess (basic params) {Number} id 广告编号
   * @apiSuccess (basic params) {Number} position_id 广告位编号
   * @apiSuccess (basic params) {String} title 广告标题
   * @apiSuccess (basic params) {String} content 广告内容
   * @apiSuccess (basic params) {Number} create_time 添加时间
   * @apiSuccess (resource params) {String} picture 广告图片资源
   *
   * @apiSampleRequest /api/advertising/select
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

      $response = $this->_model::getList($condition, $relevance, $this->_order, false, false, 5);

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
   * @api {get} /api/advertising/view/{id} 03. 广告详情
   * @apiDescription 获取广告详情
   * @apiGroup 05. 广告模块
   *
   * @apiSuccess (basic params) {Number} id 广告编号
   * @apiSuccess (basic params) {Number} position_id 广告位编号
   * @apiSuccess (basic params) {String} title 广告标题
   * @apiSuccess (basic params) {String} content 广告内容
   * @apiSuccess (basic params) {Number} create_time 添加时间
   * @apiSuccess (resource params) {String} picture 广告图片资源
   *
   * @apiSampleRequest /api/advertising/view/{id}
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
