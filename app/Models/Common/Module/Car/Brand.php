<?php
namespace App\Models\Common\Module\Car;

use App\Models\Base;
use App\Enum\Module\Car\BrandEnum;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-13
 *
 * 汽车品牌模型类
 */
class Brand extends Base
{
  // 表名
  public $table = "module_car_brand";

  // 可以批量修改的字段
  public $fillable = [
    'id'
  ];

  // 隐藏的属性
  public $hidden = [
    'update_time'
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-29
   * ------------------------------------------
   * 热门类型封装
   * ------------------------------------------
   *
   * 热门类型封装
   *
   * @param int $value 状态值
   * @return 状态信息
   */
  public function getIsHotAttribute($value)
  {
    return BrandEnum::getIsHotStatus($value);
  }


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-21
   * ------------------------------------------
   * 品牌与车型关联函数
   * ------------------------------------------
   *
   * 品牌与车型关联函数
   *
   * @return [关联对象]
   */
  public function shape()
  {
    return $this->hasMany(
      'App\Models\Common\Module\Car\Shape',
      'brand_id',
      'id',
    );
  }
}
