<?php
namespace App\Http\Controllers\Api\Module\Common;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Constant\Parameter;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-02-22
 *
 * 购车指南控制器类
 */
class ProblemController extends BaseController
{
  protected $_model = 'App\Models\Api\Module\Common\Problem';

  protected $_where = [];

  protected $_params = [];

  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  protected $_relevance = [
    'category'
  ];


  /**
   * @api {get} /api/common/problem/list?page={page} 01. 购车指南列表
   * @apiDescription 获取购车指南分页列表
   * @apiGroup 09. 购车指南模块
   *
   * @apiParam {int} page 当前页数
   * @apiParam {int} limit 每页数量
   *
   * @apiSuccess (basic params) {Number} id 购车指南编号
   * @apiSuccess (basic params) {String} title 购车指南标题
   * @apiSuccess (basic params) {String} content 购车指南内容
   * @apiSuccess (category params) {String} title 购车指南分类标题
   *
   * @apiSampleRequest /api/common/problem/list
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
   * @api {get} /api/common/problem/select 02. 购车指南数据
   * @apiDescription 获取购车指南不分页列表数据
   * @apiGroup 09. 购车指南模块
   *
   * @apiSuccess (basic params) {Number} id 购车指南编号
   * @apiSuccess (basic params) {String} title 购车指南标题
   * @apiSuccess (basic params) {String} content 购车指南内容
   * @apiSuccess (category params) {String} title 购车指南分类标题
   *
   * @apiSampleRequest /api/common/problem/select
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
   * @api {get} /api/common/problem/view/{id} 03. 购车指南详情
   * @apiDescription 获取购车指南详情
   * @apiGroup 09. 购车指南模块
   *
   * @apiSuccess (basic params) {Number} id 购车指南编号
   * @apiSuccess (basic params) {String} title 购车指南标题
   * @apiSuccess (basic params) {String} content 购车指南内容
   * @apiSuccess (category params) {String} title 购车指南分类标题
   *
   * @apiSampleRequest /api/common/problem/view/{id}
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
