<?php
namespace App\Models\Common\Module\Car\Shape;

use App\Models\Base;
use App\Http\Constant\Parameter;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-13
 *
 * 汽车型号配置模型类
 */
class Config extends Base
{
  // 表名
  public $table = "module_car_shape_config";

  // 可以批量修改的字段
  public $fillable = [
    'id'
  ];

  // 隐藏的属性
  public $hidden = [
    'update_time'
  ];
}
