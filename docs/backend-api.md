# 个人网站后端API接口文档

本文档详细说明了个人网站所需的后端API接口。这些接口将支持网站的动态功能，如聊天、图片管理等功能。

## 基础信息

- 基础URL: `http://your-api-domain.com/api/v1`
- 所有接口均返回JSON格式数据
- 认证方式: Bearer Token (JWT)
- 错误响应格式:
  ```json
  {
    "success": false,
    "error": {
      "code": "ERROR_CODE",
      "message": "错误详细描述"
    }
  }
  ```

## 1. 用户信息接口

### 1.1 获取个人信息

获取网站所有者的基本信息。

- **URL**: `/profile`
- **方法**: `GET`
- **认证**: 不需要
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "name": "Peter",
      "title": "技术爱好者 / 艺术创作者",
      "avatar": "/images/musk.png",
      "bio": "作为一名热爱科技与艺术的创作者，我致力于将两个领域的创新理念融合。多年来，我积累了丰富的技术经验，同时保持对艺术创作的热情。我相信，真正的创新来自于跨领域的思考和实践。无论是编写代码还是创作艺术作品，我都尝试用独特的视角去探索世界，并通过作品表达自己的理解和感悟。",
      "socialLinks": [
        {"platform": "github", "url": "https://github.com/peter"},
        {"platform": "linkedin", "url": "https://www.linkedin.com/in/peter"},
        {"platform": "twitter", "url": "https://twitter.com/peter"},
        {"platform": "instagram", "url": "https://www.instagram.com/peter"}
      ]
    }
  }
  ```

### 1.2 更新个人信息 (管理员功能)

更新网站所有者信息。

- **URL**: `/profile`
- **方法**: `PUT`
- **认证**: 需要 (管理员)
- **请求体**:
  ```json
  {
    "name": "Peter",
    "title": "技术爱好者 / 艺术创作者",
    "bio": "个人简介内容...",
    "socialLinks": [
      {"platform": "github", "url": "https://github.com/peter"},
      {"platform": "linkedin", "url": "https://www.linkedin.com/in/peter"}
    ]
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "message": "个人信息更新成功"
    }
  }
  ```

## 2. 作品集接口

### 2.1 获取所有作品

获取所有作品列表。

- **URL**: `/gallery`
- **方法**: `GET`
- **认证**: 不需要
- **查询参数**:
  - `category` (可选): 按类别筛选 (摄影、技术、艺术等)
  - `limit` (可选): 限制返回数量，默认10
  - `page` (可选): 分页页码，默认1
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "items": [
        {
          "id": 1,
          "title": "内蒙古草原风光",
          "category": "摄影",
          "image": "/images/内蒙古草原.jpeg",
          "description": "这是我在内蒙古大草原拍摄的照片，广阔无边的草原让人感受到大自然的壮美与宁静。天空与草原的交界处，勾勒出一幅美丽的自然画卷。",
          "createdAt": "2023-05-15T08:30:00Z"
        },
        {
          "id": 2,
          "title": "九寨沟水景",
          "category": "摄影",
          "image": "/images/九寨沟.jpg",
          "description": "九寨沟的湖水清澈见底，色彩斑斓。这张照片记录了九寨沟独特的自然景观，是大自然鬼斧神工的杰作。",
          "createdAt": "2023-06-20T10:15:00Z"
        }
        // ... 更多作品
      ],
      "pagination": {
        "total": 6,
        "page": 1,
        "limit": 10,
        "totalPages": 1
      }
    }
  }
  ```

### 2.2 获取单个作品详情

获取特定作品的详细信息。

- **URL**: `/gallery/:id`
- **方法**: `GET`
- **认证**: 不需要
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "title": "内蒙古草原风光",
      "category": "摄影",
      "image": "/images/内蒙古草原.jpeg",
      "description": "这是我在内蒙古大草原拍摄的照片，广阔无边的草原让人感受到大自然的壮美与宁静。天空与草原的交界处，勾勒出一幅美丽的自然画卷。",
      "createdAt": "2023-05-15T08:30:00Z",
      "tags": ["自然", "风景", "草原"],
      "metadata": {
        "location": "内蒙古",
        "camera": "Canon EOS 5D Mark IV",
        "lens": "24-70mm f/2.8"
      }
    }
  }
  ```

### 2.3 添加新作品 (管理员功能)

添加新的作品到作品集。

- **URL**: `/gallery`
- **方法**: `POST`
- **认证**: 需要 (管理员)
- **请求体** (multipart/form-data):
  - `title`: 作品标题 (文本)
  - `category`: 作品类别 (文本)
  - `description`: 作品描述 (文本)
  - `image`: 作品图片 (文件)
  - `tags`: 标签，JSON字符串数组 (文本)
  - `metadata`: 元数据，JSON对象 (文本)
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "id": 7,
      "message": "作品添加成功"
    }
  }
  ```

### 2.4 更新作品 (管理员功能)

更新现有作品信息。

- **URL**: `/gallery/:id`
- **方法**: `PUT`
- **认证**: 需要 (管理员)
- **请求体** (multipart/form-data):
  - `title` (可选): 作品标题 (文本)
  - `category` (可选): 作品类别 (文本)
  - `description` (可选): 作品描述 (文本)
  - `image` (可选): 作品图片 (文件)
  - `tags` (可选): 标签，JSON字符串数组 (文本)
  - `metadata` (可选): 元数据，JSON对象 (文本)
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "message": "作品更新成功"
    }
  }
  ```

### 2.5 删除作品 (管理员功能)

删除作品。

- **URL**: `/gallery/:id`
- **方法**: `DELETE`
- **认证**: 需要 (管理员)
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "message": "作品删除成功"
    }
  }
  ```

## 3. 聊天接口

### 3.1 获取历史消息

获取聊天历史记录。

- **URL**: `/chat/messages`
- **方法**: `GET`
- **认证**: 可选 (游客可访问，认证用户获取自己的历史记录)
- **查询参数**:
  - `limit` (可选): 限制返回数量，默认20
  - `before` (可选): 获取指定消息ID之前的消息
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "messages": [
        {
          "id": "msg123",
          "text": "你好！欢迎来到我的个人网站。有什么我可以帮助你的吗？",
          "sender": "ai",
          "timestamp": "2023-10-01T14:22:30Z"
        },
        {
          "id": "msg124",
          "text": "我想了解更多关于你的作品集",
          "sender": "user",
          "timestamp": "2023-10-01T14:23:15Z"
        }
        // 更多消息
      ],
      "hasMore": false
    }
  }
  ```

### 3.2 发送消息

向AI助手发送消息。

- **URL**: `/chat/messages`
- **方法**: `POST`
- **认证**: 可选 (未认证用户作为游客聊天)
- **请求体**:
  ```json
  {
    "text": "你能告诉我更多关于你的书法作品吗？"
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "message": {
        "id": "msg126",
        "text": "我的书法作品主要融合了传统与现代的书写风格。我特别喜欢创作'略'字这样的半草书风格，展现汉字的美感与力量。我认为书法是一种很好的表达传统文化的方式，通过书法可以体会到中华文化的深厚底蕴。您对书法也有兴趣吗？",
        "sender": "ai",
        "timestamp": "2023-10-01T14:25:30Z"
      }
    }
  }
  ```

### 3.3 清除聊天历史 (用户功能)

清除用户的聊天历史。

- **URL**: `/chat/messages`
- **方法**: `DELETE`
- **认证**: 可选 (游客清除会话，认证用户清除历史)
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "message": "聊天历史已清除"
    }
  }
  ```

## 4. 用户认证接口 (管理功能)

### 4.1 登录

管理员登录获取token。

- **URL**: `/auth/login`
- **方法**: `POST`
- **认证**: 不需要
- **请求体**:
  ```json
  {
    "username": "admin",
    "password": "your_secure_password"
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expiresIn": 86400
    }
  }
  ```

### 4.2 验证令牌

验证token是否有效。

- **URL**: `/auth/verify`
- **方法**: `GET`
- **认证**: 需要
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "valid": true,
      "user": {
        "id": "admin",
        "role": "admin"
      }
    }
  }
  ```

### 4.3 刷新令牌

刷新认证token。

- **URL**: `/auth/refresh`
- **方法**: `POST`
- **认证**: 需要 (使用refresh token)
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expiresIn": 86400
    }
  }
  ```

## 5. 网站统计接口 (管理功能)

### 5.1 获取访问统计

获取网站访问统计信息。

- **URL**: `/stats/visits`
- **方法**: `GET`
- **认证**: 需要 (管理员)
- **查询参数**:
  - `period`: 统计周期 (day, week, month, year)，默认为month
  - `startDate` (可选): 开始日期 (YYYY-MM-DD)
  - `endDate` (可选): 结束日期 (YYYY-MM-DD)
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "totalVisits": 12543,
      "uniqueVisitors": 8732,
      "avgTimeOnSite": 185,
      "bounceRate": 0.32,
      "timeline": [
        {"date": "2023-09-01", "visits": 423, "uniqueVisitors": 312},
        {"date": "2023-09-02", "visits": 398, "uniqueVisitors": 285}
        // 更多日期数据
      ],
      "topPages": [
        {"path": "/", "visits": 5432, "avgTime": 120},
        {"path": "/gallery", "visits": 3211, "avgTime": 210}
        // 更多页面数据
      ]
    }
  }
  ```

## 部署说明

1. 后端服务应提供CORS支持，允许前端域名访问
2. 所有API响应应包含适当的缓存控制头
3. 敏感接口应实现速率限制，防止滥用
4. 文件上传接口应限制文件大小和类型
5. 建议使用HTTPS确保数据传输安全

## 开发建议

1. 使用Express.js或Nest.js构建Node.js后端
2. 对于数据库，可选择MongoDB或PostgreSQL
3. 使用JWT进行认证和授权
4. 实现文件上传功能可考虑AWS S3或自托管存储
5. 聊天功能可考虑集成现有AI服务如OpenAI GPT或自定义实现 