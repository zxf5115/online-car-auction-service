<?php
namespace App\Models\Common\Module\Advertising;

use App\Models\Base;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-23
 *
 * 广告资源模型类
 */
class Resource extends Base
{
  // 表名
  protected $table = "module_advertising_resource";

  // 隐藏的属性
  protected $hidden = [
    'update_time'
  ];

  // 追加到模型数组表单的访问器
  protected $appends = [];

  // 批量添加
  protected $fillable = [
    'id',
    'organization_id',
    'picture'
  ];
}
