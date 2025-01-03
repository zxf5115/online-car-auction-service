<?php
namespace App\Models\Common\Module\Member;

use App\Models\Base;
use App\Enum\Module\Member\Relevance\CertificationEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-01-16
 *
 * 会员认证模型类
 */
class Certification extends Base
{
  // 表名
  public $table = "module_member_certification";

  // 可以批量修改的字段
  public $fillable = [
    'id',
    'organization_id',
    'member_id',
    'type',
    'realname',
    'mobile',
    'certificate_type',
    'certificate_no',
    'bank_card_no',
    'cerificate_front_picture',
    'cerificate_behind_picture',
    'audit_status',
    'audit_content',
  ];


  // 隐藏的属性
  public $hidden = [
    'status',
    'update_time'
  ];

  // 追加到模型数组表单的访问器
  protected $appends = [];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-21
   * ------------------------------------------
   * 认证状态封装
   * ------------------------------------------
   *
   * 认证状态封装
   *
   * @param int $value 状态值
   * @return 状态信息
   */
  public function getTypeAttribute($value)
  {
    return CertificationEnum::getCertificationStatus($value);
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-21
   * ------------------------------------------
   * 审核状态封装
   * ------------------------------------------
   *
   * 审核状态封装
   *
   * @param int $value 状态值
   * @return 状态信息
   */
  public function getAuditStatusAttribute($value)
  {
    return CertificationEnum::getAuditStatus($value);
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-21
   * ------------------------------------------
   * 证书类型封装
   * ------------------------------------------
   *
   * 证书类型封装
   *
   * @param int $value 状态值
   * @return 状态信息
   */
  public function getCertificateTypeAttribute($value)
  {
    return CertificationEnum::getCertificateType($value);
  }

  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 会员档案与会员关联表
   * ------------------------------------------
   *
   * 会员档案与会员关联表
   *
   * @return [关联对象]
   */
  public function member()
  {
      return $this->belongsTo('App\Models\Common\Module\Member', 'member_id', 'id')
                  ->where(['status'=>1]);
  }
}
