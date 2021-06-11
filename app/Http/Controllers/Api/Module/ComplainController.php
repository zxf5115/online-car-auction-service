<?php
namespace App\Http\Controllers\Api\Module;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 投诉控制器类
 */
class ComplainController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Api\Module\Complain';

  protected $_where = [];

  protected $_params = [
    'category_id',
  ];

  /**
   * 排序条件
   */
  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  protected $_relevance = [
    'list' => [
      'category'
    ],
    'select' => false,
    'view' => [
      'member',
      'category'
    ]
  ];


  /**
   * @api {get} /api/complain/list?page={page} 01. 投诉列表
   * @apiDescription 获取投诉分页列表
   * @apiGroup 07. 投诉模块
   *
   * @apiParam {int} page 当前页数
   * @apiParam {int} limit 每页数量
   * @apiParam {int} category_id 投诉分类编号
   *
   * @apiSuccess (basic params) {Number} id 投诉编号
   * @apiSuccess (basic params) {Number} category_id 投诉分类编号
   * @apiSuccess (basic params) {String} content 投诉内容
   * @apiSuccess (basic params) {String} read_status 是否查阅
   * @apiSuccess (basic params) {Number} create_time 投诉时间
   * @apiSuccess (category params) {String} title 投诉分类标题
   *
   * @apiSampleRequest /api/complain/list
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
   * @api {get} /api/complain/select 02. 投诉数据
   * @apiDescription 获取投诉不分页列表数据
   * @apiGroup 07. 投诉模块
   *
   * @apiParam {int} category_id 投诉分类编号
   *
   * @apiSuccess (basic params) {Number} id 投诉编号
   * @apiSuccess (basic params) {Number} category_id 投诉分类编号
   * @apiSuccess (basic params) {String} content 投诉内容
   * @apiSuccess (basic params) {String} read_status 是否查阅
   * @apiSuccess (basic params) {Number} create_time 投诉时间
   *
   * @apiSampleRequest /api/complain/select
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
   * @api {get} /api/complain/view/{id} 03. 投诉详情
   * @apiDescription 获取投诉详情
   * @apiGroup 07. 投诉模块
   *
   * @apiSuccess (basic params) {Number} id 投诉编号
   * @apiSuccess (basic params) {Number} category_id 投诉分类编号
   * @apiSuccess (basic params) {String} title 投诉标题
   * @apiSuccess (basic params) {String} picture 投诉图片资源
   * @apiSuccess (basic params) {String} url 投诉其他资源
   * @apiSuccess (basic params) {String} link 投诉链接
   * @apiSuccess (basic params) {Number} create_time 添加时间
   * @apiSuccess (member params) {String} avatar 会员头像
   * @apiSuccess (member params) {String} username 会员账户
   * @apiSuccess (member params) {String} nickname 会员昵称
   * @apiSuccess (category params) {String} title 投诉分类标题
   *
   * @apiSampleRequest /api/complain/view/{id}
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
