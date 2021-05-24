<?php
namespace App\Enum\Module\Car\Shape;

use App\Enum\BaseEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-22
 *
 * 车型配置枚举类
 */
class ConfigEnum extends BaseEnum
{
  // 配置类型
  const SELECT      = 1;
  const MULTISELECT = 2;
  const DATETIME    = 3;
  const MONEY       = 4;
  const TEXT        = 5;


  // 车型配置
  public static $status = [
    self::SELECT => [
      'value' => self::SELECT,
      'text' => '单选'
    ],

    self::MULTISELECT => [
      'value' => self::MULTISELECT,
      'text' => '多选'
    ],

    self::DATETIME => [
      'value' => self::DATETIME,
      'text' => '时间'
    ],

    self::MONEY => [
      'value' => self::MONEY,
      'text' => '金额'
    ],

    self::TEXT => [
      'value' => self::TEXT,
      'text' => '文本'
    ]
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-24
   * ------------------------------------------
   * 车型配置状态值
   * ------------------------------------------
   *
   * 车型配置状态值
   *
   * @param int $code 信息代码
   * @return 信息内容
   */
  public static function getTypeStatus($code)
  {
    return self::$status[$code] ?: self::$status[self::SELECT];
  }
}
