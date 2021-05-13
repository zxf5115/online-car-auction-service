<?php
namespace App\Models\Common\Module\Education\Courseware;

use App\Models\Base;
use App\Enum\Module\Education\CoursewareEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-01-05
 *
 * 课件模型类
 */
class Courseware extends Base
{
  // 表名
  public $table = "module_courseware";

  // 隐藏的属性
  public $hidden = [
    'update_time'
  ];

  // 追加到模型数组表单的访问器
  public $appends = [];

  // 批量添加
  public $fillable = ['id'];

  /**
   * 转换属性类型
   */
  protected $casts = [
    'status' => 'array',
    'start_time' => 'datetime:Y-m-d',
    'end_time' => 'datetime:Y-m-d',
    'create_time' => 'datetime:Y-m-d H:i:s',
    'update_time' => 'datetime:Y-m-d H:i:s',
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-01-20
   * ------------------------------------------
   * 是否为永久课程封装
   * ------------------------------------------
   *
   * 是否为永久课程封装
   *
   * @param int $value [数据库存在的值]
   * @return 状态值
   */
  public function getIsPermanentAttribute($value)
  {
    return CoursewareEnum::getIsPermanentStatus($value);
  }


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-09-25
   * ------------------------------------------
   * 课件与课程关联函数
   * ------------------------------------------
   *
   * 课件与课程关联函数
   *
   * @return [关联对象]
   */
  public function course()
  {
    return $this->hasMany('App\Models\Common\Module\Education\Course\Course', 'courseware_id', 'id')
                ->where(['status'=>1]);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-09-25
   * ------------------------------------------
   * 课件与课件级别关联函数
   * ------------------------------------------
   *
   * 课件与课件级别关联函数
   *
   * @return [关联对象]
   */
  public function level()
  {
    return $this->hasMany('App\Models\Common\Module\Education\Courseware\Relevance\Level', 'courseware_id', 'id')
                ->where(['status'=>1]);
  }
}
