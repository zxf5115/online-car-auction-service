<?php
namespace App\Models\Platform\Module;

use App\Models\Common\Module\Order as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-24
 *
 * 订单模型类
 */
class Order extends Common
{
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
        ['pay_money', '<', '5']
      ];
    }
    else if(2 == $type)
    {
      $response = [
        ['pay_money', '>=', '5'],
        ['pay_money', '<', '10']
      ];
    }
    else if(3 == $type)
    {
      $response = [
        ['pay_money', '>=', '10'],
        ['pay_money', '<', '15']
      ];
    }
    else if(4 == $type)
    {
      $response = [
        ['pay_money', '>=', '15'],
        ['pay_money', '<', '30']
      ];
    }
    else if(5 == $type)
    {
      $response = [
        ['pay_money', '>=', '30'],
        ['pay_money', '<', '60']
      ];
    }
    else if(6 == $type)
    {
      $response = [
        ['pay_money', '>=', '60']
      ];
    }

    return $response;
  }




  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-24
   * ------------------------------------------
   * 订单与汽车关联函数
   * ------------------------------------------
   *
   * 订单与汽车关联函数
   *
   * @return [关联对象]
   */
  public function car()
  {
    return $this->belongsTo(
      'App\Models\Platform\Module\Car',
      'car_id',
      'id'
    );
  }
}
