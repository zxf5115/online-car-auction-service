<?php
namespace App\Http\Controllers\Api\Module;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Models\Api\Module\Car\Browse;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-29
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
    'audit_status' => 1,
  ];

  protected $_params = [
    'member_id',
    'source_id',
    'brand_id',
    'shape_id',
    'title',
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
      'shape',
      'resource'
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
   * @api {get} /api/car/list?page={page} 01. 汽车列表
   * @apiDescription 获取汽车分页列表
   * @apiGroup 45. 汽车模块
   *
   * @apiParam {int} page 当前页数
   * @apiParam {int} limit 每页数量
   * @apiParam {int} member_id 车商编号
   * @apiParam {int} source_id 汽车来源编号
   * @apiParam {int} brand_id 汽车品牌编号
   * @apiParam {int} shape_id 汽车车型编号
   * @apiParam {int} title 汽车标题
   * @apiParam {int} pay_money 销售价格 (空:不限制, 1:0-50w以下, 2:50w-100w, 3:100w-150w, 4:150w-200w, 5:200w以上)
   * @apiParam {int} car_operation 操作方式 (空:不限制, 手动、自动)
   * @apiParam {int} car_type 汽车类型 (空:不限制, 代步车、SUV、中型车、商务车)
   * @apiParam {int} car_displacement 汽车排量 (空:不限制, 1:1.5L-2.0L, 2:2.0L-2.5L, 3:2.5L-3.0L, 4:3.0L-4.0L, 5:4.0L以上, 6:其他)
   * @apiParam {int} car_seat 座位数 (空:不限制, 2座、3座、4座)
   * @apiParam {int} car_country 汽车产地 (空:不限制, 美版、加版、欧版、中东版)
   * @apiParam {int} car_drive 汽车驱动 (空:不限制, 前驱、后驱、四驱)
   * @apiParam {int} car_power 汽车动力 (空:不限制, 汽油、柴油、纯电动)
   * @apiParam {int} car_structure 汽车结构 (空:不限制, 两厢、三厢、掀背)
   * @apiParam {int} sort 排序方式 (空:默认排序, asc: 价格从小到大，desc: 价格从大到小)
   *
   * @apiSuccess (basic params) {Number} id 汽车编号
   * @apiSuccess (basic params) {Number} member_id 车商编号
   * @apiSuccess (basic params) {Number} source_id 汽车来源编号
   * @apiSuccess (basic params) {Number} brand_id 汽车车型编号
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
   * @apiSampleRequest /api/car/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $where = [];

      // 如果存在排序条件
      if(!empty($request->sort))
      {
        $this->_order = [
          ['key' => 'sell_money', 'value' => $request->sort],
        ];
      }

      $condition = self::getSimpleWhereData();

      $page = $request->limit ?? 10;

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      // 获取组合查询条件
      list($flag, $data) = $this->_model::getCombinationWhere($request);

      if($flag && empty($data))
      {
        $where = [['id', '<', '-1']];
      }
      else
      {
        if(!empty($data))
        {
          $where = [
            ['id', $data]
          ];
        }
      }

      $condition = array_merge($condition, $this->_where, $filter, $where);

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
   * @api {get} /api/car/select 02. 汽车数据
   * @apiDescription 获取汽车不分页列表数据
   * @apiGroup 45. 汽车模块
   *
   * @apiParam {int} shape_id 汽车车型编号
   * @apiParam {int} pay_money 1 5以前 2 5-8 3 8-12 4 12-20 5 20-30 6 30以上
   *
   * @apiSuccess (basic params) {Number} id 汽车编号
   * @apiSuccess (basic params) {Number} member_id 车商编号
   * @apiSuccess (basic params) {Number} source_id 汽车来源编号
   * @apiSuccess (basic params) {Number} brand_id 汽车车型编号
   * @apiSuccess (basic params) {Number} shape_id 汽车车型编号
   * @apiSuccess (basic params) {Number} title 汽车标题
   * @apiSuccess (basic params) {Number} vedio_url 汽车视频地址
   * @apiSuccess (basic params) {string} sell_money 销售价格
   * @apiSuccess (basic params) {string} other_money 其他费用
   * @apiSuccess (basic params) {string} sell_status 售卖状态 0 待出售 1 已出售
   * @apiSuccess (basic params) {string} create_time 发布时间
   *
   * @apiSampleRequest /api/car/select
   * @apiVersion 1.0.0
   */
  public function select(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData();

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
   * @api {get} /api/car/view/{id} 03. 汽车详情
   * @apiDescription 获取汽车详情
   * @apiGroup 45. 汽车模块
   *
   * @apiSuccess (basic params) {Number} id 汽车编号
   * @apiSuccess (basic params) {Number} member_id 车商编号
   * @apiSuccess (basic params) {Number} source_id 汽车来源编号
   * @apiSuccess (basic params) {Number} brand_id 汽车车型编号
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
   * @apiSampleRequest /api/car/view/{id}
   * @apiVersion 1.0.0
   */
  public function view(Request $request, $id)
  {
    try
    {
      $condition = self::getSimpleWhereData($id);

      $browse = Browse::firstOrNew(['id' => '']);
      $browse->car_id = $id;
      $browse->save();

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
   * @api {get} /api/car/recommend 04. 推荐汽车
   * @apiDescription 获取推荐汽车不分页列表数据
   * @apiGroup 45. 汽车模块
   *
   * @apiParam {int} shape_id 汽车车型编号
   * @apiParam {int} total 显示数量 默认显示8个
   *
   * @apiSuccess (basic params) {Number} id 汽车编号
   * @apiSuccess (basic params) {Number} member_id 车商编号
   * @apiSuccess (basic params) {Number} source_id 汽车来源编号
   * @apiSuccess (basic params) {Number} brand_id 汽车车型编号
   * @apiSuccess (basic params) {Number} shape_id 汽车车型编号
   * @apiSuccess (basic params) {Number} title 汽车标题
   * @apiSuccess (basic params) {Number} vedio_url 汽车视频地址
   * @apiSuccess (basic params) {string} sell_money 销售价格
   * @apiSuccess (basic params) {string} other_money 其他费用
   * @apiSuccess (basic params) {string} sell_status 售卖状态 0 待出售 1 已出售
   * @apiSuccess (basic params) {string} create_time 发布时间
   *
   * @apiSampleRequest /api/car/recommend
   * @apiVersion 1.0.0
   */
  public function recommend(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData('1', 'is_recommend');

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'select');

      $total = $request->total ?? 8;

      $response = $this->_model::getList($condition, $relevance, $this->_order, false, $total);

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
