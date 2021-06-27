<?php
namespace App\Models\Api\Module;

use App\Models\Api\Module\Car\Config;
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
        ['sell_money', '<', '10']
      ];
    }
    else if(3 == $type)
    {
      $response = [
        ['sell_money', '>=', '10'],
        ['sell_money', '<', '15']
      ];
    }
    else if(4 == $type)
    {
      $response = [
        ['sell_money', '>=', '15'],
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
        ['sell_money', '>=', '30'],
        ['sell_money', '<', '40']
      ];
    }
    else if(7 == $type)
    {
      $response = [
        ['sell_money', '>=', '40']
      ];
    }

    return $response;
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-24
   * ------------------------------------------
   * 获取汽车排量查询条件
   * ------------------------------------------
   *
   * 获取汽车排量查询条件
   *
   * @param [type] $type 汽车排量类型
   * @return [type]
   */
  public static function getCarDisplacementWhere($type)
  {
    try
    {
      $response = [];

      if(1 == $type)
      {
        $where = [
          ['value', '<', '1.0L']
        ];
      }
      else if(2 == $type)
      {
        $where = [
          ['value', '>=', '1.1L'],
          ['value', '<', '1.6L']
        ];
      }
      else if(3 == $type)
      {
        $where = [
          ['value', '>=', '1.7L'],
          ['value', '<', '2.0L']
        ];
      }
      else if(4 == $type)
      {
        $where = [
          ['value', '>=', '2.1L'],
          ['value', '<', '2.5L']
        ];
      }
      else if(5 == $type)
      {
        $where = [
          ['value', '>=', '2.6L'],
          ['value', '<', '3.0L']
        ];
      }
      else if(6 == $type)
      {
        $where = [
          ['value', '>=', '3.1L'],
          ['value', '<', '4.0L']
        ];
      }
      else if(7 == $type)
      {
        $where = [
          ['value', '>=', '4.1L']
        ];
      }

      $result = Config::getPluck('car_id', $where, false, false, true);

      $response = [[
        'id',
        $result
      ]];

      return $response;
    }
    catch(\Exception $e)
    {
      record($e);

      return false;
    }
  }



  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-24
   * ------------------------------------------
   * 获取车辆配置查询条件
   * ------------------------------------------
   *
   * 获取车辆配置查询条件
   *
   * @param [string] $value 车辆所属国家
   * @return [type]
   */
  public static function getCarConfigWhere($value)
  {
    try
    {
      $response = [];

      $where = [
        'status' => 1,
        'value' => $value
      ];

      $result = Config::getPluck('car_id', $where, false, false, true);

      $response = [[
        'id',
        $result
      ]];

      return $response;
    }
    catch(\Exception $e)
    {
      record($e);

      return false;
    }
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
