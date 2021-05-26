<?php
namespace App\Http\Controllers\Platform\Module\Common;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Platform\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-05-25
 *
 * 物流控制器类
 */
class LogisticsController extends BaseController
{
  /**
   * 模型
   */
  protected $_model = 'App\Models\Common\Module\Common\Logistics';

  protected $_where = [];

  protected $_params = [
    'title'
  ];

  /**
   * 排序条件
   */
  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
  ];

  protected $_relevance = [];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-05-25
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
      'title.required' => '请您输入物流标题',
    ];

    $rule = [
      'title' => 'required',
    ];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      try
      {
        $model = $this->_model::firstOrNew(['id' => $request->id]);

        $model->organization_id  = self::getOrganizationId();
        $model->title            = $request->title;
        $model->sort             = $request->sort;
        $model->save();


        return self::success(Code::message(Code::HANDLE_SUCCESS));
      }
      catch(\Exception $e)
      {
        // 记录异常信息
        record($e);

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }
}
