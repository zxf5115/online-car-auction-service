<?php
namespace App\Models\Common\Module\Car;

use App\Models\Base;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-13
 *
 * 汽车型号模型类
 */
class Shape extends Base
{
  // 表名
  public $table = "module_car_shape";

  // 可以批量修改的字段
  public $fillable = [
    'id'
  ];

  // 隐藏的属性
  public $hidden = [
    'update_time'
  ];

  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-21
   * ------------------------------------------
   * 车型与品牌关联函数
   * ------------------------------------------
   *
   * 车型与品牌关联函数
   *
   * @return [关联对象]
   */
  public function brand()
  {
    return $this->hasOne(
      'App\Models\Common\Module\Car\Brand',
      'id',
      'brand_id',
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-21
   * ------------------------------------------
   * 车型与车型配置关联函数
   * ------------------------------------------
   *
   * 车型与车型配置关联函数
   *
   * @return [关联对象]
   */
  public function config()
  {
    return $this->hasMany(
      'App\Models\Common\Module\Car\Shape\Config',
      'shape_id',
      'id',
    );
  }
}
