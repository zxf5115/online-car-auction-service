<?php
namespace App\Enum\Module\Car;

use App\Enum\BaseEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-23
 *
 * 汽车枚举类
 */
class CarEnum extends BaseEnum
{
  // 售卖状态
  const WAIT   = 0;
  const FINISH = 1;
  const ERROR  = 2; // 审核不通过


  // 售卖状态
  public static $status = [
    self::WAIT => [
      'value' => self::WAIT,
      'text' => '待出售'
    ],

    self::FINISH => [
      'value' => self::FINISH,
      'text' => '已出售'
    ]
  ];


  // 审核状态封装
  public static $audit = [
    self::WAIT => [
      'value' => self::WAIT,
      'text' => '待审核'
    ],

    self::FINISH => [
      'value' => self::FINISH,
      'text' => '审核通过'
    ],

    self::ERROR => [
      'value' => self::ERROR,
      'text' => '审核不通过'
    ]
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 售卖状态状态值
   * ------------------------------------------
   *
   * 售卖状态状态值
   *
   * @param int $code 信息代码
   * @return 信息内容
   */
  public static function getSellStatus($code)
  {
    return self::$status[$code] ?: self::$status[self::WAIT];
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 认证状态封装
   * ------------------------------------------
   *
   * 认证状态封装
   *
   * @param int $code 状态代码
   * @return 状态信息
   */
  public static function getAuditStatus($code)
  {
    return self::$audit[$code] ?: self::$audit[self::WAIT];
  }
}
