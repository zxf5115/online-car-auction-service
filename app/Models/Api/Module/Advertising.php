<?php
namespace App\Models\Api\Module;

use App\Models\Common\Module\Advertising as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-12-26
 *
 * 广告模型类
 */
class Advertising extends Common
{
  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'sort',
    'status',
    'update_time'
  ];

  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-01-20
   * ------------------------------------------
   * 广告与广告位关联函数
   * ------------------------------------------
   *
   * 广告与广告位关联函数
   *
   * @return [关联对象]
   */
  public function position()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Advertising\Position',
      'position_id',
      'id'
    )->where(['status'=>1]);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-28
   * ------------------------------------------
   * 广告与广告资源关联表
   * ------------------------------------------
   *
   * 广告与广告资源关联表
   *
   * @return [关联对象]
   */
  public function resource()
  {
    return $this->hasMany(
      'App\Models\Api\Module\Advertising\Resource',
      'advertising_id',
      'id',
    )->where(['status'=>1]);
  }
}
