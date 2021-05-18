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
  protected $_model = 'App\Models\Platform\Module\Member';

  // 默认查询条件
  protected $_where = [
    'role_id' => 2
  ];

  // 客户端搜索字段
  protected $_params = [
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
    'list' => false,
    'select' => false,
    'view' => [
      'archive',
      'asset',
    ],
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
    $messages = [
      'username.required' => '请您输入登录账户',
      'username.regex'    => '登录账户不合法',
      'username.unique'   => '登录账户重复',
      'nickname.required' => '请您输入用户昵称',
    ];

    $rule = [
      'username' => 'required',
      'username' => 'unique:module_member,username,' . $request->id,
      'nickname' => 'required',
    ];

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

        if(empty($request->id))
        {
          $model->password    = $this->_model::generate(Parameter::PASSWORD);
        }

        if(!preg_match('/^1[345789][0-9]{9}$/', $request->username))
        {
          return self::error(Code::MEMBER_FORMAT_ERROR);
        }

        if(empty($request->id))
        {
          $model->member_no = ToolTrait::generateOnlyNumber(3);
        }

        $model->organization_id = $organization_id;
        $model->username        = $request->username;
        $model->nickname        = $request->nickname;
        $model->avatar          = $request->avatar ?: '';
        $model->email           = $request->email ?: '';
        $model->mobile          = $request->mobile ?: '';
        $model->status          = intval($request->status);

        $data = $this->_model::packRelevanceData($request, 'role_id');

        if(empty($request->role_id))
        {
          return self::error(Code::MEMBER_ROLE_EMPTY);
        }

        $response = $model->save();

        if(!empty($data))
        {
          $model->relevance()->delete();

          $model->relevance()->createMany($data);
        }

        DB::commit();

        if(empty($request->id) && $request->sms_notification)
        {
          // SmsTrait::sendRegistereSms($model->username);
        }

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
