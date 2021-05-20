<?php
namespace App\Models\Common\Module;

use App\Models\Base;
use App\Http\Constant\Parameter;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-13
 *
 * 汽车模型类
 */
class Car extends Base
{
  // 表名
  public $table = "module_car";

  // 可以批量修改的字段
  public $fillable = [
    'id'
  ];

  // 隐藏的属性
  public $hidden = [
    'update_time'
  ];


  // 关联函数 ------------------------------------------------------


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-01-20
   * ------------------------------------------
   * 会员与机构关联表
   * ------------------------------------------
   *
   * 会员与机构关联表
   *
   * @return [关联对象]
   */
  public function organization()
  {
      return $this->belongsTo('App\Models\Common\Module\Organization\Organization', 'organization_id', 'id')
                  ->where(['status'=>1]);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 会员与会员档案关联表
   * ------------------------------------------
   *
   * 会员与会员档案关联表
   *
   * @return [关联对象]
   */
  public function archive()
  {
      return $this->hasOne('App\Models\Common\Module\Member\Archive', 'member_id', 'id');
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 会员与会员资产关联表
   * ------------------------------------------
   *
   * 会员与会员资产关联表
   *
   * @return [关联对象]
   */
  public function asset()
  {
      return $this->hasOne('App\Models\Common\Module\Member\Asset', 'member_id', 'id');
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 会员与会员地址关联表
   * ------------------------------------------
   *
   * 会员与会员地址关联表
   *
   * @return [关联对象]
   */
  public function address()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Member\Address',
      'id',
      'member_id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 会员与会员认证关联表
   * ------------------------------------------
   *
   * 会员与会员认证关联表
   *
   * @return [关联对象]
   */
  public function certification()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Member\Certification',
      'id',
      'member_id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-03-07
   * ------------------------------------------
   * 注册关联删除
   * ------------------------------------------
   *
   * 注册关联删除
   *
   * @return [type]
   */
  public static function boot()
  {
    parent::boot();

    static::deleted(function($model) {
      $model->archive()->delete();
      $model->asset()->delete();
      $model->address()->delete();
    });
  }
}
