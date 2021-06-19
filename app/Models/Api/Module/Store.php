<?php
namespace App\Models\Api\Module;

use App\Models\Common\Module\Store as Common;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-20
 *
 * 门店模型类
 */
class Store extends Common
{
  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'sort',
    'status',
    'create_time',
    'update_time'
  ];
}
