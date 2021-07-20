<?php
namespace App\Http\Controllers\Api\Module\Member;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Models\Api\Module\Message;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-07-20
 *
 * 会员消息控制器类
 */
class MessageController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Member\MemberMessage';


  protected $_relevance = [
    'message'
  ];

  /**
   * @api {get} /api/member/message/list?page={page} 01. 我的消息列表
   * @apiDescription 获取当前会员消息分页列表
   * @apiGroup 25. 会员消息模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (message params) {Number} id 会员消息编号
   * @apiSuccess (basic params) {Number} read_status 阅读状态
   * @apiSuccess (basic params) {Number} create_time 创建时间
   * @apiSuccess (message params) {Number} id 消息编号
   * @apiSuccess (message params) {Number} type 消息类型 1 系统消息 2 普通消息
   * @apiSuccess (message params) {Number} title 消息标题
   * @apiSuccess (message params) {Number} content 消息内容
   *
   * @apiSampleRequest /api/member/message/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData('member_id');

      $condition = array_merge($condition, $this->_where);

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
   * @api {post} /api/member/message/view/{id} 02. 会员消息详情
   * @apiDescription 获取当前会员消息详情
   * @apiGroup 25. 会员消息模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSampleRequest /api/member/message/view
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


  /**
   * @api {post} /api/member/message/read 03. 消息已读
   * @apiDescription 当前会员执行消息已读
   * @apiGroup 25. 会员消息模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} id 会员消息编号
   *
   * @apiSampleRequest /api/member/message/read
   * @apiVersion 1.0.0
   */
  public function read(Request $request)
  {
    try
    {
      $where = [
        'id' => $request->id,
      ];

      // 设置为已读
      $model = $this->_model::getRow($where);
      $model->read_status = 1;
      $model->save();

      return self::success(Code::message(Code::HANDLE_SUCCESS));
    }
    catch(\Exception $e)
    {
      self::record($e);

      return self::error(Code::HANDLE_FAILURE);
    }
  }
}
