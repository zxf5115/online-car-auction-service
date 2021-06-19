<?php
namespace App\Models\Common\Module;

use App\Models\Base;
use App\Enum\Module\Car\CarEnum;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-13
 *
 * 门店模型类
 */
class Store extends Base
{
  // 表名
  public $table = "module_store";

  // 可以批量修改的字段
  public $fillable = [
    'id'
  ];

  // 隐藏的属性
  public $hidden = [
    'update_time'
  ];
}
