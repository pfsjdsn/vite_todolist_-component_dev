# 待办清单
项目地址：https://sprightly-longma-8b2ef3.netlify.app

项目技术栈：React + React Hooks + Vite + Ant-Design

vite文档：https://cn.vitejs.dev/guide/

ant design文档：https://4x.ant.design/docs/react/introduce-cn

antd版本：4.24.7（当前项目用的是这个版本）

#### 创建项目

```js
yarn create vite
```

项目名称：todo-list-app

选择模板：react

js/ts：当前选择js



#### 运行项目

```js
cd todo-list-app // 进入项目
yarn // 安装依赖
yarn dev // 运行项目
```



#### antd design  安装 

```js
yarn add antd@4.24.7
```

在main.jsx中引入

```js
import 'antd/dist/antd.css'; 
```



#### ant-design 图标安装

```js
 yarn add @ant-design/icons -S
```



#### 使用Netlify进行项目部署上线

```js
//  Netlify官网
https://www.netlify.com/
// 项目打包
yarn build 
1、 打开Netlify官网
2、使用github账号进行登录
3、将todo-list-app项目打包好后，会生成dist文件夹
4、将dist文件夹拖到Sites页面中即可，会生成项目在线地址
5、项目预览地址:https://sprightly-longma-8b2ef3.netlify.app
```



