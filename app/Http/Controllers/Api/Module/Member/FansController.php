<?php
namespace App\Http\Controllers\Api\Module\Member;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 会员粉丝控制器类
 */
class FansController extends BaseController
{
  // 模型
  protected $_model = 'App\Models\Api\Module\Member\Attention';

  // 默认查询条件
  protected $_where = [];

  // 查询条件
  protected $_params = [];

  // 附加关联查询条件
  protected $_addition = [];

  // 排序条件
  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  // 关联对像
  protected $_relevance = [
    'list' => [
      'member',
      'attention'
    ],
    'select' => [
      'member',
      'attention'
    ],
    'view' => [
      'member',
      'attention'
    ]
  ];


  /**
   * @api {get} /api/member/fans/list?page={page} 01. 当前会员粉丝列表
   * @apiDescription 获取当前会员粉丝分页列表
   * @apiGroup 24. 会员粉丝模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (basic params) {Number} id 会员关注编号
   * @apiSuccess (basic params) {Number} member_id 粉丝编号
   * @apiSuccess (basic params) {Number} attention_member_id 当前会员编号
   * @apiSuccess (basic params) {Number} create_time 关注时间
   * @apiSuccess (member params) {Number} nickname 粉丝会员昵称
   * @apiSuccess (attention params) {Number} nickname 当前会员昵称
   *
   * @apiSampleRequest /api/member/fans/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData('attention_member_id');

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
   * @api {get} /api/member/fans/select 02. 当前会员关注数据
   * @apiDescription 获取当前会员关注不分页列表数据
   * @apiGroup 24. 会员粉丝模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (basic params) {Number} id 会员关注编号
   * @apiSuccess (basic params) {Number} member_id 粉丝编号
   * @apiSuccess (basic params) {Number} attention_member_id 当前会员编号
   * @apiSuccess (basic params) {Number} create_time 关注时间
   * @apiSuccess (member params) {Number} nickname 粉丝会员昵称
   * @apiSuccess (attention params) {Number} nickname 当前会员昵称
   *
   * @apiSampleRequest /api/member/fans/select
   * @apiVersion 1.0.0
   */
  public function select(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData('attention_member_id');

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
