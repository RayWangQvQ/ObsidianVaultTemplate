---
doc_type: weread-highlights-reviews
bookId: "30210733"
reviewCount: 2
noteCount: 16
author: 杨万青
cover: https://cdn.weread.qq.com/weread/cover/23/YueWen_30210733/t7_YueWen_30210733.jpg
readingStatus: 读过
progress: 61%
totalReadDay: 14
readingTime: 3小时8分钟
readingDate: 2020-08-04
isbn: 9787115519511
lastReadDate: 2020-08-11
tags:
  - book
---
# 元数据
> [!abstract] ASP.NET Core与RESTful API 开发实战
> - ![ ASP.NET Core与RESTful API 开发实战|200](https://cdn.weread.qq.com/weread/cover/23/YueWen_30210733/t7_YueWen_30210733.jpg)
> - 书名： ASP.NET Core与RESTful API 开发实战
> - 作者： 杨万青
> - 简介： ASP.NET Core是微软推出的新一代跨平台、高性能Web开发框架，具有模块化、内置依赖项注入、开源、易于部署等特点。作为近些年来主流的软件架构风格，REST旨在构建简单、可靠、高性能、高伸缩性的Web应用。 本书系统地介绍了如何使用ASP.NET Core开发RESTful API应用，共包含10章内容。前3章主要介绍了REST、HTTP、ASP.NET Core的基础理论。第4~10章讲述如何根据前3章的理论逐步构建规范的RESTful API应用，涉及资源的基本操作、Entity Framework Core、高级查询、日志、缓存、并发、HATEOAS、认证与安全、测试以及部署等内容。
> - 出版时间： 2020-02-01 00:00:00
> - ISBN： 9787115519511
> - 分类： 计算机-理论知识
> - 出版社： 人民邮电出版社有限公司
> - PC地址：https://weread.qq.com/web/reader/37f3297071ccfaad37fac5d

# 高亮划线

## 第1章 REST简介

> 📌 REST，全称为REpresentational State Transfer，即表述性状态传递，它是一种应用程序的架构风格，用于构造简单、可靠、高性能的Web应用程序。 
> ⏱ 2020-08-04 23:14:38 ^30210733-6-474-559

### 1.1 API与REST

> 📌 API全称Application Programming Interface，即应用程序编程接口 
> ⏱ 2020-08-04 23:15:35 ^30210733-7-467-515

#### 1.2.1 HTTP简介

> 📌 超文本传输（Hyper Text Transfer Protocol，HTTP）协议，是互联网上应用最为广泛的一种网络协议，也是基于TCP/IP协议的应用层协议。 
> ⏱ 2020-08-04 23:23:06 ^30210733-12-398-479

#### 1.2.2 统一资源定位符

> 📌 统一资源定位符（Uniform Resource Locator），即通常所说的URL，代表网络上一个特定的资源。URL作为URI的子集，一个URL就是一个URI，用于标识并定位资源。 
> ⏱ 2020-08-04 23:30:13 ^30210733-13-399-491

#### 1.2.3 媒体类型

> 📌 MIME（Multipurpose Internet Mail Extensions），即多用途互联网邮件扩展类型，是一种表示文档的性质和格式的标准，因此，媒体类型也被称为MIME类型。 
> ⏱ 2020-08-04 23:35:35 ^30210733-14-482-575

### 1.4 其他问题

> 📌 JavaScript对象表示法（JavaScript Object Notation，JSON）是一种轻量级的数据交换格式。 
> ⏱ 2020-08-05 08:47:09 ^30210733-20-557-619

> 📌 XML是可扩展标记语言（eXtensible Markup Language），它与HTML语言很相似，包含标签、属性等元素，主要用于传输和存储数据。 
> ⏱ 2020-08-05 08:48:06 ^30210733-20-2301-2376

#### 2.3.1 ASP.NET Core主要特性

> 📌 ASP.NET Core应用程序的一个重要优点是它本质上是一个控制台程序，因此能够实现“自我宿主”。 ^30210733-27-619-669
- 💭 ASP.NET Core本质其实就是一个控制台程序，通过其内置的Kestrel跨平台服务器，实现跨平台运行。 - ⏱ 2020-08-05 11:32:13 

### 3.1 启动与宿主

> 📌 个IWebHost实例，它有两个重要的方法，分别是Run和Start，它们都会启动当前宿主；不同的是，前者以阻塞的方式运行宿主，后者则不是。 
> ⏱ 2020-08-05 13:15:34 ^30210733-41-7448-7518

#### 3.1.2 Kestrel

> 📌 ，当Kestrel收到HTTP请求后，它会将其转化为HttpContext 
> ⏱ 2020-08-05 22:01:24 ^30210733-42-1807-1844

#### 3.4.3 Controller与Action

> 📌 ActionResult<T>的优点在于更为灵活地为Action设置返回值，同时，当使用OpenAPI（即Swagger）为API生成文档时，Action不需要使用[Produces]特性显式地指明其返回类型，因为其中的泛型参数T已经为OpenAPI指明了要返回的数据类型。 
> ⏱ 2020-08-07 08:44:54 ^30210733-51-5192-5329

#### 3.4.5 模型验证

> 📌 在特殊情况下，就需要使用复杂的、自定义的验证规则，ASP.NET Core MVC提供了两种创建自定义验证的方法，一种是创建新的特性，并使它继承自ValidationAttribute类；另一种是使待验证的Model实现IValidatableObject接口。 
> ⏱ 2020-08-07 08:57:51 ^30210733-53-2753-2884

#### 3.5.4 重新加载配置

> 📌 可以调用IConfiguration或IConfigurationRoot的Reload方法，即config.Reload()。 
> ⏱ 2020-08-10 08:47:47 ^30210733-59-542-606

#### 3.6.1 ILogger接口

> 📌 当注入ILogger时，必须为其指定泛型类型。 
> ⏱ 2020-08-10 18:51:00 ^30210733-62-4100-4123

### 5.1 Entity Framework Core

> 📌 个ORM框架。对象关系映射（Object Relational Mapping，ORM） 
> ⏱ 2020-08-11 08:36:24 ^30210733-90-537-581

#### 5.2.5 添加测试数据

> 📌 EF Core 2.1新增加了用于添加测试数据的API，ModelBuilder类的方法Entity<T>()会返回一个EntityTypeBuilder<T>对象，该对象提供了HasData方法，使用它可以将一个或多个实体对象添加到数据库中。 
> ⏱ 2020-08-11 18:54:04 ^30210733-96-398-520

# 读书笔记

## 2.3.1 ASP.NET Core主要特性

### 划线评论
> 📌 ASP.NET Core应用程序的一个重要优点是它本质上是一个控制台程序，因此能够实现“自我宿主”。  ^21860447-7jn0HFNBm
    - 💭 ASP.NET Core本质其实就是一个控制台程序，通过其内置的Kestrel跨平台服务器，实现跨平台运行。
    - ⏱ 2020-08-05 11:34:27
   
## 5.3.2 创建其他仓储接口

### 划线评论
> 📌 RepositoryWrapper类定义了一个包含LibraryDbContext类型参数的构造函数，它会使用该对象实例化其中所有的仓储类，并最终将该参数传递给RepositoryBase类。  ^21860447-7jwBSGUzW
    - 💭 恶心的写法。。。
    - ⏱ 2020-08-11 19:02:09
   
# 本书评论

