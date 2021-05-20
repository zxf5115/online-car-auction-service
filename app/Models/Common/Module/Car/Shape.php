<?php
namespace App\Models\Common\Module\Car;

use App\Models\Base;
use App\Http\Constant\Parameter;


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
}
