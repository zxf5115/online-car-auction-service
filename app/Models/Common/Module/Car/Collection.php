<?php
namespace App\Models\Common\Module\Car;

use App\Models\Base;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-23
 *
 * 汽车收藏模型类
 */
class Collection extends Base
{
  // 表名
  public $table = "module_car_collection";

  // 可以批量修改的字段
  public $fillable = [
    'id',
    'car_id',
    'member_id'
  ];

  // 隐藏的属性
  public $hidden = [
    'update_time'
  ];


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 汽车收藏与会员关联表
   * ------------------------------------------
   *
   * 汽车收藏与会员关联表
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
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 汽车收藏与汽车关联表
   * ------------------------------------------
   *
   * 汽车收藏与汽车关联表
   *
   * @return [关联对象]
   */
  public function car()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Car',
      'car_id',
      'id'
    );
  }
}
