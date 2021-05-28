<?php
namespace App\Http\Controllers\Api\Module;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\TraitClass\ToolTrait;
use App\Http\Constant\Parameter;
use App\Http\Controllers\Api\BaseController;
use App\Models\Api\Module\Member\Archive;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 会员控制器类
 */
class MemberController extends BaseController
{
  protected $_model = 'App\Models\Api\Module\Member';

  protected $_where = [];

  protected $_params = [];

  protected $_addition = [];

  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  protected $_relevance = [
    'archive' => [
      'archive',
      'asset'
    ],
    'view' => [
      'archive'
    ],
    'status' => [
      'archive',
      'relevance'
    ]
  ];


  /**
   * @api {get} /api/member/archive 01. 当前会员档案
   * @apiDescription 获取当前会员的档案信息
   * @apiGroup 20. 会员模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (basic params) {Number} id 会员编号
   * @apiSuccess (basic params) {Number} role_id 角色编号 1 车商 2 消费者
   * @apiSuccess (basic params) {Number} open_id 第三方登录编号
   * @apiSuccess (basic params) {Number} member_no 会员号
   * @apiSuccess (basic params) {String} avatar 会员头像
   * @apiSuccess (basic params) {String} username 登录账户
   * @apiSuccess (basic params) {String} nickname 会员姓名
   * @apiSuccess (basic params) {Number} create_time 注册时间
   * @apiSuccess (archive params) {String} sex 性别
   * @apiSuccess (asset params) {String} cash_money 现金金额
   * @apiSuccess (asset params) {String} credit_money 信用余额
   *
   * @apiSampleRequest /api/member/archive
   * @apiVersion 1.0.0
   */
  public function archive(Request $request)
  {
    try
    {
      // 获取当前会员基础查询条件
      $condition = self::getCurrentWhereData('id');

      $condition = array_merge($condition, $this->_where);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'archive');

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
   * @api {get} /api/member/data/{id} 02. 会员数据
   * @apiDescription 获取会员详情
   * @apiGroup 20. 会员模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (basic params) {Number} id 会员编号
   * @apiSuccess (basic params) {Number} role_id 角色编号 1 车商 2 消费者
   * @apiSuccess (basic params) {Number} open_id 第三方登录编号
   * @apiSuccess (basic params) {Number} member_no 会员号
   * @apiSuccess (basic params) {String} avatar 会员头像
   * @apiSuccess (basic params) {String} username 登录账户
   * @apiSuccess (basic params) {String} nickname 会员姓名
   * @apiSuccess (basic params) {Number} create_time 注册时间
   * @apiSuccess (archive params) {String} sex 性别
   * @apiSuccess (asset params) {String} cash_money 现金金额
   * @apiSuccess (asset params) {String} credit_money 信用余额
   *
   * @apiSampleRequest /api/member/data/{id}
   * @apiVersion 1.0.0
   */
  public function data(Request $request, $id)
  {
    try
    {
      $condition = ['id' => $id];

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
   * @api {post} /api/member/handle 03. 编辑会员信息
   * @apiDescription 编辑会员信息
   * @apiGroup 20. 会员模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} avatar 会员头像（不可为空）
   * @apiParam {string} nickname 会员姓名（不可为空）
   * @apiParam {string} sex 会员性别（0未知 1男 2女 3保密）（不可为空）
   *
   * @apiSampleRequest /api/member/handle
   * @apiVersion 1.0.0
   */
  public function handle(Request $request)
  {
    $messages = [
      'nickname.required'    => '请您输入会员姓名',
      'avatar.required'      => '请您上传会员头像',
      'sex.required'         => '请您选择会员性别',
    ];

    $rule = [
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
        // 获取当前会员编号
        $member_id = self::getCurrentId();

        $model = $this->_model::firstOrNew(['id' => $member_id]);

        $model->avatar   = $request->avatar;
        $model->nickname = $request->nickname;

        $model->save();

        $data = [
          'sex' => $request->sex
        ];

        if(!empty($data))
        {
          $model->archive()->delete();
          $model->archive()->create($data);
        }

        DB::commit();

        return self::success(Code::message(Code::HANDLE_SUCCESS));
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
}