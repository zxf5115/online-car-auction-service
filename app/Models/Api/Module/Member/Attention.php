<?php
namespace App\Models\Api\Module\Member;

use App\Models\Common\Module\Member\Attention as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 会员关注模型类
 */
class Attention extends Common
{
  // 隐藏的属性
  public $hidden = [
    'id',
    'organization_id',
    'status',
    'update_time'
  ];


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 会员与会员关联表
   * ------------------------------------------
   *
   * 会员与会员关联表
   *
   * @return [关联对象]
   */
  public function member()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Member',
      'member_id',
      'id'
    );
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 会员与关注会员关联表
   * ------------------------------------------
   *
   * 会员与关注会员关联表
   *
   * @return [关联对象]
   */
  public function attention()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Member',
      'attention_member_id',
      'id'
    );
  }
}
