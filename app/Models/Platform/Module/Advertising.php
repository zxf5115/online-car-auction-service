<?php
namespace App\Models\Platform\Module;

use App\Models\Common\Module\Advertising as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-10-06
 *
 * 广告模型类
 */
class Advertising extends Common
{
  // 追加到模型数组表单的访问器
  protected $appends = [
    'pictureData',
    'pictureList',
  ];

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-19
   * ------------------------------------------
   * 课程图片封装
   * ------------------------------------------
   *
   * 课程图片封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getPictureDataAttribute($value)
  {
    $response = [];

    $resource = $this->resource;

    if(!empty($resource))
    {
      foreach($resource as $item)
      {
        $response[] = $item['picture'];
      }
    }

    return $response;
  }



  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-19
   * ------------------------------------------
   * 课程图片列表封装
   * ------------------------------------------
   *
   * 课程图片列表封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getPictureListAttribute($value)
  {
    $response = [];

    $resource = $this->resource;

    if(!empty($resource))
    {
      foreach($resource as $item)
      {
        $response[]['url'] = $item['picture'];
      }
    }

    return $response;
  }
}
