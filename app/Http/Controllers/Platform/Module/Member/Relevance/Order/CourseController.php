<?php
namespace App\Http\Controllers\Platform\Module\Member\Relevance\Order;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Constant\Code;
use App\Http\Controllers\Platform\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-12-29
 *
 * 学员课程订单控制器类
 */
class CourseController extends BaseController
{
  /**
   * 操作模型
   */
  protected $_model = 'App\Models\Platform\Module\Order\Course';

  /**
   * 基本查询条件
   */
  protected $_where = [];

  /**
   * 关联查询条件
   */
  protected $_with = [];

  /**
   * 基础查询字段
   */
  protected $_params = [
    'member_id'
  ];

  /**
   * 关联查询字段
   */
  protected $_addition = [];

  /**
   * 排序方式
   */
  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  /**
   * 关联查询对象
   */
  protected $_relevance = [
    'select' => [
      'courseware',
      'level',
      'course'
    ]
  ];



}
