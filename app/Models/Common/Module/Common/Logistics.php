<?php
namespace App\Models\Common\Module\Common;

use App\Models\Base;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-25
 *
 * 物流模型类
 */
class Logistics extends Base
{
  // 表名
  protected $table = "module_common_logistics";

  // 隐藏的属性
  protected $hidden = [
    'organization_id',
    'status',
    'update_time'
  ];

  // 追加到模型数组表单的访问器
  protected $appends = [];

  // 批量添加
  protected $fillable = ['id'];

}
