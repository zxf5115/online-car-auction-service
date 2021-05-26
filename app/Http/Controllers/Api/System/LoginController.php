<?php
namespace App\Http\Controllers\Api\System;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Validator;

use App\Http\Constant\Code;
use App\TraitClass\ToolTrait;
use App\Http\Constant\RedisKey;
use App\Http\Constant\Parameter;
use App\Models\Api\Module\Member;
use App\Events\Common\Message\SmsEvent;
use App\Http\Controllers\Api\BaseController;
use App\Models\Api\Module\Member\Relevance\Archive;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-10-21
 *
 * 登录控制器
 */
class LoginController extends BaseController
{
  /**
   * @api {post} /api/weixin_login 01. 微信登录
   * @apiDescription 通过微信进行登录
   * @apiGroup 02. 登录模块
   * @apiParam {string} open_id 微信OpenID
   *
   * @apiSuccess (basic params) {String} token 身份令牌
   * @apiSuccess (user_info params) {Number} id 会员编号
   * @apiSuccess (user_info params) {Number} role_id 角色编号 1 车商 2 消费者
   * @apiSuccess (user_info params) {Number} open_id 第三方登录编号
   * @apiSuccess (user_info params) {Number} member_no 会员号
   * @apiSuccess (user_info params) {String} avatar 会员头像
   * @apiSuccess (user_info params) {String} username 登录账户
   * @apiSuccess (user_info params) {String} nickname 会员昵称
   * @apiSuccess (user_info params) {String} create_time 注册时间
   * @apiSuccess (role params) {String} id 角色编号
   * @apiSuccess (role params) {String} title 角色名称
   * @apiSuccess (role params) {String} content 角色描述
   *
   * @apiSampleRequest /api/weixin_login
   * @apiVersion 1.0.0
   */
  public function weixin_login(Request $request)
  {
    $messages = [
      'open_id.required' => '请输入微信密钥',
    ];

    $rule = [
      'open_id' => 'required',
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
        $condition = self::getSimpleWhereData();

        $where = ['open_id' => $request->open_id];

        $where = array_merge($condition, $where);

        $response = Member::getRow($where);

        // 用户不存在
        if(is_null($response))
        {
          return self::error(Code::USER_EMPTY);
        }

        // 用户已禁用
        if(2 == $response->status['value'])
        {
          return self::error(Code::MEMBER_DISABLE);
        }

        // 在特定时间内访问次数过多，就触发访问限制
        if(Member::AccessRestrictions($response))
        {
          return self::error(Code::ACCESS_RESTRICTIONS);
        }

        // 认证用户密码是否可以登录
        if (! $token = auth('api')->tokenById($response->id))
        {
          return self::error(Code::USER_EMPTY);
        }

        // 获取客户端ip地址
        $response->last_login_ip = $request->getClientIp();

        $old_token = $response->remember_token;

        if(!empty($old_token))
        {
          \JWTAuth::setToken($old_token)->invalidate();
        }

        // 记录登录信息
        Member::login($response);

        return self::success([
          'code' => 200,
          'token' => $token,
          'token_type' => 'bearer',
          'expires_in' => auth('api')->factory()->getTTL() * 60,
          'user_info' => $response
        ]);
      }
      catch(\Exception $e)
      {
        // 记录异常信息
        self::record($e);

        return self::error(Code::ERROR);
      }
    }
  }


  /**
   * @api {post} /api/register 02. 用户注册
   * @apiDescription 注册用户信息
   * @apiGroup 02. 登录模块
   *
   * @apiParam {int} open_id 微信app编号
   * @apiParam {int} role_id 会员角色 1 车商 2 消费者
   * @apiParam {int} username 登录手机号码（不可为空）
   * @apiParam {string} avatar 会员头像（不可为空）
   * @apiParam {string} nickname 会员姓名（不可为空）
   * @apiParam {string} sex 会员性别（不可为空）
   * @apiParam {string} province_id 省（可以为空）
   * @apiParam {string} city_id 市（可以为空）
   * @apiParam {string} region_id 县（可以为空）
   *
   * @apiSampleRequest /api/register
   * @apiVersion 1.0.0
   */
  public function register(Request $request)
  {
    $messages = [
      'role_id.required'     => '请您选择会员角色',
      'username.required'    => '请您输入登录手机号码',
      'nickname.required'    => '请您输入会员姓名',
      'avatar.required'      => '请您上传会员头像',
      'sex.required'         => '请您选择会员性别',
    ];

    $rule = [
      'role_id'     => 'required',
      'username'    => 'required',
      'nickname'    => 'required',
      'avatar'      => 'required',
      'sex'         => 'required',
    ];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      DB::beginTransaction();

      try
      {
        $model = Member::firstOrNew([
          'open_id' => $request->open_id,
          'status' => 1
        ]);

        if(empty($request->id))
        {
          $model->member_no = ToolTrait::generateOnlyNumber(3);
        }

        $model->open_id  = $request->open_id;
        $model->role_id  = $request->role_id;
        $model->avatar   = $request->avatar;
        $model->username = $request->username;
        $model->nickname = $request->nickname;

        $model->save();

        $member_id = $model->id;

        $archive = Archive::firstOrCreate(['member_id' => $member_id]);

        $archive->member_id   = $member_id;
        $archive->sex         = $request->sex ?? '1';
        $archive->province_id = $request->province_id ?? '';
        $archive->city_id     = $request->city_id ?? '';
        $archive->region_id   = $request->region_id ?? '';

        $archive->save();

        $data = ['red_envelope' => 0.00, 'lollipop' => 0, 'production' => 0];

        $model->asset()->delete();
        $model->asset()->create($data);

        DB::commit();

        return self::success(Code::message(Code::REGISTER_SUCCESS));
      }
      catch(\Exception $e)
      {
        DB::rollback();

        // 记录异常信息
        self::record($e);

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }


  /**
   * @api {get} /api/logout 03. 退出
   * @apiDescription 退出登录状态
   * @apiGroup 02. 登录模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiSampleRequest /api/logout
   * @apiVersion 1.0.0
   */
  public function logout()
  {
    try
    {
      auth('api')->logout();

      return self::success([], '退出成功');
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }
}
