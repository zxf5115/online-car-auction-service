<?php
namespace App\Models\Common\Module\Car;

use App\Models\Base;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-23
 *
 * 汽车配置模型类
 */
class Config extends Base
{
  // 表名
  public $table = "module_car_config";

  // 可以批量修改的字段
  public $fillable = [
    'id',
    'car_id',
    'title',
    'value',
  ];

  // 隐藏的属性
  public $hidden = [
    'update_time'
  ];
}
