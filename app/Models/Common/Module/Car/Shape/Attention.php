<?php
namespace App\Models\Common\Module\Car\Shape;

use App\Models\Base;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-07-19
 *
 * 车型关注模型类
 */
class Attention extends Base
{
  // 表名
  public $table = "module_car_shape_attention";

  // 可以批量修改的字段
  public $fillable = [
    'id',
    'organization_id',
    'member_id',
    'shape_id',
  ];

  // 隐藏的属性
  public $hidden = [
    'status',
    'update_time'
  ];

  // 追加到模型数组表单的访问器
  protected $appends = [];


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-07-19
   * ------------------------------------------
   * 车型关注与会员关联表
   * ------------------------------------------
   *
   * 车型关注与会员关联表
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
   * @dateTime 2021-07-19
   * ------------------------------------------
   * 车型关注与车型关联表
   * ------------------------------------------
   *
   * 车型关注与车型关联表
   *
   * @return [关联对象]
   */
  public function shape()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Car\Shape',
      'shape_id',
      'id'
    );
  }
}
