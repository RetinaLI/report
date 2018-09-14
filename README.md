# 车联网报告源码
> 基于`angular-cli`创建
>
> angular中文官网：https://angular.cn/docs
>
> angular-cli wiki：https://cli.angular.io/

## 产品说明

1. 用户访问时的链接形式：

   ```
   http://localhost:4200/serve.html?data=assets/json/data.json
   ```

2. 根据链接中提供的参数项`data（数据文件链接，如/assets/json/data.2312312.json）`，请求访问该json文件，获取到报告需要的数据，然后渲染页面。

## 启动

```
npm install -g @angular/cli   // 这一步推荐用npm，尽量不用cnpm
npm install
npm start
```

打开浏览器访问：<http://localhost:4200/index.html>，运行正常即启动完成。

## 访问某个报告

  + <http://localhost:4200/serve.html?data=assets/json/data.json>   `注意后面的参数`

## 开发注意事项

1. 严格遵守`angular`、`typescript`、`webpack`开发规范；
2. 能用`angular-cli`命令行创建的代码，就用命令行创建，禁止手动创建；
3. 定义的每一项数据，都必须有相应的数据结构或类型声明；
4. 可复用的功能和代码块，多抽取成组件、pipe、指令等等；
5. 可复用的数据结构，多抽取成interface，并export；

## 工程介绍：

1. common

	+ common class

  		1. .vc 垂直居中（父元素需相对定位）
  		2. .part 每个块的圆角白底盒子
      3. .title-blue 带下划线的蓝色字体标题
      4. .table table

2. common component ***所有的公共组件要在providers/share.module中引用、共享***

  + top-nav 顶部banner，需传入bannerInfo
  + part-title 每块的标题
  + map 地图
  + pie 环形饼图