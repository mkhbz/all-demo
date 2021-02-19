# 外壳
- lerna 管理包
- eslint 规范代码
# main
- npm install webpack webpack-cli
- 创建webpack.config.js
```shell
修改指向文件到build/webpack.config.js中
```
```shell
修改指向文件到build/webpack.config.js中
``` 
- 安装html-webpack-plugin，搭建html模板
```shell
在webpack.config.js中配置这个plugin,先引入，再配置再plugins中，配置项可以查文档
```
- 安装babel的几个核心包以及修改package.json的browerlist
```shell
cnpm i babel-loader @babel/core @babel/preset-env -D
在webpack.config.js中添加rules，让babel对打包的文件转义
```
- 安装react以及@babel/preset-react
```shell
cnpm i @babel/preset-react -D
cnpm i react react-dom -S
```
- 添加clean-webpack-plugin 清除多次打包生成的文件
``` shell
cnpm i clean-webpack-plugin -D
安装后在webpack.config.js中使用这个插件
```
- 在index.js中添加入口

- 添加webpack-dev-server 开发模式
```shell

yarn add webpack-dev-server -D
dev": "webpack-dev-server --open
将devserver写道webpack.config.js中
```
- 添加react-router
```shell
yarn add react-router-dom --save
```
- 配置webpack的resolve
```shell
   resolve: {
        extensions: [".jsx", ".js"]
    },
```
- 配置alias
```shell
resolve:{
    alias:{
        '@':resolve('../src')
    }
}
```
- 添加qiankun
```shell
yarn add qiankun
mkdir micro-app.js文件
```
- 安装ant design，且按需加载
```shell
npm install antd --save
npm install babel-plugin-import -D
```
- 安装less，less-loader，css-loader，style-loader
```shell
npm install less-loader less style-loader css-loader
```
- 安装react-redux 作为存储
```shell
npm install react-redux -S
```
- 安装lerna作为依赖管理
```shell
npm install --global lerna
```
- 安装eslint，使用爱彼迎的
```shell
npm install -g eslint 
npm install -g eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint

```


# Vue
- 安全vue脚手架到全局
```shell
 npm install webpack webpack-cli -g
```
- 安装一个vue的初始项目








- 问题
> Error: Cannot find module 'webpack-cli/bin/config-yargs'
```shell
使用 webpack serve 来启动 webpack-dev-server
"start": "webpack serve  --config ./config/webpack.common.js "
```
> const can only be used in a .ts file react native
```shell
在class组件中不能使用const，需要移到外面
```
- 引入antd的样式错误
```shell
额外配置下css文件的解析，专门针对node_modules的
```
- [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future
```
npm i --save-dev html-webpack-plugin@next
```

- You need to export lifecycle functions in vue entry
```shell
在各个子项目中导出qiankun的生命周期
```