>Easemob WebIM Demo

# im vue demo简介
im-vue demo是基于环信sdk开发的一款具有匿名聊天、单聊、群聊、聊天室、音视频等功能的应用，为了vue用户能够快速集成环信 im sdk和音视频sdk，仅供参考

# 运行起来
+ 说明：音视频功能需要使用https。
``` bash
# install dependencies
npm install

# Use vant's vue recommends that you do not Use CNPM installation dependencies directly.You can solve the problem of slow download speed of NPM by doing the following: project template
npm install --registry=https://registry.npm.taobao.org

# serve with hot reload at localhost:8080
npm start || HTTPS=true npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# 项目结构

| 目录  | 说明|   |
|------|-----|------|
| build  | 打包后的文件 |
| config | 项目的配置 |
| node_modules | 项目依赖
| static | 资源文件 |
| travis | CI脚本 |
| src | 项目源文件|
|     | components| 项目组件
|     | config | 表情和项目中ui配置
|     | pages | 项目页面
|     | router | 路由
|     | store | vuex store
|     | utils | sdk 引入和配置

# 主要功能点说明
## sdk集成
代码目录：src/utils/WebIM.js

+ 引入sdk和配置文件，实例化。
+ 注册监听事件

## 发送消息
代码目录：src/components/chat/index.vue
+ 在chat组件里实现发消息以及消息上屏,index为发送消息，message为显示消息上屏
+ 具体发送消息的方法在 src/store/chat

## 音视频
代码目录: src/components/emediaModal
+ index为单人音视频， multiAVModal为多人音视频，

## 群组
代码目录：src/components/group
+ 群组发送消息和单人是一样的只是type不同
+ group下为群组设置的代码

## 消息存储
+ 消息存储在 store > chat > msgList
+ 关于持久化：这个demo采用的sdk消息漫游的增值服务，可以拉取历史消息，当然你也可以采用indexdb来做本地存储，同时也可以开通实时回调服务，将消息同步到自己的服务器。