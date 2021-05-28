<?php
namespace App\Models\Api\Module\Advertising;

use App\Models\Common\Module\Advertising\Resource as Common;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 广告资源模型类
 */
class Resource extends Common
{
  // 隐藏的属性
  public $hidden = [
    'id',
    'advertising_id',
    'organization_id',
    'status',
    'create_time',
    'update_time'
  ];
}
