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
    "url": "/api/common/logistics/data",
    "title": "08. 物流类型",
    "description": "<p>获取物流类型</p>",
    "group": "01._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>物流类型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>物流类型名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/logistics/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/LogisticsController.php",
    "groupTitle": "01._公共模块",
    "name": "PostApiCommonLogisticsData"
  },
  {
    "type": "post",
    "url": "/api/common/money/data",
    "title": "07. 汽车价格区间",
    "description": "<p>获取汽车价格区间</p>",
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
        "url": "/api/common/money/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/MoneyController.php",
    "groupTitle": "01._公共模块",
    "name": "PostApiCommonMoneyData"
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
    "url": "/api/common/tax/data",
    "title": "09. 系统税费信息",
    "description": "<p>获取系统税费信息</p>",
    "group": "01._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "msrp",
            "description": "<p>建议零售价</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "trade_fee",
            "description": "<p>贸易费</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "customs_clearance_fee",
            "description": "<p>清关费</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/tax/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/TaxController.php",
    "groupTitle": "01._公共模块",
    "name": "PostApiCommonTaxData"
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
            "field": "code",
            "description": "<p>微信code</p>"
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
            "field": "code",
            "description": "<p>微信code</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviter_id",
            "description": "<p>邀请人</p>"
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
            "field": "inviter_id",
            "description": "<p>邀请人</p>"
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
        "certification params": [
          {
            "group": "certification params",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>认证类型 1 个人认证 2 银行卡认证 3 企业认证</p>"
          },
          {
            "group": "certification params",
            "type": "String",
            "optional": false,
            "field": "audit_status",
            "description": "<p>审核状态 0 待审核 1 审核通过 2 审核失败</p>"
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
    "url": "/api/file/batchPicture",
    "title": "03. 批量上传图片",
    "description": "<p>上传图片</p>",
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
        "url": "/api/file/batchPicture"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFileBatchpicture"
  },
  {
    "type": "post",
    "url": "/api/file/file",
    "title": "01. 上传文件",
    "description": "<p>上传文件</p>",
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
    "description": "<p>上传图片</p>",
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
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>每页数量</p>"
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
            "field": "limit",
            "description": "<p>每页数量</p>"
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
            "field": "limit",
            "description": "<p>每页数量</p>"
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
    "url": "/api/common/problem/category/select",
    "title": "01. 购车指南分类数据",
    "description": "<p>获取购车指南分类不分页列表数据</p>",
    "group": "08._购车指南分类模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>购车指南分类编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>购车指南分类标题</p>"
          }
        ],
        "problem params": [
          {
            "group": "problem params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>购车指南标题</p>"
          },
          {
            "group": "problem params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>购车指南内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/problem/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/Problem/CategoryController.php",
    "groupTitle": "08._购车指南分类模块",
    "name": "GetApiCommonProblemCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/common/problem/list?page={page}",
    "title": "01. 购车指南列表",
    "description": "<p>获取购车指南分页列表</p>",
    "group": "09._购车指南模块",
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
            "field": "limit",
            "description": "<p>每页数量</p>"
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
            "description": "<p>购车指南编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>购车指南标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>购车指南内容</p>"
          }
        ],
        "category params": [
          {
            "group": "category params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>购车指南分类标题</p>"
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
    "groupTitle": "09._购车指南模块",
    "name": "GetApiCommonProblemListPagePage"
  },
  {
    "type": "get",
    "url": "/api/common/problem/select",
    "title": "02. 购车指南数据",
    "description": "<p>获取购车指南不分页列表数据</p>",
    "group": "09._购车指南模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>购车指南编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>购车指南标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>购车指南内容</p>"
          }
        ],
        "category params": [
          {
            "group": "category params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>购车指南分类标题</p>"
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
    "groupTitle": "09._购车指南模块",
    "name": "GetApiCommonProblemSelect"
  },
  {
    "type": "get",
    "url": "/api/common/problem/view/{id}",
    "title": "03. 购车指南详情",
    "description": "<p>获取购车指南详情</p>",
    "group": "09._购车指南模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>购车指南编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>购车指南标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>购车指南内容</p>"
          }
        ],
        "category params": [
          {
            "group": "category params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>购车指南分类标题</p>"
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
    "groupTitle": "09._购车指南模块",
    "name": "GetApiCommonProblemViewId"
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
    "url": "/api/member/bank",
    "title": "05. 编辑会员银行卡",
    "description": "<p>编辑会员银行卡信息</p>",
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
            "field": "account",
            "description": "<p>银行卡户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bank_card_no",
            "description": "<p>银行卡号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id_card_no",
            "description": "<p>持卡人身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>银行预留手机号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/bank"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "PostApiMemberBank"
  },
  {
    "type": "post",
    "url": "/api/member/datum",
    "title": "06. 编辑会员资料",
    "description": "<p>编辑会员资料信息</p>",
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
            "field": "realname",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>会员性别（0未知 1男 2女 3保密）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "certificate_type",
            "description": "<p>证件类型（1 身份证 2 护照 3 其他）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "certificate_no",
            "description": "<p>证件号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "account",
            "description": "<p>银行卡户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bank_card_no",
            "description": "<p>银行卡号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id_card_no",
            "description": "<p>持卡人身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>银行预留手机号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/datum"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "PostApiMemberDatum"
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
    "url": "/api/member/personal",
    "title": "04. 编辑个人信息",
    "description": "<p>编辑会员个人信息</p>",
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
            "field": "realname",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "certificate_no",
            "description": "<p>证件号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/personal"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "PostApiMemberPersonal"
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
            "field": "postcode",
            "description": "<p>邮政编号</p>"
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
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>每页数量</p>"
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
            "field": "postcode",
            "description": "<p>邮政编号</p>"
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
            "field": "postcode",
            "description": "<p>邮政编号</p>"
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
            "field": "postcode",
            "description": "<p>邮政编号</p>"
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
            "optional": true,
            "field": "postcode",
            "description": "<p>邮政编号</p>"
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
    "type": "post",
    "url": "/api/member/invitation/data",
    "title": "01. 邀请人数据",
    "description": "<p>获取当前用户邀请数据</p>",
    "group": "23._会员邀请模块",
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
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "qrcode",
            "description": "<p>二维码图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/invitation/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/InvitationController.php",
    "groupTitle": "23._会员邀请模块",
    "name": "PostApiMemberInvitationData"
  },
  {
    "type": "get",
    "url": "/api/member/setting/data",
    "title": "01. 我的设置",
    "description": "<p>获取我的设置详情</p>",
    "group": "24._会员设置模块",
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
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "delivery_switch",
            "description": "<p>交付开关 1 送车服务 2 门店自提</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/setting/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/SettingController.php",
    "groupTitle": "24._会员设置模块",
    "name": "GetApiMemberSettingData"
  },
  {
    "type": "post",
    "url": "/api/member/setting/handle",
    "title": "02. 交付设置",
    "description": "<p>当前会员设置推送开关</p>",
    "group": "24._会员设置模块",
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
            "field": "delivery_switch",
            "description": "<p>交付开关 1 送车服务 2 门店自提</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/setting/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/SettingController.php",
    "groupTitle": "24._会员设置模块",
    "name": "PostApiMemberSettingHandle"
  },
  {
    "type": "get",
    "url": "/api/member/message/list?page={page}",
    "title": "01. 我的消息列表",
    "description": "<p>获取当前会员消息分页列表</p>",
    "group": "25._会员消息模块",
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
        "message params": [
          {
            "group": "message params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员消息编号</p>"
          },
          {
            "group": "message params",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>消息类型 1 系统消息 2 普通消息</p>"
          },
          {
            "group": "message params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>消息标题</p>"
          },
          {
            "group": "message params",
            "type": "Number",
            "optional": false,
            "field": "content",
            "description": "<p>消息内容</p>"
          }
        ],
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "read_status",
            "description": "<p>阅读状态</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/message/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/MessageController.php",
    "groupTitle": "25._会员消息模块",
    "name": "GetApiMemberMessageListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/message/read",
    "title": "03. 消息已读",
    "description": "<p>当前会员执行消息已读</p>",
    "group": "25._会员消息模块",
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
            "description": "<p>会员消息编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/message/read"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/MessageController.php",
    "groupTitle": "25._会员消息模块",
    "name": "PostApiMemberMessageRead"
  },
  {
    "type": "post",
    "url": "/api/member/message/view/{id}",
    "title": "02. 会员消息详情",
    "description": "<p>获取当前会员消息详情</p>",
    "group": "25._会员消息模块",
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
    "sampleRequest": [
      {
        "url": "/api/member/message/view"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/MessageController.php",
    "groupTitle": "25._会员消息模块",
    "name": "PostApiMemberMessageViewId"
  },
  {
    "type": "get",
    "url": "/api/member/certification/data",
    "title": "06. 会员认证信息",
    "description": "<p>当前会员是否认证</p>",
    "group": "28._会员认证模块",
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
            "field": "type",
            "description": "<p>认证类型</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "audit_status",
            "description": "<p>审核状态</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "audit_content",
            "description": "<p>审核意见</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>审核时间</p>"
          }
        ],
        "personal params": [
          {
            "group": "personal params",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>姓名</p>"
          },
          {
            "group": "personal params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "personal params",
            "type": "String",
            "optional": false,
            "field": "certificate_no",
            "description": "<p>证件号</p>"
          }
        ],
        "company params": [
          {
            "group": "company params",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>法人姓名</p>"
          },
          {
            "group": "company params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "company params",
            "type": "String",
            "optional": false,
            "field": "certificate_no",
            "description": "<p>注册号</p>"
          },
          {
            "group": "company params",
            "type": "String",
            "optional": false,
            "field": "cerificate_front_picture",
            "description": "<p>法人照片</p>"
          },
          {
            "group": "company params",
            "type": "String",
            "optional": false,
            "field": "cerificate_behind_picture",
            "description": "<p>营业执照</p>"
          }
        ],
        "bankcard params": [
          {
            "group": "bankcard params",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>银行卡户名</p>"
          },
          {
            "group": "bankcard params",
            "type": "String",
            "optional": false,
            "field": "certificate_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "bankcard params",
            "type": "String",
            "optional": false,
            "field": "bank_card_no",
            "description": "<p>银行卡号</p>"
          },
          {
            "group": "bankcard params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>银行卡预留手机号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/certification/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "28._会员认证模块",
    "name": "GetApiMemberCertificationData"
  },
  {
    "type": "post",
    "url": "/api/member/certification/bankcard",
    "title": "04. 银行卡认证",
    "description": "<p>当前会员银行卡认证</p>",
    "group": "28._会员认证模块",
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
            "optional": true,
            "field": "id",
            "description": "<p>认证编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "realname",
            "description": "<p>银行卡户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "certificate_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bank_card_no",
            "description": "<p>银行卡号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>银行卡预留手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sms_code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/certification/bankcard"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "28._会员认证模块",
    "name": "PostApiMemberCertificationBankcard"
  },
  {
    "type": "post",
    "url": "/api/member/certification/company",
    "title": "03. 企业认证",
    "description": "<p>当前会员企业认证</p>",
    "group": "28._会员认证模块",
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
            "optional": true,
            "field": "id",
            "description": "<p>认证编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "realname",
            "description": "<p>法人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "certificate_no",
            "description": "<p>注册号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cerificate_front_picture",
            "description": "<p>法人照片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cerificate_behind_picture",
            "description": "<p>营业执照</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/certification/company"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "28._会员认证模块",
    "name": "PostApiMemberCertificationCompany"
  },
  {
    "type": "post",
    "url": "/api/member/certification/personal",
    "title": "02. 个人认证",
    "description": "<p>当前会员个人认证</p>",
    "group": "28._会员认证模块",
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
            "optional": true,
            "field": "id",
            "description": "<p>认证编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "realname",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "certificate_no",
            "description": "<p>证件号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/certification/personal"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "28._会员认证模块",
    "name": "PostApiMemberCertificationPersonal"
  },
  {
    "type": "post",
    "url": "/api/member/certification/sms_code",
    "title": "05. 手机验证码",
    "description": "<p>获取短信登录验证码</p>",
    "group": "28._会员认证模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号（18201018926）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/certification/sms_code"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "28._会员认证模块",
    "name": "PostApiMemberCertificationSms_code"
  },
  {
    "type": "post",
    "url": "/api/member/certification/status",
    "title": "01. 会员是否认证",
    "description": "<p>当前会员是否认证</p>",
    "group": "28._会员认证模块",
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
    "sampleRequest": [
      {
        "url": "/api/member/certification/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "28._会员认证模块",
    "name": "PostApiMemberCertificationStatus"
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
            "field": "limit",
            "description": "<p>每页数量</p>"
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
            "description": "<p>投诉分类编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "picture",
            "description": "<p>投诉图片</p>"
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
    "url": "/api/member/car/list?page={page}",
    "title": "01. 当前会员汽车列表",
    "description": "<p>获取当前会员汽车分页列表</p>",
    "group": "30._会员汽车模块",
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
            "field": "limit",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
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
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>车商编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
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
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车标题</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "vedio_url",
            "description": "<p>汽车视频地址</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "inventory_total",
            "description": "<p>库存数量</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_status",
            "description": "<p>售卖状态 0 待出售 1 已出售</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "source params": [
          {
            "group": "source params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车来源名称</p>"
          }
        ],
        "brand params": [
          {
            "group": "brand params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌名称</p>"
          },
          {
            "group": "brand params",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车品牌图片</p>"
          }
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车车型名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/car/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CarController.php",
    "groupTitle": "30._会员汽车模块",
    "name": "GetApiMemberCarListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/car/select",
    "title": "02. 当前会员汽车数据",
    "description": "<p>获取当前会员汽车不分页列表数据</p>",
    "group": "30._会员汽车模块",
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
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
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
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>车商编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
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
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车标题</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "vedio_url",
            "description": "<p>汽车视频地址</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "inventory_total",
            "description": "<p>库存数量</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_status",
            "description": "<p>售卖状态 0 待出售 1 已出售</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/car/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CarController.php",
    "groupTitle": "30._会员汽车模块",
    "name": "GetApiMemberCarSelect"
  },
  {
    "type": "get",
    "url": "/api/member/car/view/{id}",
    "title": "03. 当前会员汽车详情",
    "description": "<p>获取当前会员汽车详情</p>",
    "group": "30._会员汽车模块",
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
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>车商编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
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
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车标题</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "vedio_url",
            "description": "<p>汽车视频地址</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "inventory_total",
            "description": "<p>库存数量</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_status",
            "description": "<p>售卖状态 0 待出售 1 已出售</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "source params": [
          {
            "group": "source params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车来源名称</p>"
          }
        ],
        "brand params": [
          {
            "group": "brand params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌名称</p>"
          }
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车车型名称</p>"
          }
        ],
        "config params": [
          {
            "group": "config params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车配置名称</p>"
          },
          {
            "group": "config params",
            "type": "string",
            "optional": false,
            "field": "value",
            "description": "<p>汽车配置值</p>"
          }
        ],
        "resource params": [
          {
            "group": "resource params",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车图片资源地址</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>车商昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/car/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CarController.php",
    "groupTitle": "30._会员汽车模块",
    "name": "GetApiMemberCarViewId"
  },
  {
    "type": "post",
    "url": "/api/member/car/delete",
    "title": "05. 汽车删除",
    "description": "<p>删除当前会员的汽车信息</p>",
    "group": "30._会员汽车模块",
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
            "description": "<p>汽车编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/car/delete"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CarController.php",
    "groupTitle": "30._会员汽车模块",
    "name": "PostApiMemberCarDelete"
  },
  {
    "type": "post",
    "url": "/api/member/car/handle",
    "title": "04. 编辑汽车信息",
    "description": "<p>当前会员新增或者编辑汽车信息</p>",
    "group": "30._会员汽车模块",
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
            "description": "<p>存在为编辑，否则新增</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inventory_total",
            "description": "<p>库存数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "vedio_url",
            "description": "<p>汽车视频地址</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "url",
            "description": "<p>汽车图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "config",
            "description": "<p>汽车配置</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n        \"source_id\":\"51\",\"brand_id\":\"51\",\"shape_id\":\"1\",\"title\":\"踩踩踩\",\"inventory_total\":\"3\",\"sell_money\":\"88\",\"other_money\":\"2\",\"vedio_url\":\"http:www.baidu.com\",\"url\":[\"http://www.baidu.com\",\"http://www.baidu.com\",\"http://www.baidu.com\"],\"config\":[{\"title\":\"车辆颜色\",\"value\":\"白色\"},{\"title\":\"车辆场地\",\"value\":\"德国\"},{\"title\":\"具体型号\",\"value\":\"X360\"},{\"title\":\"公里数\",\"value\":\"18万\"}]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/member/car/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CarController.php",
    "groupTitle": "30._会员汽车模块",
    "name": "PostApiMemberCarHandle"
  },
  {
    "type": "get",
    "url": "/api/member/order/list?page={page}",
    "title": "01. 当前会员订单列表",
    "description": "<p>获取当前会员订单分页列表</p>",
    "group": "31._会员订单模块",
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
            "field": "limit",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "car_title",
            "description": "<p>汽车标题</p>"
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
            "field": "car_id",
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
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
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
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
            "field": "address_id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "delivery_quantity",
            "description": "<p>提货数量</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "delivery_date",
            "description": "<p>提货时间</p>"
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
            "field": "order_status",
            "description": "<p>订单状态 0 待付款 1 待提货 2 已完成 3 已取消</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "car params": [
          {
            "group": "car params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "car params",
            "type": "String",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售金额</p>"
          },
          {
            "group": "car params",
            "type": "String",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          }
        ],
        "config params": [
          {
            "group": "config params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车配置标题</p>"
          },
          {
            "group": "config params",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>汽车配置值</p>"
          }
        ],
        "source params": [
          {
            "group": "source params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车来源标题</p>"
          }
        ],
        "brand params": [
          {
            "group": "brand params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌标题</p>"
          },
          {
            "group": "brand params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车品牌图片</p>"
          }
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车车型标题</p>"
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
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "31._会员订单模块",
    "name": "GetApiMemberOrderListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/order/select",
    "title": "02. 课程订单列表(不分页)",
    "description": "<p>获取当前会员课程订单列表(不分页)</p>",
    "group": "31._会员订单模块",
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
            "field": "car_id",
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
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
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
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
            "field": "address_id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "delivery_quantity",
            "description": "<p>提货数量</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "delivery_date",
            "description": "<p>提货时间</p>"
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
            "field": "order_status",
            "description": "<p>订单状态 0 待付款 1 待提货 2 已完成 3 已取消</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "car params": [
          {
            "group": "car params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "car params",
            "type": "String",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售金额</p>"
          },
          {
            "group": "car params",
            "type": "String",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          }
        ],
        "config params": [
          {
            "group": "config params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车配置标题</p>"
          },
          {
            "group": "config params",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>汽车配置值</p>"
          }
        ],
        "source params": [
          {
            "group": "source params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车来源标题</p>"
          }
        ],
        "brand params": [
          {
            "group": "brand params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌标题</p>"
          },
          {
            "group": "brand params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车品牌图片</p>"
          }
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车车型标题</p>"
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
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "31._会员订单模块",
    "name": "GetApiMemberOrderSelect"
  },
  {
    "type": "get",
    "url": "/api/member/order/view/{id}",
    "title": "03. 课程订单详情",
    "description": "<p>获取当前会员课程订单的详情</p>",
    "group": "31._会员订单模块",
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
            "field": "car_id",
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
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
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
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
            "field": "address_id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "delivery_quantity",
            "description": "<p>提货数量</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "delivery_date",
            "description": "<p>提货时间</p>"
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
            "field": "order_status",
            "description": "<p>订单状态 0 待付款 1 待提货 2 已完成 3 已取消</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "car params": [
          {
            "group": "car params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "car params",
            "type": "String",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售金额</p>"
          },
          {
            "group": "car params",
            "type": "String",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          }
        ],
        "config params": [
          {
            "group": "config params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车配置标题</p>"
          },
          {
            "group": "config params",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>汽车配置值</p>"
          }
        ],
        "source params": [
          {
            "group": "source params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车来源标题</p>"
          }
        ],
        "brand params": [
          {
            "group": "brand params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌标题</p>"
          },
          {
            "group": "brand params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车品牌图片</p>"
          }
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车车型标题</p>"
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
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "logistics params": [
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>物流类型</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_name",
            "description": "<p>物流名称</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态 0 待发货 1 已发出 2 待收货 3 已签收</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_time",
            "description": "<p>变更时间</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>物流地址</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "content",
            "description": "<p>详情</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "31._会员订单模块",
    "name": "GetApiMemberOrderViewId"
  },
  {
    "type": "post",
    "url": "/api/member/order/delete",
    "title": "05. 当前会员订单删除",
    "description": "<p>删除当前会员的订单信息</p>",
    "group": "31._会员订单模块",
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
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/delete"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "31._会员订单模块",
    "name": "PostApiMemberOrderDelete"
  },
  {
    "type": "post",
    "url": "/api/member/order/handle",
    "title": "04. 创建订单",
    "description": "<p>当前会员创建订单</p>",
    "group": "31._会员订单模块",
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
            "field": "car_id",
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车型号编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>会员地址编号</p>"
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
            "type": "String",
            "optional": false,
            "field": "delivery_quantity",
            "description": "<p>购买数量</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "31._会员订单模块",
    "name": "PostApiMemberOrderHandle"
  },
  {
    "type": "get",
    "url": "/api/member/order/logistics/select",
    "title": "01. 课程订单列表(不分页)",
    "description": "<p>获取当前会员课程订单列表(不分页)</p>",
    "group": "33._会员订单物流模块",
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
            "field": "type",
            "description": "<p>物流分类编号</p>"
          },
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
    "success": {
      "fields": {
        "logistics params": [
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>物流类型</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_name",
            "description": "<p>物流名称</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态 0 待发货 1 已发出 2 待收货 3 已签收</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_time",
            "description": "<p>变更时间</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>物流地址</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "content",
            "description": "<p>详情</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "operator",
            "description": "<p>经办人</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/logistics/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Order/LogisticsController.php",
    "groupTitle": "33._会员订单物流模块",
    "name": "GetApiMemberOrderLogisticsSelect"
  },
  {
    "type": "get",
    "url": "/api/member/attention/list?page={page}",
    "title": "01. 我的关注列表",
    "description": "<p>获取当前会员关注车商分页列表</p>",
    "group": "34._车商关注模块",
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
    "groupTitle": "34._车商关注模块",
    "name": "GetApiMemberAttentionListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/attention/handle",
    "title": "03. 关注操作",
    "description": "<p>当前会员执行关注操作, 已经关注过，再次点击取消关注</p>",
    "group": "34._车商关注模块",
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
            "description": "<p>车商编号</p>"
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
    "groupTitle": "34._车商关注模块",
    "name": "PostApiMemberAttentionHandle"
  },
  {
    "type": "post",
    "url": "/api/member/attention/status",
    "title": "02. 是否关注车商",
    "description": "<p>获取当前会员是否关注指定车商</p>",
    "group": "34._车商关注模块",
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
            "description": "<p>车商编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
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
    "groupTitle": "34._车商关注模块",
    "name": "PostApiMemberAttentionStatus"
  },
  {
    "type": "get",
    "url": "/api/car/store/list?page={page}",
    "title": "01. 汽车门店列表",
    "description": "<p>获取汽车门店分页列表</p>",
    "group": "39._汽车门店模块",
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
            "field": "limit",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "longitude",
            "description": "<p>当前经度</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "latitude",
            "description": "<p>当前纬度</p>"
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
            "description": "<p>汽车门店编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车门店名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>汽车门店电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>汽车门店地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>门店经度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>门店纬度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>距离</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/store/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/StoreController.php",
    "groupTitle": "39._汽车门店模块",
    "name": "GetApiCarStoreListPagePage"
  },
  {
    "type": "get",
    "url": "/api/car/store/select",
    "title": "02. 汽车门店数据",
    "description": "<p>获取汽车门店不分页列表数据</p>",
    "group": "39._汽车门店模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "longitude",
            "description": "<p>当前经度</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "latitude",
            "description": "<p>当前纬度</p>"
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
            "description": "<p>汽车门店编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车门店名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>汽车门店电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>汽车门店地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>门店经度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>门店纬度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>距离</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/store/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/StoreController.php",
    "groupTitle": "39._汽车门店模块",
    "name": "GetApiCarStoreSelect"
  },
  {
    "type": "get",
    "url": "/api/car/store/view/{id}",
    "title": "03. 汽车门店详情",
    "description": "<p>获取汽车门店详情</p>",
    "group": "39._汽车门店模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车门店编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车门店名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>汽车门店电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>汽车门店地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>门店经度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>门店纬度</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/store/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/StoreController.php",
    "groupTitle": "39._汽车门店模块",
    "name": "GetApiCarStoreViewId"
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
    "url": "/api/car/brand/hot",
    "title": "04. 汽车热门品牌数据",
    "description": "<p>获取汽车热门品牌不分页列表数据</p>",
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
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "shape params",
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
        "url": "/api/car/brand/hot"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/BrandController.php",
    "groupTitle": "41._汽车品牌模块",
    "name": "GetApiCarBrandHot"
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
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>每页数量</p>"
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
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "shape params",
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
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "shape params",
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
    "url": "/api/car/brand/view/{id}",
    "title": "03. 汽车品牌详情",
    "description": "<p>获取汽车品牌详情</p>",
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
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "shape params",
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
        "url": "/api/car/brand/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/BrandController.php",
    "groupTitle": "41._汽车品牌模块",
    "name": "GetApiCarBrandViewId"
  },
  {
    "type": "get",
    "url": "/api/car/shape/config/data",
    "title": "04. 汽车车型配置",
    "description": "<p>汽车车型配置</p>",
    "group": "42._汽车车型模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
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
            "field": "type",
            "description": "<p>汽车配置类型</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车配置名字</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "params",
            "description": "<p>汽车配置参数</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "is_must",
            "description": "<p>是否必须</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/shape/config/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Car/Shape/ConfigController.php",
    "groupTitle": "42._汽车车型模块",
    "name": "GetApiCarShapeConfigData"
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
            "field": "limit",
            "description": "<p>每页数量</p>"
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
        ],
        "config params": [
          {
            "group": "config params",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>汽车配置类型</p>"
          },
          {
            "group": "config params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汽车配置名字</p>"
          },
          {
            "group": "config params",
            "type": "String",
            "optional": false,
            "field": "params",
            "description": "<p>汽车配置参数</p>"
          },
          {
            "group": "config params",
            "type": "String",
            "optional": false,
            "field": "is_must",
            "description": "<p>是否必须</p>"
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
  },
  {
    "type": "get",
    "url": "/api/car/list?page={page}",
    "title": "01. 汽车列表",
    "description": "<p>获取汽车分页列表</p>",
    "group": "45._汽车模块",
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
            "field": "limit",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "member_id",
            "description": "<p>车商编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车品牌编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "title",
            "description": "<p>汽车标题</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pay_money",
            "description": "<p>销售价格 (空:不限制, 1:0-50w以下, 2:50w-100w, 3:100w-150w, 4:150w-200w, 5:200w以上)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "car_operation",
            "description": "<p>操作方式 (空:不限制, 手动、自动)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "car_type",
            "description": "<p>汽车类型 (空:不限制, 代步车、SUV、中型车、商务车)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "car_displacement",
            "description": "<p>汽车排量 (空:不限制, 1:1.5L-2.0L, 2:2.0L-2.5L, 3:2.5L-3.0L, 4:3.0L-4.0L, 5:4.0L以上, 6:其他)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "car_seat",
            "description": "<p>座位数 (空:不限制, 2座、3座、4座)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "car_country",
            "description": "<p>汽车产地 (空:不限制, 美版、加版、欧版、中东版)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "car_drive",
            "description": "<p>汽车驱动 (空:不限制, 前驱、后驱、四驱)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "car_power",
            "description": "<p>汽车动力 (空:不限制, 汽油、柴油、纯电动)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "car_structure",
            "description": "<p>汽车结构 (空:不限制, 两厢、三厢、掀背)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sort",
            "description": "<p>排序方式 (空:默认排序, asc: 价格从小到大，desc: 价格从大到小)</p>"
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
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>车商编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车标题</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "vedio_url",
            "description": "<p>汽车视频地址</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_status",
            "description": "<p>售卖状态 0 待出售 1 已出售</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "source params": [
          {
            "group": "source params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车来源名称</p>"
          }
        ],
        "brand params": [
          {
            "group": "brand params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌名称</p>"
          },
          {
            "group": "brand params",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车品牌图片</p>"
          }
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车车型名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/CarController.php",
    "groupTitle": "45._汽车模块",
    "name": "GetApiCarListPagePage"
  },
  {
    "type": "get",
    "url": "/api/car/recommend",
    "title": "04. 推荐汽车",
    "description": "<p>获取推荐汽车不分页列表数据</p>",
    "group": "45._汽车模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量 默认显示8个</p>"
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
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>车商编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车标题</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "vedio_url",
            "description": "<p>汽车视频地址</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_status",
            "description": "<p>售卖状态 0 待出售 1 已出售</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/recommend"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/CarController.php",
    "groupTitle": "45._汽车模块",
    "name": "GetApiCarRecommend"
  },
  {
    "type": "get",
    "url": "/api/car/select",
    "title": "02. 汽车数据",
    "description": "<p>获取汽车不分页列表数据</p>",
    "group": "45._汽车模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pay_money",
            "description": "<p>1 5以前 2 5-8 3 8-12 4 12-20 5 20-30 6 30以上</p>"
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
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>车商编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车标题</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "vedio_url",
            "description": "<p>汽车视频地址</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_status",
            "description": "<p>售卖状态 0 待出售 1 已出售</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/CarController.php",
    "groupTitle": "45._汽车模块",
    "name": "GetApiCarSelect"
  },
  {
    "type": "get",
    "url": "/api/car/view/{id}",
    "title": "03. 汽车详情",
    "description": "<p>获取汽车详情</p>",
    "group": "45._汽车模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>车商编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车标题</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "vedio_url",
            "description": "<p>汽车视频地址</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "sell_status",
            "description": "<p>售卖状态 0 待出售 1 已出售</p>"
          },
          {
            "group": "basic params",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "source params": [
          {
            "group": "source params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车来源名称</p>"
          }
        ],
        "brand params": [
          {
            "group": "brand params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌名称</p>"
          }
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车车型名称</p>"
          }
        ],
        "config params": [
          {
            "group": "config params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车配置名称</p>"
          },
          {
            "group": "config params",
            "type": "string",
            "optional": false,
            "field": "value",
            "description": "<p>汽车配置值</p>"
          }
        ],
        "resource params": [
          {
            "group": "resource params",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车图片资源地址</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>车商昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/car/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/CarController.php",
    "groupTitle": "45._汽车模块",
    "name": "GetApiCarViewId"
  },
  {
    "type": "get",
    "url": "/api/member/car/collection/list?page={page}",
    "title": "01. 我的收藏列表",
    "description": "<p>获取当前会员汽车收藏分页列表</p>",
    "group": "46._汽车收藏模块",
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
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>收藏时间</p>"
          }
        ],
        "car params": [
          {
            "group": "car params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汽车编号</p>"
          },
          {
            "group": "car params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>车商编号</p>"
          },
          {
            "group": "car params",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>汽车来源编号</p>"
          },
          {
            "group": "car params",
            "type": "Number",
            "optional": false,
            "field": "brand_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "car params",
            "type": "Number",
            "optional": false,
            "field": "shape_id",
            "description": "<p>汽车车型编号</p>"
          },
          {
            "group": "car params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>汽车标题</p>"
          },
          {
            "group": "car params",
            "type": "Number",
            "optional": false,
            "field": "vedio_url",
            "description": "<p>汽车视频地址</p>"
          },
          {
            "group": "car params",
            "type": "string",
            "optional": false,
            "field": "sell_money",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "car params",
            "type": "string",
            "optional": false,
            "field": "other_money",
            "description": "<p>其他费用</p>"
          },
          {
            "group": "car params",
            "type": "string",
            "optional": false,
            "field": "sell_status",
            "description": "<p>售卖状态 0 待出售 1 已出售</p>"
          },
          {
            "group": "car params",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "source params": [
          {
            "group": "source params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车来源名称</p>"
          }
        ],
        "brand params": [
          {
            "group": "brand params",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>汽车品牌名称</p>"
          },
          {
            "group": "brand params",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车品牌图片</p>"
          }
        ],
        "shape params": [
          {
            "group": "shape params",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>汽车车型名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/car/collection/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Car/CollectionController.php",
    "groupTitle": "46._汽车收藏模块",
    "name": "GetApiMemberCarCollectionListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/car/collection/handle",
    "title": "03. 收藏操作",
    "description": "<p>当前会员执行汽车收藏操作, 已经收藏过，再次点击取消收藏</p>",
    "group": "46._汽车收藏模块",
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
            "field": "car_id",
            "description": "<p>汽车编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/car/collection/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Car/CollectionController.php",
    "groupTitle": "46._汽车收藏模块",
    "name": "PostApiMemberCarCollectionHandle"
  },
  {
    "type": "post",
    "url": "/api/member/car/collection/status",
    "title": "02. 汽车是否收藏",
    "description": "<p>获取当前会员汽车收藏的详情</p>",
    "group": "46._汽车收藏模块",
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
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "car_id",
            "description": "<p>汽车编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/car/collection/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Car/CollectionController.php",
    "groupTitle": "46._汽车收藏模块",
    "name": "PostApiMemberCarCollectionStatus"
  },
  {
    "type": "get",
    "url": "/api/member/car/shape/attention/list?page={page}",
    "title": "01. 我的关注列表",
    "description": "<p>获取当前会员关注车型分页列表</p>",
    "group": "47._车型关注模块",
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
        "url": "/api/member/car/shape/attention/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Car/Shape/AttentionController.php",
    "groupTitle": "47._车型关注模块",
    "name": "GetApiMemberCarShapeAttentionListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/car/shape/attention/handle",
    "title": "03. 关注操作",
    "description": "<p>当前会员执行关注操作, 已经关注过，再次点击取消关注</p>",
    "group": "47._车型关注模块",
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
            "field": "shape_id",
            "description": "<p>车型编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/car/shape/attention/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Car/Shape/AttentionController.php",
    "groupTitle": "47._车型关注模块",
    "name": "PostApiMemberCarShapeAttentionHandle"
  },
  {
    "type": "post",
    "url": "/api/member/car/shape/attention/status",
    "title": "02. 是否关注车型",
    "description": "<p>获取当前会员是否关注指定车型</p>",
    "group": "47._车型关注模块",
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
            "field": "shape_id",
            "description": "<p>车型编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
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
        "url": "/api/member/car/shape/attention/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Car/Shape/AttentionController.php",
    "groupTitle": "47._车型关注模块",
    "name": "PostApiMemberCarShapeAttentionStatus"
  }
] });
