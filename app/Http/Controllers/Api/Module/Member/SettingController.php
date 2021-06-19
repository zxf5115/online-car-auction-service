<?php
namespace App\Http\Controllers\Api\Module\Member;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-06-10
 *
 * 设置控制器类
 */
class SettingController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Member\Setting';


  /**
   * @api {get} /api/member/setting/data 01. 我的设置
   * @apiDescription 获取我的设置详情
   * @apiGroup 24. 会员设置模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (字段说明) {String} delivery_switch 交付开关 1 送车服务 2 门店自提
   *
   * @apiSampleRequest /api/member/setting/data
   * @apiVersion 1.0.0
   */
  public function data(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData('member_id');

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'data');

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
   * @api {post} /api/member/setting/handle 02. 交付设置
   * @apiDescription 当前会员设置推送开关
   * @apiGroup 24. 会员设置模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} delivery_switch 交付开关 1 送车服务 2 门店自提
   *
   * @apiSampleRequest /api/member/setting/handle
   * @apiVersion 1.0.0
   */
  public function handle(Request $request)
  {
    $messages = [
      'delivery_switch.required' => '请您输入交付开关',
    ];

    $rule = [
      'delivery_switch' => 'required',
    ];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      try
      {
        $model = $this->_model::getRow(['member_id' => self::getCurrentId()]);
        $model->delivery_switch    = $request->delivery_switch;
        $model->save();

        return self::success(Code::message(Code::HANDLE_SUCCESS));
      }
      catch(\Exception $e)
      {
        // 记录异常信息
        self::record($e);

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }
}
