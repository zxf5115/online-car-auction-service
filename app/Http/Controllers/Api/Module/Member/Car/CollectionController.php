<?php
namespace App\Http\Controllers\Api\Module\Member\Car;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-06-11
 *
 * 会员收藏控制器类
 */
class CollectionController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Car\Collection';

  // 关联对像
  protected $_relevance = [
    'list' => [
      'car.source',
      'car.brand',
      'car.shape',
      'car.resource',
    ]
  ];


  /**
   * @api {get} /api/member/car/collection/list?page={page} 01. 我的收藏列表
   * @apiDescription 获取当前会员汽车收藏分页列表
   * @apiGroup 46. 汽车收藏模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (basic params) {String} car_id 汽车编号
   * @apiSuccess (basic params) {String} create_time 收藏时间
   * @apiSuccess (car params) {Number} id 汽车编号
   * @apiSuccess (car params) {Number} member_id 车商编号
   * @apiSuccess (car params) {Number} source_id 汽车来源编号
   * @apiSuccess (car params) {Number} brand_id 汽车车型编号
   * @apiSuccess (car params) {Number} shape_id 汽车车型编号
   * @apiSuccess (car params) {Number} title 汽车标题
   * @apiSuccess (car params) {Number} vedio_url 汽车视频地址
   * @apiSuccess (car params) {string} sell_money 销售价格
   * @apiSuccess (car params) {string} other_money 其他费用
   * @apiSuccess (car params) {string} sell_status 售卖状态 0 待出售 1 已出售
   * @apiSuccess (car params) {string} create_time 发布时间
   * @apiSuccess (source params) {string} title 汽车来源名称
   * @apiSuccess (brand params) {string} title 汽车品牌名称
   * @apiSuccess (brand params) {string} picture 汽车品牌图片
   * @apiSuccess (shape params) {string} picture 汽车车型名称
   *
   * @apiSampleRequest /api/member/car/collection/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

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
   * @api {post} /api/member/car/collection/status 02. 汽车是否收藏
   * @apiDescription 获取当前会员汽车收藏的详情
   * @apiGroup 46. 汽车收藏模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (字段说明) {Number} car_id 汽车编号
   *
   * @apiSampleRequest /api/member/car/collection/status
   * @apiVersion 1.0.0
   */
  public function status(Request $request)
  {
    $messages = [
      'car_id.required' => '请您输入汽车编号',
    ];

    $rule = [
      'car_id' => 'required',
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
        $status = true;

        $condition = self::getCurrentWhereData();

        $where = ['car_id' => $request->car_id];

        $condition = array_merge($condition, $where);

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
  }


  /**
   * @api {post} /api/member/car/collection/handle 03. 收藏操作
   * @apiDescription 当前会员执行汽车收藏操作, 已经收藏过，再次点击取消收藏
   * @apiGroup 46. 汽车收藏模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} car_id 汽车编号
   *
   * @apiSampleRequest /api/member/car/collection/handle
   * @apiVersion 1.0.0
   */
  public function handle(Request $request)
  {
    $messages = [
      'car_id.required' => '请您输入汽车编号',
    ];

    $rule = [
      'car_id' => 'required',
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
        $this->_model::createOrDelete([
          'member_id' => self::getCurrentId(),
          'car_id' => $request->car_id
        ]);

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
