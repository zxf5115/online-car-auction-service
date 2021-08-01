<?php
namespace App\Http\Controllers\Api\Module\Member;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

use App\Http\Constant\Code;
use App\Models\Api\System\Config;
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
   * @api {post} /api/member/invitation/data 01. 邀请人数据
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

      $filename = md5(time() . rand(1, 9999999)). '.png';

      $uri = storage_path('app/public/qrcode/' . $filename);

      $web_url = Config::getConfigValue('web_url');

      $url = $web_url . '/storage/qrcode/' . $filename;

      $params = $member_id;

      // 生成带有邀请人信息的二维码
      QrCode::format('png')->size(300)->encoding('UTF-8')->generate($params, $uri);

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
