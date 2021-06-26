<?php
namespace App\Http\Controllers\Api\Module\Member;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Models\Api\Module\Member\Address;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-01-18
 *
 * 会员订单控制器类
 */
class OrderController extends BaseController
{
  protected $_model = 'App\Models\Api\Module\Order';

  protected $_where = [];

  protected $_addition = [
    'car' => [
      'title'
    ]
  ];

  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  protected $_relevance = [
    'list' => [
      'source',
      'brand',
      'shape',
      'car',
      'member',
    ],
    'select' => [
      'source',
      'brand',
      'shape',
      'member'
    ],
    'view' => [
      'car.config',
      'source',
      'brand',
      'shape',
      'member',
      'logistics'
    ],
  ];


  /**
   * @api {get} /api/member/order/list?page={page} 01. 当前会员订单列表
   * @apiDescription 获取当前会员订单分页列表
   * @apiGroup 31. 会员订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   * @apiParam {int} limit 每页数量
   * @apiParam {string} car_title 汽车标题
   *
   * @apiSuccess (basic params) {Number} id 订单编号
   * @apiSuccess (basic params) {String} order_no 订单号
   * @apiSuccess (basic params) {Number} car_id 汽车编号
   * @apiSuccess (basic params) {Number} source_id 汽车来源编号
   * @apiSuccess (basic params) {Number} brand_id 汽车品牌编号
   * @apiSuccess (basic params) {Number} shape_id 汽车车型编号
   * @apiSuccess (basic params) {Number} member_id 会员编号
   * @apiSuccess (basic params) {Number} address_id 会员地址编号
   * @apiSuccess (basic params) {Number} delivery_quantity 提货数量
   * @apiSuccess (basic params) {Number} delivery_date 提货时间
   * @apiSuccess (basic params) {Number} pay_money 支付金额
   * @apiSuccess (basic params) {Number} order_status 订单状态 0 待付款 1 待提货 2 已完成 3 已取消
   * @apiSuccess (basic params) {Number} create_time 支付时间
   *
   * @apiSuccess (car params) {Number} id 汽车编号
   * @apiSuccess (car params) {String} sell_money 销售金额
   * @apiSuccess (car params) {String} other_money 其他费用
   * @apiSuccess (config params) {String} title 汽车配置标题
   * @apiSuccess (config params) {String} value 汽车配置值
   *
   * @apiSuccess (source params) {String} title 汽车来源标题
   *
   * @apiSuccess (brand params) {String} title 汽车品牌标题
   * @apiSuccess (brand params) {String} picture 汽车品牌图片
   *
   * @apiSuccess (shape params) {String} title 汽车车型标题
   *
   * @apiSuccess (member params) {Number} id 会员编号
   * @apiSuccess (member params) {String} open_id 第三方登录编号
   * @apiSuccess (member params) {Number} member_no 会员号
   * @apiSuccess (member params) {String} avatar 会员头像
   * @apiSuccess (member params) {String} username 登录账户
   * @apiSuccess (member params) {String} nickname 会员姓名
   * @apiSuccess (member params) {Number} create_time 注册时间
   *
   * @apiSampleRequest /api/member/order/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      $page = $request->limit ?? 10;

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'list');

      $response = $this->_model::getPaging($condition, $relevance, $this->_order, false, $page);

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
   * @api {get} /api/member/order/select 02. 课程订单列表(不分页)
   * @apiDescription 获取当前会员课程订单列表(不分页)
   * @apiGroup 31. 会员订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (basic params) {Number} id 订单编号
   * @apiSuccess (basic params) {String} order_no 订单号
   * @apiSuccess (basic params) {Number} car_id 汽车编号
   * @apiSuccess (basic params) {Number} source_id 汽车来源编号
   * @apiSuccess (basic params) {Number} brand_id 汽车品牌编号
   * @apiSuccess (basic params) {Number} shape_id 汽车车型编号
   * @apiSuccess (basic params) {Number} member_id 会员编号
   * @apiSuccess (basic params) {Number} address_id 会员地址编号
   * @apiSuccess (basic params) {Number} delivery_quantity 提货数量
   * @apiSuccess (basic params) {Number} delivery_date 提货时间
   * @apiSuccess (basic params) {Number} pay_money 支付金额
   * @apiSuccess (basic params) {Number} order_status 订单状态 0 待付款 1 待提货 2 已完成 3 已取消
   * @apiSuccess (basic params) {Number} create_time 支付时间
   *
   * @apiSuccess (car params) {Number} id 汽车编号
   * @apiSuccess (car params) {String} sell_money 销售金额
   * @apiSuccess (car params) {String} other_money 其他费用
   * @apiSuccess (config params) {String} title 汽车配置标题
   * @apiSuccess (config params) {String} value 汽车配置值
   *
   * @apiSuccess (source params) {String} title 汽车来源标题
   *
   * @apiSuccess (brand params) {String} title 汽车品牌标题
   * @apiSuccess (brand params) {String} picture 汽车品牌图片
   *
   * @apiSuccess (shape params) {String} title 汽车车型标题
   *
   * @apiSuccess (member params) {Number} id 会员编号
   * @apiSuccess (member params) {String} open_id 第三方登录编号
   * @apiSuccess (member params) {Number} member_no 会员号
   * @apiSuccess (member params) {String} avatar 会员头像
   * @apiSuccess (member params) {String} username 登录账户
   * @apiSuccess (member params) {String} nickname 会员姓名
   * @apiSuccess (member params) {Number} create_time 注册时间
   *
   * @apiSampleRequest /api/member/order/select
   * @apiVersion 1.0.0
   */
  public function select(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

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


  /**
   * @api {get} /api/member/order/view/{id} 03. 课程订单详情
   * @apiDescription 获取当前会员课程订单的详情
   * @apiGroup 31. 会员订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} id 订单编号
   *
   * @apiSuccess (basic params) {Number} id 订单编号
   * @apiSuccess (basic params) {String} order_no 订单号
   * @apiSuccess (basic params) {Number} car_id 汽车编号
   * @apiSuccess (basic params) {Number} source_id 汽车来源编号
   * @apiSuccess (basic params) {Number} brand_id 汽车品牌编号
   * @apiSuccess (basic params) {Number} shape_id 汽车车型编号
   * @apiSuccess (basic params) {Number} member_id 会员编号
   * @apiSuccess (basic params) {Number} address_id 会员地址编号
   * @apiSuccess (basic params) {Number} delivery_quantity 提货数量
   * @apiSuccess (basic params) {Number} delivery_date 提货时间
   * @apiSuccess (basic params) {Number} pay_money 支付金额
   * @apiSuccess (basic params) {Number} order_status 订单状态 0 待付款 1 待提货 2 已完成 3 已取消
   * @apiSuccess (basic params) {Number} create_time 支付时间
   *
   * @apiSuccess (car params) {Number} id 汽车编号
   * @apiSuccess (car params) {String} sell_money 销售金额
   * @apiSuccess (car params) {String} other_money 其他费用
   * @apiSuccess (config params) {String} title 汽车配置标题
   * @apiSuccess (config params) {String} value 汽车配置值
   *
   * @apiSuccess (source params) {String} title 汽车来源标题
   *
   * @apiSuccess (brand params) {String} title 汽车品牌标题
   * @apiSuccess (brand params) {String} picture 汽车品牌图片
   *
   * @apiSuccess (shape params) {String} title 汽车车型标题
   *
   * @apiSuccess (member params) {Number} id 会员编号
   * @apiSuccess (member params) {String} open_id 第三方登录编号
   * @apiSuccess (member params) {Number} member_no 会员号
   * @apiSuccess (member params) {String} avatar 会员头像
   * @apiSuccess (member params) {String} username 登录账户
   * @apiSuccess (member params) {String} nickname 会员姓名
   * @apiSuccess (member params) {Number} create_time 注册时间
   *
   * @apiSuccess (logistics params) {Number} type 物流类型
   * @apiSuccess (logistics params) {Number} logistics_name 物流名称
   * @apiSuccess (logistics params) {Number} logistics_no 物流单号
   * @apiSuccess (logistics params) {Number} logistics_status 物流状态 0 待发货 1 已发出 2 待收货 3 已签收
   * @apiSuccess (logistics params) {Number} logistics_time 变更时间
   * @apiSuccess (logistics params) {Number} address 物流地址
   * @apiSuccess (logistics params) {Number} content 详情
   *
   * @apiSampleRequest /api/member/order/view/{id}
   * @apiVersion 1.0.0
   */
  public function view(Request $request, $id)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      $where = ['id' => $id];

      $condition = array_merge($condition, $where);

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
   * @api {post} /api/member/order/handle 04. 创建订单
   * @apiDescription 当前会员创建订单
   * @apiGroup 31. 会员订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {Number} car_id 汽车编号
   * @apiParam {Number} source_id 汽车来源编号
   * @apiParam {Number} brand_id 汽车品牌编号
   * @apiParam {Number} shape_id 汽车型号编号
   * @apiParam {Number} address_id 会员地址编号
   * @apiParam {String} pay_money 支付金额
   *
   * @apiSampleRequest /api/member/order/handle
   * @apiVersion 1.0.0
   */
  public function handle(Request $request)
  {
    $messages = [
      'car_id.required'     => '请您输入汽车编号',
      'source_id.required'  => '请您输入汽车来源编号',
      'brand_id.required'   => '请您输入汽车品牌编号',
      'shape_id.required'   => '请您输入汽车型号编号',
      'address_id.required' => '请您输入会员地址编号',
      'pay_money.required'  => '请您输入支付金额',
    ];

    $rule = [
      'car_id'     => 'required',
      'source_id'  => 'required',
      'brand_id'   => 'required',
      'shape_id'   => 'required',
      'address_id' => 'required',
      'pay_money'  => 'required',
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
        $model = $this->_model::firstOrNew(['id' => $request->id]);

        if(empty($request->id))
        {
          $rand = str_pad(rand(1, 999999), 6, 0, STR_PAD_LEFT);

          $model->order_no = date('YmdHis') . $rand;
        }

        $model->car_id     = $request->car_id;
        $model->source_id  = $request->source_id;
        $model->brand_id   = $request->brand_id;
        $model->shape_id   = $request->shape_id;
        $model->member_id  = self::getCurrentId();
        $model->address_id = $request->address_id ?? '';
        $model->pay_money  = $request->pay_money;

        $model->save();

        $model->car()->update(['sell_status' => 1]);

        DB::commit();

        return self::success($model);
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
