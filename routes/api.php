<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', [
  'namespace'  =>  'Api',
  'middleware'  =>  'serializer:array'
], function ($api)
{
  $api->group([
    'middleware'  =>  'api.throttle', // 启用节流限制
    'limit'  =>  1000, // 允许次数
    'expires'  =>  1, // 分钟
  ], function ($api)
  {
    $api->group(['namespace' => 'System'], function ($api) {
      $api->post('weixin_login', 'LoginController@weixin_login'); // 微信登录
      $api->post('register', 'LoginController@register');
      $api->get('logout', 'LoginController@logout'); // 退出

      // 系统基础数据路由
      $api->group(['prefix' => 'system'], function ($api) {
        $api->get('kernel', 'SystemController@kernel'); // 系统信息路由
      });

      // 上传路由
      $api->group(['prefix' => 'file', 'middleware' => ['auth:api', 'refresh.token']], function ($api) {
        // 上传文件
        $api->post('file', 'FileController@file');
        // 上传图片
        $api->post('picture', 'FileController@picture');
      });
    });



    $api->group(['namespace' => 'Module'], function ($api) {

      // 公共路由
      $api->group(['namespace' => 'Common', 'prefix' => 'common'], function ($api) {

        // 省市县路由
        $api->group(['prefix' => 'area'], function ($api) {
          $api->get('list', 'AreaController@list');
        });

        // 系统协议路由
        $api->group(['prefix' => 'agreement'], function ($api) {
          $api->get('user', 'AgreementController@user');
          $api->get('about', 'AgreementController@about');
        });

        // 客服信息路由
        $api->group(['prefix' => 'service'], function ($api) {
          $api->post('data', 'ServiceController@data');
        });

        // 常见问题路由
        $api->group(['prefix'  => 'problem'], function ($api) {
          $api->get('list', 'ProblemController@list');
          $api->get('select', 'ProblemController@select');
          $api->get('view/{id}', 'ProblemController@view');
        });
      });



      // 会员路由
      $api->group(['prefix'  => 'member', 'middleware' => ['auth:api', 'refresh.token', 'failure']], function ($api) {
        $api->get('archive', 'MemberController@archive');
        $api->get('data/{id}', 'MemberController@data');
        $api->post('handle', 'MemberController@handle');
        $api->post('teacher', 'MemberController@teacher');
        $api->get('status', 'MemberController@status');

        // 会员关联内容路由
        $api->group(['namespace' => 'Member'], function ($api) {

          // 会员认证路由
          $api->group(['prefix'  => 'certification'], function ($api) {
            $api->post('status', 'CertificationController@status');
            $api->post('personal', 'CertificationController@personal');
            $api->post('company', 'CertificationController@company');
            $api->post('bankcard', 'CertificationController@bankcard');
            $api->post('sms_code', 'CertificationController@sms_code');
          });


          // 会员资产路由
          $api->group(['prefix'  => 'asset'], function ($api) {
            $api->get('center', 'AssetController@center');
            $api->get('lollipop', 'AssetController@lollipop');
            $api->get('money', 'AssetController@money');
            $api->get('production', 'AssetController@production');
          });

          // 会员送货地址路由
          $api->group(['prefix'  => 'address'], function ($api) {
            $api->get('list', 'AddressController@list');
            $api->get('select', 'AddressController@select');
            $api->get('view/{id}', 'AddressController@view');
            $api->get('default', 'AddressController@default');
            $api->post('handle', 'AddressController@handle');
            $api->post('delete', 'AddressController@delete');
          });

          // 会员关注路由
          $api->group(['prefix'  => 'attention'], function ($api) {
            $api->get('list', 'AttentionController@list');
            $api->get('select', 'AttentionController@select');
            $api->post('status', 'AttentionController@status');
            $api->post('handle', 'AttentionController@handle');
          });


          // 会员粉丝路由
          $api->group(['prefix'  => 'fans'], function ($api) {
            $api->get('list', 'FansController@list');
            $api->get('select', 'FansController@select');
          });

          // 会员点赞路由
          $api->group(['prefix'  => 'approval'], function ($api) {
            $api->get('list', 'ApprovalController@list');
            $api->get('select', 'ApprovalController@select');
            $api->post('status', 'ApprovalController@status');
            $api->post('handle', 'ApprovalController@handle');
          });

          // 会员评论路由
          $api->group(['prefix'  => 'comment'], function ($api) {
            $api->get('list', 'CommentController@list');
            $api->get('select', 'CommentController@select');
            $api->post('handle', 'CommentController@handle');
          });

          // 会员邀请路由
          $api->group(['prefix'  => 'invitation'], function ($api) {
            $api->get('list', 'InvitationController@list');
            $api->get('select', 'InvitationController@select');
            $api->post('status', 'InvitationController@status');
            $api->post('handle', 'InvitationController@handle');
          });

          // 会员投诉路由
          $api->group(['prefix'  => 'complain'], function ($api) {
            $api->get('list', 'ComplainController@list');
            $api->get('select', 'ComplainController@select');
            $api->get('view/{id}', 'ComplainController@view');
            $api->post('handle', 'ComplainController@handle');
          });

          // 会员订单路由
          $api->group(['prefix'  => 'order'], function ($api) {

            $api->get('list', 'OrderController@list');
            $api->get('select', 'OrderController@select');
            $api->get('view/{id}', 'OrderController@view');
            $api->post('handle', 'OrderController@handle');
            $api->post('change', 'OrderController@change');
            $api->post('pay', 'OrderController@pay');
            $api->post('finish', 'OrderController@finish');
            $api->post('cancel', 'OrderController@cancel');

            // 会员订单物流路由
            $api->group(['namespace' => 'Order', 'prefix' => 'logistics'], function ($api) {
              $api->get('list', 'LogisticsController@list');
              $api->get('select', 'LogisticsController@select');
              $api->get('view/{id}', 'LogisticsController@view');
            });
          });
        });
      });



      // 广告路由
      $api->group(['prefix' => 'advertising'], function ($api) {
        $api->get('list', 'AdvertisingController@list');
        $api->get('select', 'AdvertisingController@select');
        $api->get('view/{id}', 'AdvertisingController@view');

        $api->group(['namespace' => 'Advertising', 'prefix' => 'position'], function ($api) {
          $api->get('list', 'PositionController@list');
          $api->get('select', 'PositionController@select');
          $api->get('view/{id}', 'PositionController@view');
        });
      });


      // 投诉路由
      $api->group(['prefix' => 'complain'], function ($api) {
        $api->get('list', 'ComplainController@list');
        $api->get('select', 'ComplainController@select');
        $api->get('view/{id}', 'ComplainController@view');
        $api->post('handle', 'ComplainController@handle');

        // 投诉分类路由
        $api->group(['namespace' => 'Complain', 'prefix' => 'category'], function ($api) {
          $api->get('select', 'CategoryController@select');
        });
      });


      // 汽车路由
      $api->group(['prefix' => 'car'], function ($api) {
        $api->get('list', 'CarController@list');
        $api->get('select', 'CarController@select');
        $api->get('view/{id}', 'CarController@view');
        $api->post('handle', 'CarController@handle');

        $api->group(['namespace' => 'Car'], function ($api) {

          // 汽车来源路由
          $api->group(['prefix' => 'source'], function ($api) {
            $api->get('select', 'SourceController@select');
          });

          // 汽车品牌路由
          $api->group(['prefix' => 'brand'], function ($api) {
            $api->get('list', 'BrandController@list');
            $api->get('select', 'BrandController@select');
            $api->get('view/{id}', 'BrandController@view');
          });

          // 汽车车型路由
          $api->group(['prefix' => 'shape'], function ($api) {
            $api->get('list', 'ShapeController@list');
            $api->get('select', 'ShapeController@select');
            $api->get('view/{id}', 'ShapeController@view');
          });
        });
      });
    });
  });
});
