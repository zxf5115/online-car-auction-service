<?php
namespace App\Models\Common\Module;

use App\Models\Base;
use App\Enum\Module\Message\MessageEnum;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-07-20
 *
 * 消息模型类
 */
class Message extends Base
{
  // 表名
  public $table = "module_message";

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
   * @dateTime 2021-07-20
   * ------------------------------------------
   * 消息类型封装
   * ------------------------------------------
   *
   * 消息类型封装
   *
   * @param int $value [数据库存在的值]
   * @return 状态值
   */
  public function getTypeAttribute($value)
  {
    return MessageEnum::getTypeStatus($value);
  }


  // 关联函数 ------------------------------------------------------


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-07-20
   * ------------------------------------------
   * 消息与会员关联函数
   * ------------------------------------------
   *
   * 消息与会员关联函数
   *
   * @return [关联对象]
   */
  public function member()
  {
    return $this->belongsToMany(
      'App\Models\Common\Module\Member',
      'module_member_message',
      'message_id',
      'member_id',
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-07-20
   * ------------------------------------------
   * 消息与会员消息关联函数
   * ------------------------------------------
   *
   * 消息与会员消息关联函数
   *
   * @return [type]
   */
  public function relevance()
  {
    return $this->hasMany(
      'App\Models\Common\Module\Member\MemberMessage',
      'message_id',
      'id'
    );
  }
}
