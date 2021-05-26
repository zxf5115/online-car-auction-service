<?php
namespace App\Models\Common\Module\Order;

use App\Models\Base;
use App\Enum\Module\Order\LogisticsEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-24
 *
 * 物流物流模型类
 */
class Logistics extends Base
{
  // 表名
  protected $table = "module_order_logistics";

  // 隐藏的属性
  protected $hidden = [
    'update_time'
  ];

  // 追加到模型数组表单的访问器
  protected $appends = [];

  // 批量添加
  protected $fillable = ['id'];


  /**
   * 转换属性类型
   */
  protected $casts = [
    'status' => 'array',
    'logistics_time' => 'datetime:Y-m-d H:i:s',
    'create_time' => 'datetime:Y-m-d H:i:s',
    'update_time' => 'datetime:Y-m-d H:i:s',
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-17
   * ------------------------------------------
   * 物流状态封装
   * ------------------------------------------
   *
   * 物流状态封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getLogisticsStatusAttribute($value)
  {
    return LogisticsEnum::getLogisticsStatus($value);
  }


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-16
   * ------------------------------------------
   * 物流与订单关联函数
   * ------------------------------------------
   *
   * 物流与订单关联函数
   *
   * @return [关联对象]
   */
  public function order()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Order',
      'order_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-16
   * ------------------------------------------
   * 物流与学员关联函数
   * ------------------------------------------
   *
   * 物流与学员关联函数
   *
   * @return [关联对象]
   */
  public function member()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Member',
      'member_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-16
   * ------------------------------------------
   * 物流与物流类型关联函数
   * ------------------------------------------
   *
   * 物流与物流类型关联函数
   *
   * @return [关联对象]
   */
  public function category()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Common\Logistics',
      'type',
      'id'
    );
  }
}
