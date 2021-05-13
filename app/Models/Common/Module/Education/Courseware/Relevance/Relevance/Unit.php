<?php
namespace App\Models\Common\Module\Education\Courseware\Relevance\Relevance;

use App\Models\Base;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-01-05
 *
 * 课件级别模型类
 */
class Unit extends Base
{
  // 表名
  public $table = "module_courseware_level_unit";

  // 隐藏的属性
  public $hidden = [
    'update_time'
  ];

  // 追加到模型数组表单的访问器
  public $appends = [];

  // 批量添加
  public $fillable = ['id'];


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-06
   * ------------------------------------------
   * 课件单元与课件关联函数
   * ------------------------------------------
   *
   * 课件单元与课件关联函数
   *
   * @return [关联对象]
   */
  public function courseware()
  {
    return $this->belongsTo('App\Models\Common\Module\Education\Courseware\Courseware', 'courseware_id', 'id');
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-06
   * ------------------------------------------
   * 课件单元与课件级别关联函数
   * ------------------------------------------
   *
   * 课件单元与课件级别关联函数
   *
   * @return [关联对象]
   */
  public function level()
  {
    return $this->belongsTo('App\Models\Common\Module\Education\Courseware\Relevance\Level', 'level_id', 'id');
  }
}
