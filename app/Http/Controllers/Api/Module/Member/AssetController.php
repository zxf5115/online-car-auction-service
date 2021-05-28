<?php
namespace App\Http\Controllers\Api\Module\Member;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-02-02
 *
 * 会员资金控制器类
 */
class AssetController extends BaseController
{
  protected $_model = 'App\Models\Api\Module\Member\Asset';

  protected $_where = [];

  protected $_params = [];

  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  protected $_relevance = [];


  /**
   * @api {post} /api/member/asset/center 01. 会员资金中心
   * @apiDescription 获取当前会员资金信息
   * @apiGroup 21. 会员资金模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (basic params) {String} cash_money 现金金额
   * @apiSuccess (basic params) {String} credit_money 信用余额
   *
   * @apiSampleRequest /api/member/asset/center
   * @apiVersion 1.0.0
   */
  public function center(Request $request)
  {
    try
    {
      $status = true;

      $condition = self::getCurrentWhereData();

      $response = $this->_model::getRow($condition);

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
