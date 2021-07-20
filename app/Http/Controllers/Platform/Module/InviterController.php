<?php
namespace App\Http\Controllers\Platform\Module;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Platform\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-07-19
 *
 * 邀请人控制器类
 */
class InviterController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Platform\Module\Member';

  // 客户端搜索字段
  protected $_params = [
    'inviter_id',
    'username',
    'nickname'
  ];

  // 客户端关联查询字段
  protected $_addition = [
    'address' => [
      'address',
    ]
  ];

  // 关联对象
  protected $_relevance = [
    'list' => [
      'archive',
      'address',
      'certification',
    ]
  ];
}
