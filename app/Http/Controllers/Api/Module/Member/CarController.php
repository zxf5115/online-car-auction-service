<?php
namespace App\Http\Controllers\Api\Module\Member;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-30
 *
 * 汽车控制器类
 */
class CarController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Api\Module\Car';

  protected $_where = [
    'audit_status' => 1
  ];

  protected $_params = [
    'source_id',
    'brand_id',
    'shape_id',
  ];

  protected $_addition = [];

  /**
   * 排序条件
   */
  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  protected $_relevance = [
    'list' => [
      'source',
      'brand',
      'shape'
    ],
    'select' => false,
    'view' => [
      'source',
      'brand',
      'shape',
      'config',
      'resource',
      'member',
    ]
  ];


  /**
   * @api {get} /api/member/car/list?page={page} 01. 当前会员汽车列表
   * @apiDescription 获取当前会员汽车分页列表
   * @apiGroup 30. 会员汽车模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   * @apiParam {int} limit 每页数量
   * @apiParam {int} source_id 汽车来源编号
   * @apiParam {int} brand_id 汽车品牌编号
   * @apiParam {int} shape_id 汽车车型编号
   *
   * @apiSuccess (basic params) {Number} id 汽车编号
   * @apiSuccess (basic params) {Number} member_id 车商编号
   * @apiSuccess (basic params) {Number} source_id 汽车来源编号
   * @apiSuccess (basic params) {Number} brand_id 汽车品牌编号
   * @apiSuccess (basic params) {Number} shape_id 汽车车型编号
   * @apiSuccess (basic params) {Number} title 汽车标题
   * @apiSuccess (basic params) {Number} vedio_url 汽车视频地址
   * @apiSuccess (basic params) {string} sell_money 销售价格
   * @apiSuccess (basic params) {string} other_money 其他费用
   * @apiSuccess (basic params) {string} sell_status 售卖状态 0 待出售 1 已出售
   * @apiSuccess (basic params) {string} create_time 发布时间
   * @apiSuccess (source params) {string} title 汽车来源名称
   * @apiSuccess (brand params) {string} title 汽车品牌名称
   * @apiSuccess (brand params) {string} picture 汽车品牌图片
   * @apiSuccess (shape params) {string} picture 汽车车型名称
   *
   * @apiSampleRequest /api/member/car/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $pay_where = $this->_model::getPayMoneyWhere($request->pay_money);

      $condition = self::getCurrentWhereData();

      $page = $request->limit ?? 10;

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter, $pay_where);

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
   * @api {get} /api/member/car/select 02. 当前会员汽车数据
   * @apiDescription 获取当前会员汽车不分页列表数据
   * @apiGroup 30. 会员汽车模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} source_id 汽车来源编号
   * @apiParam {int} brand_id 汽车品牌编号
   * @apiParam {int} shape_id 汽车车型编号
   *
   * @apiSuccess (basic params) {Number} id 汽车编号
   * @apiSuccess (basic params) {Number} member_id 车商编号
   * @apiSuccess (basic params) {Number} source_id 汽车来源编号
   * @apiSuccess (basic params) {Number} brand_id 汽车品牌编号
   * @apiSuccess (basic params) {Number} shape_id 汽车车型编号
   * @apiSuccess (basic params) {Number} title 汽车标题
   * @apiSuccess (basic params) {Number} vedio_url 汽车视频地址
   * @apiSuccess (basic params) {string} sell_money 销售价格
   * @apiSuccess (basic params) {string} other_money 其他费用
   * @apiSuccess (basic params) {string} sell_status 售卖状态 0 待出售 1 已出售
   * @apiSuccess (basic params) {string} create_time 发布时间
   *
   * @apiSampleRequest /api/member/car/select
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
   * @api {get} /api/member/car/view/{id} 03. 当前会员汽车详情
   * @apiDescription 获取当前会员汽车详情
   * @apiGroup 30. 会员汽车模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (basic params) {Number} id 汽车编号
   * @apiSuccess (basic params) {Number} member_id 车商编号
   * @apiSuccess (basic params) {Number} source_id 汽车来源编号
   * @apiSuccess (basic params) {Number} brand_id 汽车品牌编号
   * @apiSuccess (basic params) {Number} shape_id 汽车车型编号
   * @apiSuccess (basic params) {Number} title 汽车标题
   * @apiSuccess (basic params) {Number} vedio_url 汽车视频地址
   * @apiSuccess (basic params) {string} sell_money 销售价格
   * @apiSuccess (basic params) {string} other_money 其他费用
   * @apiSuccess (basic params) {string} sell_status 售卖状态 0 待出售 1 已出售
   * @apiSuccess (basic params) {string} create_time 发布时间
   * @apiSuccess (source params) {string} title 汽车来源名称
   * @apiSuccess (brand params) {string} title 汽车品牌名称
   * @apiSuccess (brand params) {string} title 汽车品牌图片
   * @apiSuccess (shape params) {string} picture 汽车车型名称
   * @apiSuccess (config params) {string} title 汽车配置名称
   * @apiSuccess (config params) {string} value 汽车配置值
   * @apiSuccess (resource params) {string} picture 汽车图片资源地址
   * @apiSuccess (member params) {string} nickname 车商昵称
   *
   * @apiSampleRequest /api/member/car/view/{id}
   * @apiVersion 1.0.0
   */
  public function view(Request $request, $id)
  {
    try
    {
      $condition = self::getCurrentWhereData($id);

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
   * @api {post} /api/member/car/handle 04. 编辑汽车信息
   * @apiDescription 当前会员新增或者编辑汽车信息
   * @apiGroup 30. 会员汽车模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} id 存在为编辑，否则新增
   * @apiParam {string} source_id 汽车来源编号
   * @apiParam {string} brand_id 汽车品牌编号
   * @apiParam {string} shape_id 汽车车型编号
   * @apiParam {string} title 汽车标题
   * @apiParam {string} sell_money 销售价格
   * @apiParam {string} [other_money] 其他费用
   * @apiParam {string} [vedio_url] 汽车视频地址
   * @apiParam {array} [url] 汽车图片地址
   * @apiParam {array} [config] 汽车配置
   * @apiParamExample {json} 请求示例
   * {
        "source_id":"51","brand_id":"51","shape_id":"1","title":"踩踩踩","sell_money":"88","other_money":"2","vedio_url":"http:www.baidu.com","url":["http://www.baidu.com","http://www.baidu.com","http://www.baidu.com"],"config":[{"title":"车辆颜色","value":"白色"},{"title":"车辆场地","value":"德国"},{"title":"具体型号","value":"X360"},{"title":"公里数","value":"18万"}]
   * }
   *
   * @apiSampleRequest /api/member/car/handle
   * @apiVersion 1.0.0
   */
  public function handle(Request $request)
  {
    $messages = [
      'source_id.required'  => '请您输入汽车来源编号',
      'brand_id.required'   => '请您输入汽车品牌编号',
      'shape_id.required'   => '请您输入汽车车型编号',
      'title.required'      => '请您输入汽车标题',
      'sell_money.required' => '请您输入销售价格',
    ];

    $rule = [
      'source_id'  => 'required',
      'brand_id'   => 'required',
      'shape_id'   => 'required',
      'title'      => 'required',
      'sell_money' => 'required',
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

        $model->member_id   = self::getCurrentId();
        $model->source_id   = $request->source_id;
        $model->brand_id    = $request->brand_id;
        $model->shape_id    = $request->shape_id;
        $model->title       = $request->title;
        $model->sell_money  = $request->sell_money;
        $model->other_money = $request->other_money ?? '';
        $model->vedio_url   = $request->vedio_url ?? '';
        $model->save();

        $data = self::packRelevanceData($request, 'url', true);

        if(!empty($data))
        {
          $model->resource()->delete();
          $model->resource()->createMany($data);
        }

        $config = json_decode($request->config, true);

        if(!empty($config))
        {
          $model->config()->delete();
          $model->config()->createMany($config);
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
