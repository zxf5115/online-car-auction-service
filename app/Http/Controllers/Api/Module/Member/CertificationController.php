<?php
namespace App\Http\Controllers\Api\Module\Member;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

use App\Http\Constant\Code;
use App\Http\Constant\RedisKey;
use App\Events\Common\Message\SmsEvent;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 会员认证控制器类
 */
class CertificationController extends BaseController
{
  protected $_model = 'App\Models\Api\Module\Member\Certification';

  protected $_where = [];

  protected $_params = [];

  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  protected $_relevance = [];


  /**
   * @api {post} /api/member/certification/status 01. 会员是否认证
   * @apiDescription 当前会员是否认证
   * @apiGroup 28. 会员认证模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSampleRequest /api/member/certification/status
   * @apiVersion 1.0.0
   */
  public function status(Request $request)
  {
    try
    {
      $status = true;

      $condition = self::getCurrentWhereData();

      $response = $this->_model::getRow($condition);

      if(empty($response->id))
      {
        $status = false;
      }

      return self::success($status);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }


  /**
   * @api {post} /api/member/certification/personal 02. 个人认证
   * @apiDescription 当前会员个人认证
   * @apiGroup 28. 会员认证模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} realname 姓名
   * @apiParam {string} mobile 手机号
   * @apiParam {string} certificate_no 证件号
   *
   * @apiSampleRequest /api/member/certification/personal
   * @apiVersion 1.0.0
   */
  public function personal(Request $request)
  {
    $messages = [
      'realname.required'       => '请您输入姓名',
      'mobile.required'         => '请您输入手机号',
      'mobile.regex'            => '手机号不合法',
      'certificate_no.required' => '请您证件号',
    ];

    $rule = [
      'realname'       => 'required',
      'mobile'         => 'required',
      'mobile'         => 'regex:/^1[3456789][0-9]{9}$/',     //正则验证
      'certificate_no' => 'required',
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
        $model = $this->_model::firstOrNew(['id' => $request->id]);

        $model->organization_id  = self::getOrganizationId();
        $model->member_id        = self::getCurrentId();
        $model->type             = 1;
        $model->certificate_type = 1;
        $model->realname         = $request->realname;
        $model->mobile           = $request->mobile;
        $model->certificate_no   = $request->certificate_no;
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


  /**
   * @api {post} /api/member/certification/company 03. 企业认证
   * @apiDescription 当前会员企业认证
   * @apiGroup 28. 会员认证模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} realname 法人姓名
   * @apiParam {string} mobile 手机号
   * @apiParam {string} certificate_no 注册号
   * @apiParam {string} cerificate_front_picture 证件正面图片
   * @apiParam {string} cerificate_behind_picture 证件反面图片
   *
   * @apiSampleRequest /api/member/certification/company
   * @apiVersion 1.0.0
   */
  public function company(Request $request)
  {
    $messages = [
      'realname.required'       => '请您输入姓名',
      'mobile.required'         => '请您输入手机号',
      'mobile.regex'            => '手机号不合法',
      'certificate_no.required' => '请您输入证件号',
      'cerificate_front_picture.required' => '请您上传营业执照',
    ];

    $rule = [
      'realname'       => 'required',
      'mobile'         => 'required',
      'mobile'         => 'regex:/^1[3456789][0-9]{9}$/',     //正则验证
      'certificate_no' => 'required',
      'cerificate_front_picture' => 'required',
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
        $model = $this->_model::firstOrNew(['id' => $request->id]);

        $model->organization_id  = self::getOrganizationId();
        $model->member_id        = self::getCurrentId();
        $model->type             = 3;
        $model->certificate_type = 2;
        $model->realname         = $request->realname;
        $model->mobile           = $request->mobile;
        $model->certificate_no   = $request->certificate_no;
        $model->cerificate_front_picture = $request->cerificate_front_picture;
        $model->save();

        $member = $model->member;
        $member->role_id = 1;
        $member->save();

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


  /**
   * @api {post} /api/member/certification/bankcard 04. 银行卡认证
   * @apiDescription 当前会员银行卡认证
   * @apiGroup 28. 会员认证模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} realname 银行卡户名
   * @apiParam {string} certificate_no 身份证号
   * @apiParam {string} bank_card_no 银行卡号
   * @apiParam {string} mobile 银行卡预留手机号
   * @apiParam {string} sms_code 验证码
   *
   * @apiSampleRequest /api/member/certification/bankcard
   * @apiVersion 1.0.0
   */
  public function bankcard(Request $request)
  {
    $messages = [
      'realname.required'       => '请您输入姓名',
      'mobile.required'         => '请您输入手机号',
      'mobile.regex'            => '手机号不合法',
      'sms_code.required'       => '请您输入验证码',
      'certificate_no.required' => '请您输入证件号',
      'bank_card_no.required'   => '请您输入银行卡号',
    ];

    $rule = [
      'realname'       => 'required',
      'mobile'         => 'required',
      'mobile'         => 'regex:/^1[3456789][0-9]{9}$/',     //正则验证
      'sms_code'       => 'required',
      'certificate_no' => 'required',
      'bank_card_no'   => 'required',
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
        $key = RedisKey::SMS_LOGIN_CODE . '_' . $mobile;

        $sms_code = Redis::get($key);

        // 验证码错误
        if($request->sms_code != $sms_code)
        {
          return self::error(Code::VERIFICATION_CODE);
        }

        Redis::del($key);

        $model = $this->_model::firstOrNew(['id' => $request->id]);

        $model->organization_id  = self::getOrganizationId();
        $model->member_id        = self::getCurrentId();
        $model->type             = 1;
        $model->certificate_type = 1;
        $model->realname         = $request->realname;
        $model->mobile           = $request->mobile;
        $model->certificate_no   = $request->certificate_no;
        $model->bank_card_no     = $request->bank_card_no;
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


    /**
   * @api {post} /api/member/certification/sms_code 05. 手机验证码
   * @apiDescription 获取短信登录验证码
   * @apiGroup 28. 会员认证模块
   * @apiParam {string} mobile 手机号（18201018926）
   *
   * @apiSampleRequest /api/member/certification/sms_code
   * @apiVersion 1.0.0
   */
  public function sms_code(Request $request)
  {
    if($request->isMethod('post'))
    {
      $messages = [
        'mobile.required' => '请输入用户名称',
        'mobile.regex'    => '手机号码不合法',
      ];

      $rule = [
        'mobile' => 'required',
        'mobile' => 'regex:/^1[3456789][0-9]{9}$/',     //正则验证
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
          $mobile = $request->mobile;

          $key = RedisKey::SMS_LOGIN_CODE . '_' . $mobile;

          if(Redis::exists($key))
          {
            Redis::del($key);
          }

          $code = str_pad(rand(1, 999999), 6, 0, STR_PAD_LEFT);

          Redis::set($key, $code);

          Redis::expire($key, 600);

          // 发送登录验证码
          event(new SmsEvent(1, $username, $code));

          return self::success(Code::message(Code::SEND_SUCCESS));
        }
        catch(\Exception $e)
        {
          // 记录异常信息
          self::record($e);

          return self::error(Code::ERROR);
        }
      }
    }
  }
}
