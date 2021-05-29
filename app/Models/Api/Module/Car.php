<?php
namespace App\Models\Api\Module;

use App\Models\Common\Module\Car as Common;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-20
 *
 * 汽车模型类
 */
class Car extends Common
{
  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'audit_content',
    'audit_status',
    'status',
    'update_time',
  ];

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-24
   * ------------------------------------------
   * 获取支付金额查询条件
   * ------------------------------------------
   *
   * 获取支付金额查询条件
   *
   * @param [type] $type 支付金额区间类型
   * @return [type]
   */
  public static function getPayMoneyWhere($type)
  {
    $response = [];

    if(1 == $type)
    {
      $response = [
        ['sell_money', '<', '5']
      ];
    }
    else if(2 == $type)
    {
      $response = [
        ['sell_money', '>=', '5'],
        ['sell_money', '<', '8']
      ];
    }
    else if(3 == $type)
    {
      $response = [
        ['sell_money', '>=', '8'],
        ['sell_money', '<', '12']
      ];
    }
    else if(4 == $type)
    {
      $response = [
        ['sell_money', '>=', '12'],
        ['sell_money', '<', '20']
      ];
    }
    else if(5 == $type)
    {
      $response = [
        ['sell_money', '>=', '20'],
        ['sell_money', '<', '30']
      ];
    }
    else if(6 == $type)
    {
      $response = [
        ['sell_money', '>=', '30']
      ];
    }

    return $response;
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
      'App\Models\Api\Module\Member',
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
      'App\Models\Api\Module\Car\Source',
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
      'App\Models\Api\Module\Car\Brand',
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
      'App\Models\Api\Module\Car\Shape',
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
      'App\Models\Api\Module\Car\Resource',
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
      'App\Models\Api\Module\Car\Config',
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
      'App\Models\Api\Module\Car\Browse',
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
      'App\Models\Api\Module\Car\Collection',
      'car_id',
      'id'
    );
  }
}
