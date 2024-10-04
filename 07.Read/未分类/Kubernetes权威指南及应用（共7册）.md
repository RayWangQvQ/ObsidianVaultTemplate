---
doc_type: weread-highlights-reviews
bookId: CB_7XKA8MA7k0si6fw6gX4zAAsE
reviewCount: 2
noteCount: 7
author: 等
cover: https://res.weread.qq.com/wrepub/CB_4UrAUTAUsGi06eW6cWGl2DHi_parsecover
readingStatus: 未标记
progress: 78%
totalReadDay: 4
readingTime: 3小时49分钟
readingDate: 2023-04-20
isbn: 
lastReadDate: 2023-05-11
tags:
  - read

---
# 元数据
> [!abstract] Kubernetes权威指南及应用（共7册）
> - ![ Kubernetes权威指南及应用（共7册）|200](https://res.weread.qq.com/wrepub/CB_4UrAUTAUsGi06eW6cWGl2DHi_parsecover)
> - 书名： Kubernetes权威指南及应用（共7册）
> - 作者： 等
> - 简介： 
> - 出版时间： 
> - ISBN： 
> - 分类： 
> - 出版社： 电子工业出版社
> - PC地址：https://weread.qq.com/web/reader/dc8427c3643425f37584b41384d41376b307369366677366758347a41417345a9d

# 高亮划线

### 2 开始使用Kubernetes和Docker

> 📌 -i，确保标准输入流保持开放。需要在shell中输入命令。-t，分配一个伪终端（TTY）。如果希望像平常一样使用shell，需要同时使用这两个选项（如果缺少第一个选项就无法输入任何命令。如果缺少第二个选项，那么命令提示符不会显示，并且一些命令会提示 TERM 变量没有设置）。 ^CB-7XKA8MA7k0si6fw6gX4zAAsE-65-11686-11880
- 💭 -it的意思 - ⏱ 2023-05-11 09:04:06 

> 📌 这证明了运行在容器中的进程是运行在主机操作系统上的。如果你足够敏锐，会发现进程的ID在容器中与主机上不同。容器使用独立的PID Linux命名空间并且有着独立的系列号，完全独立于进程树。 ^CB-7XKA8MA7k0si6fw6gX4zAAsE-65-12778-12871
- 💭 容器内的进程，运行在宿主机上，但是独立于进程树。 - ⏱ 2023-05-11 09:07:55 

#### 1.4 Kubernetes的基本概念和术语

> 📌 在版本迭代过程中，Kubernetes先后扩展了extensions/v1beta1、apps/v1beta1、apps/v1beta2等API组，而在1.9版本之后引入了apps/v1这个正式的扩展API组，正式淘汰（deprecated）了extensions/v1beta1、apps/v1beta1、apps/v1beta2这三个API组。 
> ⏱ 2023-04-21 02:14:14 ^CB-7XKA8MA7k0si6fw6gX4zAAsE-96-1209-1383

> 📌 我们后面执行的所有命令基本都是在Master上运行的 
> ⏱ 2023-04-21 02:16:45 ^CB-7XKA8MA7k0si6fw6gX4zAAsE-96-2947-2973

> 📌 Kubernetes为每个Pod都分配了唯一的IP地址，称之为Pod IP，一个Pod里的多个容器共享Pod IP地址。 
> ⏱ 2023-04-21 02:34:48 ^CB-7XKA8MA7k0si6fw6gX4zAAsE-96-7076-7136

> 📌 我们需要牢记一点：在Kubernetes里，一个Pod里的容器与另外主机上的Pod容器能够直接通信。 
> ⏱ 2023-04-21 02:34:36 ^CB-7XKA8MA7k0si6fw6gX4zAAsE-96-7221-7271

#### 3.2 终于等到你：Kubernetes网络

> 📌 实现Kubernetes的容器网络重点需要关注两方面：IP地址分配和路由。 
> ⏱ 2023-04-23 19:10:59 ^CB-7XKA8MA7k0si6fw6gX4zAAsE-357-1187-1224

# 读书笔记

## 2 开始使用Kubernetes和Docker

### 划线评论
> 📌 -i，确保标准输入流保持开放。需要在shell中输入命令。
-t，分配一个伪终端（TTY）。
如果希望像平常一样使用shell，需要同时使用这两个选项（如果缺少第一个选项就无法输入任何命令。如果缺少第二个选项，那么命令提示符不会显示，并且一些命令会提示 TERM 变量没有设置）。  ^21860447-7I7F8xtjj
    - 💭 -it的意思
    - ⏱ 2023-05-11 09:04:31

### 划线评论
> 📌 这证明了运行在容器中的进程是运行在主机操作系统上的。如果你足够敏锐，会发现进程的ID在容器中与主机上不同。容器使用独立的PID Linux命名空间并且有着独立的系列号，完全独立于进程树。  ^21860447-7I7FtEjQX
    - 💭 容器内的进程，运行在宿主机上，但是独立于进程树。
    - ⏱ 2023-05-11 09:09:43
   
# 本书评论

