<?php
namespace App\Http\Controllers\Api\Module\Advertising;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 广告位控制器类
 */
class PositionController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Api\Module\Advertising\Position';

  protected $_where = [];

  protected $_params = [];

  protected $_addition = [];

  /**
   * 排序条件
   */
  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  protected $_relevance = [
    'list' => false,
    'select' => false,
    'view' => [
      'advertising.resource'
    ]
  ];


  /**
   * @api {get} /api/advertising/position/list?page={page} 01. 广告位列表
   * @apiDescription 获取广告位分页列表
   * @apiGroup 04. 广告位模块
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (basic params) {Number} id 广告位编号
   * @apiSuccess (basic params) {Number} title 广告位名称
   * @apiSuccess (basic params) {Number} create_time 添加时间
   *
   * @apiSampleRequest /api/advertising/position/list
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
   * @api {get} /api/advertising/position/select 02. 广告位数据
   * @apiDescription 获取广告位数据
   * @apiGroup 04. 广告位模块
   *
   * @apiSuccess (basic params) {Number} id 广告位编号
   * @apiSuccess (basic params) {Number} title 广告位名称
   * @apiSuccess (basic params) {Number} create_time 添加时间
   *
   * @apiSampleRequest /api/advertising/position/select
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
   * @api {get} /api/advertising/position/view/{id} 03. 广告位详情
   * @apiDescription 获取广告位详情
   * @apiGroup 04. 广告位模块
   *
   * @apiSuccess (basic params) {Number} id 广告位编号
   * @apiSuccess (basic params) {Number} title 广告位名称
   * @apiSuccess (basic params) {Number} create_time 添加时间
   * @apiSuccess (advertising params) {Number} id 广告编号
   * @apiSuccess (advertising params) {Number} position_id 广告位编号
   * @apiSuccess (advertising params) {Number} title 广告名称
   * @apiSuccess (advertising params) {Number} content 广告内容
   * @apiSuccess (advertising params) {Number} create_time 添加时间
   * @apiSuccess (resource params) {Number} picture 广告资源地址
   *
   * @apiSampleRequest /api/advertising/position/view/{id}
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
