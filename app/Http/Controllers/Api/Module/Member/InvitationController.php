<?php
namespace App\Http\Controllers\Api\Module\Member;

use Illuminate\Http\Request;

use zxf5115\Upload\File;
use App\Http\Constant\Code;
use App\Models\Api\Module\Member;
use App\Models\Common\System\Config;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-07-13
 *
 * 会员邀请控制器类
 */
class InvitationController extends BaseController
{
  /**
   * @api {get} /api/member/invitation/data 01. 邀请人数据
   * @apiDescription 获取当前用户邀请数据
   * @apiGroup 23. 会员邀请模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (字段说明) {String} qrcode 二维码图片
   *
   * @apiSampleRequest /api/member/invitation/data
   * @apiVersion 1.0.0
   */
  public function data(Request $request)
  {
    try
    {
      $member_id = self::getCurrentId();


      // 获取微信token信息
      $result = Member::getWeixinToken();

      if(empty($result['access_token']))
      {
        return self::error(Code::ERROR);
      }

      $token = $result['access_token'];

      // 获取微信二维码数据
      $result = Member::getQrCode($token, $member_id);

      $filename = md5(time() . rand(1, 9999999)). '.png';

      $uri = storage_path('app/public/qrcode/' . $filename);

      $web_url = Config::getConfigValue('web_url');

      $url = $web_url . '/storage/qrcode/' . $filename;

      file_put_contents($uri, $result);

      $response['qrcode'] = $url;

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
