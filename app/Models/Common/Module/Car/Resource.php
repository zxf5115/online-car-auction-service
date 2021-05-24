<?php
namespace App\Models\Common\Module\Car;

use App\Models\Base;
use App\Enum\Module\Car\ResourceEnum;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-23
 *
 * 汽车资源模型类
 */
class Resource extends Base
{
  // 表名
  public $table = "module_car_resource";

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
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 资源类型封装
   * ------------------------------------------
   *
   * 资源类型封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getTypeAttribute($value)
  {
    return ResourceEnum::getTypeStatus($value);
  }
}
