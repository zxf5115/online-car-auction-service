<?php
namespace App\Http\Controllers\Platform\Module;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\TraitClass\ToolTrait;
use App\Http\Constant\Parameter;
use App\Http\Controllers\Platform\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-13
 *
 * 车商会员控制器类
 */
class MerchantController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Platform\Module\Merchant';

  // 默认查询条件
  protected $_where = [
    'role_id' => 1
  ];

  // 客户端搜索字段
  protected $_params = [
    'nickname'
  ];

  // 客户端关联查询字段
  protected $_addition = [
    'certification' => [
      'type',
      'audit_status',
    ]
  ];


  // 关联对象
  protected $_relevance = [
    'list' => ['certification'],
    'select' => false,
    'view' => ['certification'],
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-13
   * ------------------------------------------
   * 操作信息
   * ------------------------------------------
   *
   * 操作信息
   *
   * @param Request $request [请求参数]
   * @return [type]
   */
  public function handle(Request $request)
  {
    $messages = [];

    $rule = [];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      DB::beginTransaction();

      try
      {
        $model = $this->_model::firstOrNew(['id' => $request->id]);

        $organization_id = self::getOrganizationId();

        if(1 != $request->audit_status)
        {
          $model->role_id = 2;
        }

        $model->organization_id = $organization_id;
        $model->save();

        $certificate_type = 2;

        if(1 == $request->certification_type)
        {
          $certificate_type = 1;
        }

        $data = [
          'member_id'                 => $model->id,
          'type'                      => $request->certification_type ?? '',
          'realname'                  => $request->realname ?? '',
          'mobile'                    => $request->mobile ?? '',
          'certificate_type'          => $certificate_type,
          'certificate_no'            => $request->certificate_no ?? '',
          'bank_card_no'              => $request->bank_card_no ?? '',
          'cerificate_front_picture'  => $request->picture[0] ?? '',
          'cerificate_behind_picture' => $request->picture[1] ?? '',
          'audit_status'              => $request->audit_status ?? '',
          'audit_content'             => $request->audit_content ?? '',
        ];

        if(!empty($data))
        {
          $model->certification()->delete();
          $model->certification()->create($data);
        }

        DB::commit();

        return self::success(Code::message(Code::HANDLE_SUCCESS));
      }
      catch(\Exception $e)
      {
        DB::rollback();

        // 记录异常信息
        self::record($e);

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-13
   * ------------------------------------------
   * 禁用（解禁）学员账户
   * ------------------------------------------
   *
   * 禁用（解禁）学员账户
   *
   * @param Request $request [description]
   * @return [type]
   */
  public function enable(Request $request)
  {
    try
    {
      $model = $this->_model::find($request->id);

      $model->status = $model->status['value'] == 1 ? 2 : 1;

      $model->save();

      return self::success(Code::message(Code::HANDLE_SUCCESS));
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::HANDLE_FAILURE);
    }
  }
}
