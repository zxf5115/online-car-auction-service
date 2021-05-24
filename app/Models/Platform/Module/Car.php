<?php
namespace App\Models\Platform\Module;

use App\Enum\Module\Car\CarEnum;
use App\Models\Common\Module\Car as Common;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-20
 *
 * 汽车模型类
 */
class Car extends Common
{
  // 追加到模型数组表单的访问器
  protected $appends = [
    'browse_total',
    'collection_total',
    'video',
    'image',
  ];


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


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-19
   * ------------------------------------------
   * 浏览次数封装
   * ------------------------------------------
   *
   * 浏览次数封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getBrowseTotalAttribute($value)
  {
    $response = 0;

    $browse = $this->browse;

    if(!empty($browse))
    {
      $response = count($browse);
    }

    unset($this->browse);

    return $response;
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-19
   * ------------------------------------------
   * 收藏次数封装
   * ------------------------------------------
   *
   * 收藏次数封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getCollectionTotalAttribute($value)
  {
    $response = 0;

    $collection = $this->collection;

    if(!empty($collection))
    {
      $response = count($collection);
    }

    unset($this->collection);

    return $response;
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-19
   * ------------------------------------------
   * 汽车视频封装
   * ------------------------------------------
   *
   * 汽车视频封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getVideoAttribute($value)
  {
    $response = '';

    $resource = $this->resource;

    if(!empty($resource))
    {
      foreach($resource as $item)
      {
        if(2 == $item->type['value'])
        {
          $response = $item->url;
        }
      }
    }

    unset($this->resource);

    return $response;
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-19
   * ------------------------------------------
   * 汽车图片封装
   * ------------------------------------------
   *
   * 汽车图片封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getImageAttribute($value)
  {
    $response = [];

    $resource = $this->resource;

    if(!empty($resource))
    {
      foreach($resource as $item)
      {
        if(1 == $item->type['value'])
        {
          $response[] = $item->url;
        }
      }
    }

    unset($this->resource);

    return $response;
  }
}
