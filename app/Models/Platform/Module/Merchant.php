<?php
namespace App\Models\Platform\Module;

use App\Models\Common\Module\Member as Common;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-08-01
 *
 * 车商模型类
 */
class Merchant extends Common
{
  // 追加到模型数组表单的访问器
  protected $appends = [
    'pictureData',
    'pictureList',
  ];

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-15
   * ------------------------------------------
   * 登录操作
   * ------------------------------------------
   *
   * 登录操作，更新最后时间，更新失败登录次数
   *
   * @param [type] $request [description]
   * @return [type]
   */
  public static function login($request)
  {
    try
    {
      $request->last_login_time = time();
      $request->try_number = 0;
      $request->save();

      return true;
    }
    catch(\Exception $e)
    {
      self::log($e);

      return false;
    }
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-16
   * ------------------------------------------
   * 获取角色编号
   * ------------------------------------------
   *
   * 获取角色编号
   *
   * @param array $request 请求数据
   * @param array $organization_id 机构编号
   * @return 角色数据
   */
  public static function getRoleId($request, $organization_id)
  {
    $response = [];

    foreach($request as $key => $item)
    {
      $response[$key]['role_id']     = $item;
      $response[$key]['organization_id'] = $organization_id;
    }

    return $response;
  }


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

    $result = $this->certification;

    if(!empty($result))
    {
      $response[] = $result['cerificate_front_picture'];
      $response[] = $result['cerificate_behind_picture'];
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

    $result = $this->certification;

    if(!empty($result))
    {
      $response[]['url'] = $result['cerificate_behind_picture'];
      $response[]['url'] = $result['cerificate_behind_picture'];
    }

    return $response;
  }

}
