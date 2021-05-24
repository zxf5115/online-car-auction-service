<?php
namespace App\Enum\Module\Car;

use App\Enum\BaseEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-23
 *
 * 汽车资源枚举类
 */
class ResourceEnum extends BaseEnum
{
  // 资源类型
  const IMAGE = 1;
  const VIDEO = 2;


  // 售卖状态
  public static $type = [
    self::IMAGE => [
      'value' => self::IMAGE,
      'text' => '图片'
    ],

    self::VIDEO => [
      'value' => self::VIDEO,
      'text' => '视频'
    ]
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-23
   * ------------------------------------------
   * 资源类型状态值
   * ------------------------------------------
   *
   * 资源类型状态值
   *
   * @param int $code 信息代码
   * @return 信息内容
   */
  public static function getTypeStatus($code)
  {
    return self::$type[$code] ?: self::$type[self::IMAGE];
  }
}
