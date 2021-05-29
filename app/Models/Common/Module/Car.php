<?php
namespace App\Models\Common\Module;

use App\Models\Base;
use App\Enum\Module\Car\CarEnum;


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


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 审核状态封装
   * ------------------------------------------
   *
   * 审核状态封装
   *
   * @param int $value 状态值
   * @return 状态信息
   */
  public function getAuditStatusAttribute($value)
  {
    return CarEnum::getAuditStatus($value);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-19
   * ------------------------------------------
   * 售卖状态封装
   * ------------------------------------------
   *
   * 售卖状态封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getSellStatusAttribute($value)
  {
    return CarEnum::getSellStatus($value);
  }



  // 关联函数 ------------------------------------------------------


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 汽车与汽车地址关联表
   * ------------------------------------------
   *
   * 汽车与汽车地址关联表
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
   * 汽车与汽车来源关联表
   * ------------------------------------------
   *
   * 汽车与汽车来源关联表
   *
   * @return [关联对象]
   */
  public function source()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Car\Source',
      'source_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 汽车与汽车品牌关联表
   * ------------------------------------------
   *
   * 汽车与汽车品牌关联表
   *
   * @return [关联对象]
   */
  public function brand()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Car\Brand',
      'brand_id',
      'id'
    );
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 汽车与汽车车型关联表
   * ------------------------------------------
   *
   * 汽车与汽车车型关联表
   *
   * @return [关联对象]
   */
  public function shape()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Car\Shape',
      'shape_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 汽车与汽车资源关联表
   * ------------------------------------------
   *
   * 汽车与汽车资源关联表
   *
   * @return [关联对象]
   */
  public function resource()
  {
    return $this->hasMany(
      'App\Models\Common\Module\Car\Resource',
      'car_id',
      'id'
    );
  }



  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 汽车与汽车配置关联表
   * ------------------------------------------
   *
   * 汽车与汽车配置关联表
   *
   * @return [关联对象]
   */
  public function config()
  {
    return $this->hasMany(
      'App\Models\Common\Module\Car\Config',
      'car_id',
      'id'
    );
  }



  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 汽车与汽车浏览关联表
   * ------------------------------------------
   *
   * 汽车与汽车浏览关联表
   *
   * @return [关联对象]
   */
  public function browse()
  {
    return $this->hasMany(
      'App\Models\Common\Module\Car\Browse',
      'car_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 汽车与汽车收藏关联表
   * ------------------------------------------
   *
   * 汽车与汽车收藏关联表
   *
   * @return [关联对象]
   */
  public function collection()
  {
    return $this->hasMany(
      'App\Models\Common\Module\Car\Collection',
      'car_id',
      'id'
    );
  }
}
