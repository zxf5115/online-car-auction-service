<?php
namespace App\Models\Common\Module\Member;

use App\Models\Base;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-28
 *
 * 会员关注模型类
 */
class Attention extends Base
{
  // 表名
  public $table = "module_member_attention";

  // 可以批量修改的字段
  public $fillable = [
    'id',
    'organization_id',
    'member_id',
    'attention_member_id',
  ];

  // 隐藏的属性
  public $hidden = [
    'status',
    'update_time'
  ];

  // 追加到模型数组表单的访问器
  protected $appends = [];


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
      'App\Models\Common\Module\Member',
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
      'App\Models\Common\Module\Member',
      'attention_member_id',
      'id'
    );
  }
}
