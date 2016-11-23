# README

## 页面测试

- <https://zhouzhengrui.github.io/gongxiaoshe/>

## 更新记录

### 2016-11-23

- 上传订单结算页/订单完成页/订单详情页
- 兼容性调整, 弃用IE6
- 页面头部的原IE6条件注释改为:
```html
<!--[if IE 6]>
<script type="text/javascript" src="js/fixIE/byeIE6.js"></script>
<![endif]-->
```
- 页面尾部js引入部分添加:
```html
<!--[if lt IE 10]>
<script type="text/javascript" src="js/fly/requestAnimationFrame.js"></script>
<![endif]-->
```


### 2016-11-18

- 上传用户信息页/收货地址页/新建地址页/修改密码页/商品内容页/新闻列表页/新闻内容页
- 之前的页面有少量改动
- 移除jqueryTools插件
- 新增jqueryUI/cxSelect/elevateZoom/scrollable/validate插件

### 2016-11-4

- 上传个人中心-订单列表页

### 2016-11-3

- 上传个人中心页

### 2016-10-31

- 上传商品列表页
- 加入fly插件
- 右侧固定按钮有调整
- 顶部和右侧的购物车数字添加ID，为商品加入购物车后数字+1效果

### 2016-10-25

- 购物车页添加标题栏，删除按钮添加弹出框功能
- 加入lazyload插件，所有商品图片添加class、更改图片链接方式

### 2016-10-24

- 首页添加“返回顶部”按钮
- 上传登录页、购物车页

### 2016-10-21

- 新建项目，上传首页

## 所用插件

- [分类菜单 - superFish 1.7.4](http://users.tpg.com.au/j_birch/plugins/superfish/)
- [滚动图片 - responsiveSlider 1.5.4](http://responsiveslides.com/)
- [弹出框 - fancyBox 2.1.5](http://fancyapps.com/fancybox/)
- [延迟加载 - lazyload 1.9.3](http://www.appelsiini.net/projects/lazyload)
- [抛物线 - fly 1.0.0](https://github.com/amibug/fly)
- [地区选择 - cxSelect 1.4.1](http://code.ciaoca.com/jquery/cxSelect/)
- [商品图放大 - elevateZoom 3.0.8](www.elevateweb.co.uk/image-zoom)
- [商品缩略图滚动 - scrollable](http://jquerytools.github.io/documentation/scrollable/index.html)
- [表单验证 - validate 1.15.0](http://jqueryvalidation.org/)
- [选项卡/提示框/下拉列表/单选复选框/数量加减 - jqueryUI 1.12.1](http://api.jqueryui.com/)

## 相关备注

- 首页slidershow图片尺寸 `760*455px`
- 首页产品列表图片尺寸 `130*130px`
- 购物车/订单产品图片尺寸 `80*80px`
- 商品列表页图片尺寸 `219*219px`
- 商品内容页大图尺寸 `420*420px`
- 商品内容页缩略图尺寸 `60*60px`
- 商品内容页放大图尺寸 `800*800px`

## 已完成页面

- 首页 `index.html`
- 登录页 `login.html`
- 购物车 `cart.html`
- 订单页 `order.html`
- 订单页-完成 `order-finish.html`
- 商品列表 `list-goods.html`
- 商品内容 `page-goods.html`
- 新闻列表 `list-news.html`
- 新闻内容 `page-news.html`
- 个人中心 `user.html`
- 个人中心-我的订单 `user-order.html`
- 个人中心-我的订单-订单详情 `user-order-content.html`
- 个人中心-用户信息 `user-info.html`
- 个人中心-收货地址管理 `user-address.html`
- 个人中心-收货地址管理-新建收货地址 `user-address-build.html`
- 个人中心-修改密码 `user-password.html`
