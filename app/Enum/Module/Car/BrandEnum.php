<?php
namespace App\Enum\Module\Car;

use App\Enum\BaseEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-23
 *
 * 汽车品牌枚举类
 */
class BrandEnum extends BaseEnum
{
  // 热门类型
  const YES = 1;
  const NO  = 2;


  // 热门类型
  public static $hot = [
    self::YES => [
      'value' => self::YES,
      'text' => '热门'
    ],

    self::NO => [
      'value' => self::NO,
      'text' => '普通'
    ]
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 热门类型状态值
   * ------------------------------------------
   *
   * 热门类型状态值
   *
   * @param int $code 信息代码
   * @return 信息内容
   */
  public static function getIsHotStatus($code)
  {
    return self::$hot[$code] ?: self::$hot[self::NO];
  }
}
