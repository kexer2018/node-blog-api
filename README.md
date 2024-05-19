# node-blog-api
express+mysql+sequelize，博客系统的后端API基础功能，练习项目

# 功能需求

## 用户
用户注册：POST /register
用户登录：POST /login
更新用户信息：PUT /update
关注文章/取消关注文章：POST /toggle-favorite

## 文章
创建文章：POST /articles
获取文章列表：GET /articles
获取单个文章：GET /articles/:id
更新文章：PUT /articles/:id
删除文章：DELETE /articles/:id
查询关注列表： GET /articles/followers/:id

# 技术栈
框架：Express
数据库：MySQL
缓存：Redis
认证：JWT
ORM：Sequelize
测试：Mocha

# 使用
1. git clone 
2. 根目录下创建.env文件，添加配置项，包括 ` PORT,DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_NAME,JWT_SECRET,REDIS_HOST,REDIS_PORT`
3. npm i 下载依赖
4. 连接数据库
5. npm run start








