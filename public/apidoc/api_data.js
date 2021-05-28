define({ "api": [
  {
    "type": "get",
    "url": "/api/common/agreement/about",
    "title": "04. 关于我们",
    "description": "<p>获取系统的关于我们</p>",
    "group": "01._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>协议名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/about"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "01._公共模块",
    "name": "GetApiCommonAgreementAbout"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/user",
    "title": "03. 用户协议",
    "description": "<p>获取系统的用户协议</p>",
    "group": "01._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>协议名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/user"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "01._公共模块",
    "name": "GetApiCommonAgreementUser"
  },
  {
    "type": "get",
    "url": "/api/common/area/list",
    "title": "02. 获取地区列表",
    "description": "<p>获取地区列表</p>",
    "group": "01._公共模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>上级地区编号（为空：获取省，省编号: 获取市，市编号: 获取县）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/area/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AreaController.php",
    "groupTitle": "01._公共模块",
    "name": "GetApiCommonAreaList"
  },
  {
    "type": "get",
    "url": "/api/system/kernel",
    "title": "01. 获取系统信息",
    "description": "<p>获取系统配置内容信息</p>",
    "group": "01._公共模块",
    "success": {
      "fields": {
        "Fields Explain": [
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "web_chinese_name",
            "description": "<p>网站中文名称</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "web_english_name",
            "description": "<p>网站英文名字</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "web_url",
            "description": "<p>站点链接</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>网站关键字</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>网站描述</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>网站logo</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>公司电话</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "copyright",
            "description": "<p>备案号</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "web_status",
            "description": "<p>站点状态</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "web_close_info",
            "description": "<p>站点关闭原因</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/system/kernel"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/SystemController.php",
    "groupTitle": "01._公共模块",
    "name": "GetApiSystemKernel"
  },
  {
    "type": "post",
    "url": "/api/common/service/data",
    "title": "05. 客服联系方式",
    "description": "<p>获取客服联系方式</p>",
    "group": "01._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>自增编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "service_mobile",
            "description": "<p>客服电话</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "service_wechat",
            "description": "<p>客服微信号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "service_qrcode",
            "description": "<p>客服微信二维码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/service/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/ServiceController.php",
    "groupTitle": "01._公共模块",
    "name": "PostApiCommonServiceData"
  },
  {
    "type": "post",
    "url": "/api/common/wechat/notify",
    "title": "07. 微信支付回调",
    "description": "<p>获取微信支付回调</p>",
    "group": "01._公共模块",
    "sampleRequest": [
      {
        "url": "/api/common/wechat/notify"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/WechatController.php",
    "groupTitle": "01._公共模块",
    "name": "PostApiCommonWechatNotify"
  },
  {
    "type": "get",
    "url": "/api/logout",
    "title": "03. 退出",
    "description": "<p>退出登录状态</p>",
    "group": "02._登录模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/logout"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "02._登录模块",
    "name": "GetApiLogout"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "02. 用户注册",
    "description": "<p>注册用户信息</p>",
    "group": "02._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信app编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role_id",
            "description": "<p>会员角色 1 车商 2 消费者</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录手机号码（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>会员性别（不可为空）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/register"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "02._登录模块",
    "name": "PostApiRegister"
  },
  {
    "type": "post",
    "url": "/api/weixin_login",
    "title": "01. 微信登录",
    "description": "<p>通过微信进行登录</p>",
    "group": "02._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信OpenID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "user_info params": [
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号 1 车商 2 消费者</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "role params": [
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/weixin_login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "02._登录模块",
    "name": "PostApiWeixin_login"
  },
  {
    "type": "post",
    "url": "/api/file/file",
    "title": "01. 上传文件",
    "description": "<p>通过base64的内容进行文件上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>文件数据</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>文件分类 excel word pdf video audio ...</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "响应": [
          {
            "group": "响应",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>文件地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/file"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFileFile"
  },
  {
    "type": "post",
    "url": "/api/file/picture",
    "title": "02. 上传图片",
    "description": "<p>通过base64的内容进行图片上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>图片数据</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>图片分类 picture avatar ...</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "响应": [
          {
            "group": "响应",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>图片地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/picture"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFilePicture"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/list?page={page}",
    "title": "01. 广告位列表",
    "description": "<p>获取广告位分页列表</p>",
    "group": "04._广告位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/PositionController.php",
    "groupTitle": "04._广告位模块",
    "name": "GetApiAdvertisingPositionListPagePage"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/select",
    "title": "02. 广告位数据",
    "description": "<p>获取广告位数据</p>",
    "group": "04._广告位模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/PositionController.php",
    "groupTitle": "04._广告位模块",
    "name": "GetApiAdvertisingPositionSelect"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/view/{id}",
    "title": "03. 广告位详情",
    "description": "<p>获取广告位详情</p>",
    "group": "04._广告位模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "advertising params": [
          {
            "group": "advertising params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告编号</p>"
          },
          {
            "group": "advertising params",
            "type": "Number",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "advertising params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告名称</p>"
          },
          {
            "group": "advertising params",
            "type": "Number",
            "optional": false,
            "field": "content",
            "description": "<p>广告内容</p>"
          },
          {
            "group": "advertising params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "resource params": [
          {
            "group": "resource params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>广告资源地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/PositionController.php",
    "groupTitle": "04._广告位模块",
    "name": "GetApiAdvertisingPositionViewId"
  },
  {
    "type": "get",
    "url": "/api/advertising/list?page={page}",
    "title": "01. 广告列表",
    "description": "<p>获取广告分页列表</p>",
    "group": "05._广告模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>广告标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>广告内容</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "resource params": [
          {
            "group": "resource params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>广告图片资源</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/AdvertisingController.php",
    "groupTitle": "05._广告模块",
    "name": "GetApiAdvertisingListPagePage"
  },
  {
    "type": "get",
    "url": "/api/advertising/select",
    "title": "02. 广告数据",
    "description": "<p>获取广告数据</p>",
    "group": "05._广告模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>广告标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>广告内容</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "resource params": [
          {
            "group": "resource params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>广告图片资源</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/AdvertisingController.php",
    "groupTitle": "05._广告模块",
    "name": "GetApiAdvertisingSelect"
  },
  {
    "type": "get",
    "url": "/api/advertising/view/{id}",
    "title": "03. 广告详情",
    "description": "<p>获取广告详情</p>",
    "group": "05._广告模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>广告标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>广告内容</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "resource params": [
          {
            "group": "resource params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>广告图片资源</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/AdvertisingController.php",
    "groupTitle": "05._广告模块",
    "name": "GetApiAdvertisingViewId"
  },
  {
    "type": "get",
    "url": "/api/complain/category/select",
    "title": "01. 投诉分类数据",
    "description": "<p>获取投诉分类不分页列表数据</p>",
    "group": "06._投诉分类模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉分类编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/complain/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Complain/CategoryController.php",
    "groupTitle": "06._投诉分类模块",
    "name": "GetApiComplainCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/complain/list?page={page}",
    "title": "01. 投诉列表",
    "description": "<p>获取投诉分页列表</p>",
    "group": "07._投诉模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "read_status",
            "description": "<p>是否查阅</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>投诉时间</p>"
          }
        ],
        "category params": [
          {
            "group": "category params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/complain/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/ComplainController.php",
    "groupTitle": "07._投诉模块",
    "name": "GetApiComplainListPagePage"
  },
  {
    "type": "get",
    "url": "/api/complain/select",
    "title": "02. 投诉数据",
    "description": "<p>获取投诉不分页列表数据</p>",
    "group": "07._投诉模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "read_status",
            "description": "<p>是否查阅</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>投诉时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/complain/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/ComplainController.php",
    "groupTitle": "07._投诉模块",
    "name": "GetApiComplainSelect"
  },
  {
    "type": "get",
    "url": "/api/complain/view/{id}",
    "title": "03. 投诉详情",
    "description": "<p>获取投诉详情</p>",
    "group": "07._投诉模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>投诉图片资源</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>投诉其他资源</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>投诉链接</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>会员账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ],
        "category params": [
          {
            "group": "category params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/complain/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/ComplainController.php",
    "groupTitle": "07._投诉模块",
    "name": "GetApiComplainViewId"
  },
  {
    "type": "get",
    "url": "/api/common/problem/list?page={page}",
    "title": "01. 常见问题列表",
    "description": "<p>获取常见问题分页列表</p>",
    "group": "08._常见问题模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "position_id",
            "description": "<p>常见问题位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/problem/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/ProblemController.php",
    "groupTitle": "08._常见问题模块",
    "name": "GetApiCommonProblemListPagePage"
  },
  {
    "type": "get",
    "url": "/api/common/problem/select",
    "title": "02. 常见问题数据",
    "description": "<p>获取常见问题不分页列表数据</p>",
    "group": "08._常见问题模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>常见问题答案</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/problem/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/ProblemController.php",
    "groupTitle": "08._常见问题模块",
    "name": "GetApiCommonProblemSelect"
  },
  {
    "type": "get",
    "url": "/api/common/problem/view/{id}",
    "title": "03. 常见问题详情",
    "description": "<p>获取常见问题详情</p>",
    "group": "08._常见问题模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>常见问题答案</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/problem/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/ProblemController.php",
    "groupTitle": "08._常见问题模块",
    "name": "GetApiCommonProblemViewId"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/list?page={page}",
    "title": "01. 课程订单列表(分页)",
    "description": "<p>获取当前会员课程订单列表(分页)</p>",
    "group": "12._课程订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待发货 1 待签收 2 已签收</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "buy_total",
            "description": "<p>销售数量</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "12._课程订单模块",
    "name": "GetApiMemberOrderCourseListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/select",
    "title": "02. 课程订单列表(不分页)",
    "description": "<p>获取当前会员课程订单列表(不分页)</p>",
    "group": "12._课程订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待发货 1 待签收 2 已签收</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "buy_total",
            "description": "<p>销售数量</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "12._课程订单模块",
    "name": "GetApiMemberOrderCourseSelect"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/view/{id}",
    "title": "03. 课程订单详情",
    "description": "<p>获取当前会员课程订单的详情</p>",
    "group": "12._课程订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待发货 1 待签收 2 已签收</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "buy_total",
            "description": "<p>销售数量</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "logistics params": [
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单物流编号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "logistics params",
            "type": "String",
            "optional": false,
            "field": "present_name",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "logistics params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>礼包周期</p>"
          },
          {
            "group": "logistics params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司名称</p>"
          },
          {
            "group": "logistics params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态 0 待发货 1 待签收 2 已签收</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "12._课程订单模块",
    "name": "GetApiMemberOrderCourseViewId"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/cancel",
    "title": "07. 课程订单取消",
    "description": "<p>当前会员取消课程订单</p>",
    "group": "12._课程订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/cancel"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "12._课程订单模块",
    "name": "PostApiMemberOrderCourseCancel"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/change",
    "title": "08. 修改课程订单",
    "description": "<p>当前会员修改课程订单</p>",
    "group": "12._课程订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>收货地址编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/change"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "12._课程订单模块",
    "name": "PostApiMemberOrderCourseChange"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/finish",
    "title": "06. 课程订单完成",
    "description": "<p>当前会员收到货物后，点击完成课程订单</p>",
    "group": "12._课程订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/finish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "12._课程订单模块",
    "name": "PostApiMemberOrderCourseFinish"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/handle",
    "title": "04. 创建课程订单",
    "description": "<p>当前会员购买课程后，创建课程订单</p>",
    "group": "12._课程订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>收货地址编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "12._课程订单模块",
    "name": "PostApiMemberOrderCourseHandle"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/pay",
    "title": "05. 订单支付确认",
    "description": "<p>当前会员支付完成后，调用接口更改订单支付状态</p>",
    "group": "12._课程订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_h5",
            "description": "<p>是否是h5订单 true false</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/pay"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "12._课程订单模块",
    "name": "PostApiMemberOrderCoursePay"
  },
  {
    "type": "get",
    "url": "/api/member/comment/list?page={page}",
    "title": "01. 会员评论列表(分页)",
    "description": "<p>获取当前会员评论列表(分页)</p>",
    "group": "13._会员评论模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员评论编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "suffix",
            "description": "<p>内容类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>内容时长</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/comment/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CommentController.php",
    "groupTitle": "13._会员评论模块",
    "name": "GetApiMemberCommentListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/comment/select",
    "title": "02. 会员评论列表(不分页)",
    "description": "<p>获取当前会员评论列表(不分页)</p>",
    "group": "13._会员评论模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员评论编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "suffix",
            "description": "<p>内容类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>内容时长</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/comment/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CommentController.php",
    "groupTitle": "13._会员评论模块",
    "name": "GetApiMemberCommentSelect"
  },
  {
    "type": "post",
    "url": "/api/member/comment/handle",
    "title": "04. 评论操作",
    "description": "<p>当前会员执行评论操作</p>",
    "group": "13._会员评论模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "suffix",
            "description": "<p>评论内容类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>内容时长</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/comment/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CommentController.php",
    "groupTitle": "13._会员评论模块",
    "name": "PostApiMemberCommentHandle"
  },
  {
    "type": "get",
    "url": "/api/member/archive",
    "title": "01. 当前会员档案",
    "description": "<p>获取当前会员的档案信息</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号 1 车商 2 消费者</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          }
        ],
        "asset params": [
          {
            "group": "asset params",
            "type": "String",
            "optional": false,
            "field": "cash_money",
            "description": "<p>现金金额</p>"
          },
          {
            "group": "asset params",
            "type": "String",
            "optional": false,
            "field": "credit_money",
            "description": "<p>信用余额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/archive"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "GetApiMemberArchive"
  },
  {
    "type": "get",
    "url": "/api/member/data/{id}",
    "title": "02. 会员数据",
    "description": "<p>获取会员详情</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号 1 车商 2 消费者</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          }
        ],
        "asset params": [
          {
            "group": "asset params",
            "type": "String",
            "optional": false,
            "field": "cash_money",
            "description": "<p>现金金额</p>"
          },
          {
            "group": "asset params",
            "type": "String",
            "optional": false,
            "field": "credit_money",
            "description": "<p>信用余额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/data/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "GetApiMemberDataId"
  },
  {
    "type": "post",
    "url": "/api/member/handle",
    "title": "03. 编辑会员信息",
    "description": "<p>编辑会员信息</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>会员性别（0未知 1男 2女 3保密）（不可为空）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "PostApiMemberHandle"
  },
  {
    "type": "post",
    "url": "/api/member/asset/center",
    "title": "01. 会员资金中心",
    "description": "<p>获取当前会员资金信息</p>",
    "group": "21._会员资金模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "cash_money",
            "description": "<p>现金金额</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "credit_money",
            "description": "<p>信用余额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/asset/center"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AssetController.php",
    "groupTitle": "21._会员资金模块",
    "name": "PostApiMemberAssetCenter"
  },
  {
    "type": "get",
    "url": "/api/member/address/default",
    "title": "04. 获取当前会员默认地址",
    "description": "<p>获取当前会员默认地址详情</p>",
    "group": "22._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/default"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AddressController.php",
    "groupTitle": "22._会员地址模块",
    "name": "GetApiMemberAddressDefault"
  },
  {
    "type": "get",
    "url": "/api/member/address/list?page={page}",
    "title": "01. 当前会员地址列表",
    "description": "<p>获取当前会员地址分页列表</p>",
    "group": "22._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AddressController.php",
    "groupTitle": "22._会员地址模块",
    "name": "GetApiMemberAddressListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/address/select",
    "title": "02. 当前会员地址数据",
    "description": "<p>获取当前会员地址不分页列表数据</p>",
    "group": "22._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AddressController.php",
    "groupTitle": "22._会员地址模块",
    "name": "GetApiMemberAddressSelect"
  },
  {
    "type": "get",
    "url": "/api/member/address/view/{id}",
    "title": "03. 当前会员地址详情",
    "description": "<p>获取当前会员地址详情</p>",
    "group": "22._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AddressController.php",
    "groupTitle": "22._会员地址模块",
    "name": "GetApiMemberAddressViewId"
  },
  {
    "type": "post",
    "url": "/api/member/address/delete",
    "title": "06. 当前会员地址删除",
    "description": "<p>删除当前会员的地址信息</p>",
    "group": "22._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/delete"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AddressController.php",
    "groupTitle": "22._会员地址模块",
    "name": "PostApiMemberAddressDelete"
  },
  {
    "type": "post",
    "url": "/api/member/address/handle",
    "title": "05. 编辑会员地址",
    "description": "<p>编辑当前会员地址信息</p>",
    "group": "22._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号（不存在：新增，存在：编辑）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址 0 不是 1 是</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AddressController.php",
    "groupTitle": "22._会员地址模块",
    "name": "PostApiMemberAddressHandle"
  },
  {
    "type": "get",
    "url": "/api/member/attention/list?page={page}",
    "title": "01. 当前会员关注列表",
    "description": "<p>获取当前会员关注分页列表</p>",
    "group": "23._会员关注模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员关注编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>当前会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>关注会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>关注时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>当前会员昵称</p>"
          }
        ],
        "attention params": [
          {
            "group": "attention params",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>关注会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/attention/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AttentionController.php",
    "groupTitle": "23._会员关注模块",
    "name": "GetApiMemberAttentionListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/attention/select",
    "title": "02. 当前会员关注数据",
    "description": "<p>获取当前会员关注不分页列表数据</p>",
    "group": "23._会员关注模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员关注编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>当前会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>关注会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>关注时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>当前会员昵称</p>"
          }
        ],
        "attention params": [
          {
            "group": "attention params",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>关注会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/attention/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AttentionController.php",
    "groupTitle": "23._会员关注模块",
    "name": "GetApiMemberAttentionSelect"
  },
  {
    "type": "post",
    "url": "/api/member/attention/handle",
    "title": "04. 关注操作",
    "description": "<p>当前会员执行关注操作, 已经关注过执行取消关注</p>",
    "group": "23._会员关注模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>关注会员编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/attention/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AttentionController.php",
    "groupTitle": "23._会员关注模块",
    "name": "PostApiMemberAttentionHandle"
  },
  {
    "type": "post",
    "url": "/api/member/attention/status",
    "title": "03. 是否关注会员",
    "description": "<p>获取当前会员是否关注某会员</p>",
    "group": "23._会员关注模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>关注会员编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>是否关注</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/attention/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AttentionController.php",
    "groupTitle": "23._会员关注模块",
    "name": "PostApiMemberAttentionStatus"
  },
  {
    "type": "get",
    "url": "/api/member/fans/list?page={page}",
    "title": "01. 当前会员粉丝列表",
    "description": "<p>获取当前会员粉丝分页列表</p>",
    "group": "24._会员粉丝模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员关注编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>粉丝编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>当前会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>关注时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>粉丝会员昵称</p>"
          }
        ],
        "attention params": [
          {
            "group": "attention params",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>当前会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/fans/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/FansController.php",
    "groupTitle": "24._会员粉丝模块",
    "name": "GetApiMemberFansListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/fans/select",
    "title": "02. 当前会员关注数据",
    "description": "<p>获取当前会员关注不分页列表数据</p>",
    "group": "24._会员粉丝模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员关注编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>粉丝编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>当前会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>关注时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>粉丝会员昵称</p>"
          }
        ],
        "attention params": [
          {
            "group": "attention params",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>当前会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/fans/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/FansController.php",
    "groupTitle": "24._会员粉丝模块",
    "name": "GetApiMemberFansSelect"
  },
  {
    "type": "get",
    "url": "/api/member/approval/list?page={page}",
    "title": "01. 当前会员点赞列表",
    "description": "<p>获取当前会员点赞分页列表</p>",
    "group": "25._会员点赞模块(Todo)",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员点赞编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>点赞时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ApprovalController.php",
    "groupTitle": "25._会员点赞模块(Todo)",
    "name": "GetApiMemberApprovalListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/approval/select",
    "title": "02. 会员点赞列表(不分页)",
    "description": "<p>获取当前会员点赞列表(不分页)</p>",
    "group": "25._会员点赞模块(Todo)",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员点赞编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>点赞时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ApprovalController.php",
    "groupTitle": "25._会员点赞模块(Todo)",
    "name": "GetApiMemberApprovalSelect"
  },
  {
    "type": "post",
    "url": "/api/member/approval/handle",
    "title": "04. 点赞操作",
    "description": "<p>当前会员执行点赞操作, 已经点赞过，再次点击取消点赞</p>",
    "group": "25._会员点赞模块(Todo)",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ApprovalController.php",
    "groupTitle": "25._会员点赞模块(Todo)",
    "name": "PostApiMemberApprovalHandle"
  },
  {
    "type": "post",
    "url": "/api/member/approval/status",
    "title": "03. 作品是否点赞",
    "description": "<p>获取当前会员点赞的详情</p>",
    "group": "25._会员点赞模块(Todo)",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ApprovalController.php",
    "groupTitle": "25._会员点赞模块(Todo)",
    "name": "PostApiMemberApprovalStatus"
  },
  {
    "type": "get",
    "url": "/api/member/complain/list?page={page}",
    "title": "01. 当前会员投诉列表",
    "description": "<p>获取当前会员投诉分页列表</p>",
    "group": "29._会员投诉模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "read_status",
            "description": "<p>是否查阅</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>投诉时间</p>"
          }
        ],
        "category params": [
          {
            "group": "category params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/complain/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ComplainController.php",
    "groupTitle": "29._会员投诉模块",
    "name": "GetApiMemberComplainListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/complain/select",
    "title": "02. 当前会员投诉数据",
    "description": "<p>获取当前会员投诉不分页列表数据</p>",
    "group": "29._会员投诉模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "read_status",
            "description": "<p>是否查阅</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>投诉时间</p>"
          }
        ],
        "category params": [
          {
            "group": "category params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/complain/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ComplainController.php",
    "groupTitle": "29._会员投诉模块",
    "name": "GetApiMemberComplainSelect"
  },
  {
    "type": "get",
    "url": "/api/member/complain/view/{id}",
    "title": "03. 当前会员投诉详情",
    "description": "<p>获取当前会员投诉详情</p>",
    "group": "29._会员投诉模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "read_status",
            "description": "<p>是否查阅</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>投诉时间</p>"
          }
        ],
        "category params": [
          {
            "group": "category params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/complain/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ComplainController.php",
    "groupTitle": "29._会员投诉模块",
    "name": "GetApiMemberComplainViewId"
  },
  {
    "type": "post",
    "url": "/api/member/complain/handle",
    "title": "04. 编辑投诉信息",
    "description": "<p>编辑投诉信息</p>",
    "group": "29._会员投诉模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉分类编号（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容（不可为空）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/complain/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ComplainController.php",
    "groupTitle": "29._会员投诉模块",
    "name": "PostApiMemberComplainHandle"
  },
  {
    "type": "get",
    "url": "/api/member/invitation/list?page={page}",
    "title": "01. 会员邀请列表(分页)",
    "description": "<p>获取当前会员邀请列表(分页)</p>",
    "group": "30._会员邀请模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员邀请编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "invitation_member_id",
            "description": "<p>邀请会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>邀请时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/invitation/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/InvitationController.php",
    "groupTitle": "30._会员邀请模块",
    "name": "GetApiMemberInvitationListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/invitation/select",
    "title": "02. 会员邀请列表(不分页)",
    "description": "<p>获取当前会员邀请列表(不分页)</p>",
    "group": "30._会员邀请模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员邀请编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "invitation_member_id",
            "description": "<p>邀请会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>邀请时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/invitation/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/InvitationController.php",
    "groupTitle": "30._会员邀请模块",
    "name": "GetApiMemberInvitationSelect"
  },
  {
    "type": "post",
    "url": "/api/member/invitation/handle",
    "title": "04. 邀请操作",
    "description": "<p>当前会员执行邀请操作, 已经邀请过，再次点击取消邀请</p>",
    "group": "30._会员邀请模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_member_id",
            "description": "<p>作品编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/invitation/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/InvitationController.php",
    "groupTitle": "30._会员邀请模块",
    "name": "PostApiMemberInvitationHandle"
  },
  {
    "type": "post",
    "url": "/api/member/invitation/status",
    "title": "03. 是否邀请会员",
    "description": "<p>获取当前会员邀请的详情</p>",
    "group": "30._会员邀请模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invitation_member_id",
            "description": "<p>邀请会员编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>是否邀请</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/invitation/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/InvitationController.php",
    "groupTitle": "30._会员邀请模块",
    "name": "PostApiMemberInvitationStatus"
  },
  {
    "type": "get",
    "url": "/api/car/source/select",
    "title": "01. 汽车来源数据",
    "description": "<p>获取汽车来源不分页列表数据</p>",
    "group": "40._汽车来源模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车来源名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/source/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/SourceController.php",
    "groupTitle": "40._汽车来源模块",
    "name": "GetApiCarSourceSelect"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/logistics/list?page={page}",
    "title": "01. 课程订单物流列表(分页)",
    "description": "<p>获取当前会员课程订单物流列表(分页)</p>",
    "group": "40._课程订单物流模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "present_name",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>礼包周期</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/logistics/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Order/LogisticsController.php",
    "groupTitle": "40._课程订单物流模块",
    "name": "GetApiMemberOrderCourseLogisticsListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/logistics/select",
    "title": "02. 课程订单物流列表(不分页)",
    "description": "<p>获取当前会员课程订单物流列表(不分页)</p>",
    "group": "40._课程订单物流模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "present_name",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>礼包周期</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/logistics/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Order/LogisticsController.php",
    "groupTitle": "40._课程订单物流模块",
    "name": "GetApiMemberOrderCourseLogisticsSelect"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/logistics/view/{id}",
    "title": "03. 课程订单物流详情",
    "description": "<p>获取当前会员课程订单物流的详情</p>",
    "group": "40._课程订单物流模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "present_name",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>礼包周期</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/logistics/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Order/LogisticsController.php",
    "groupTitle": "40._课程订单物流模块",
    "name": "GetApiMemberOrderCourseLogisticsViewId"
  },
  {
    "type": "get",
    "url": "/api/car/brand/list?page={page}",
    "title": "01. 汽车品牌列表",
    "description": "<p>获取汽车品牌分页列表</p>",
    "group": "41._汽车品牌模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车品牌图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/brand/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/BrandController.php",
    "groupTitle": "41._汽车品牌模块",
    "name": "GetApiCarBrandListPagePage"
  },
  {
    "type": "get",
    "url": "/api/car/brand/select",
    "title": "02. 汽车品牌数据",
    "description": "<p>获取汽车品牌不分页列表数据</p>",
    "group": "41._汽车品牌模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车品牌图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/brand/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/BrandController.php",
    "groupTitle": "41._汽车品牌模块",
    "name": "GetApiCarBrandSelect"
  },
  {
    "type": "get",
    "url": "/api/car/shape/list?page={page}",
    "title": "01. 汽车车型列表",
    "description": "<p>获取汽车车型分页列表</p>",
    "group": "42._汽车车型模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车品牌编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车车型名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/shape/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/ShapeController.php",
    "groupTitle": "42._汽车车型模块",
    "name": "GetApiCarShapeListPagePage"
  },
  {
    "type": "get",
    "url": "/api/car/shape/select",
    "title": "02. 汽车车型数据",
    "description": "<p>获取汽车车型不分页列表数据</p>",
    "group": "42._汽车车型模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车车型名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/shape/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/ShapeController.php",
    "groupTitle": "42._汽车车型模块",
    "name": "GetApiCarShapeSelect"
  },
  {
    "type": "get",
    "url": "/api/car/shape/view/{id}",
    "title": "03. 汽车车型详情",
    "description": "<p>获取汽车车型详情</p>",
    "group": "42._汽车车型模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车车型名称</p>"
          }
        ],
        "brand params": [
          {
            "group": "brand params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "brand params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌名称</p>"
          },
          {
            "group": "brand params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车品牌图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/shape/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/ShapeController.php",
    "groupTitle": "42._汽车车型模块",
    "name": "GetApiCarShapeViewId"
  }
] });
