---
doc_type: weread-highlights-reviews
bookId: CB_9yUER8EP22ck6YM6YF
reviewCount: 1
noteCount: 7
author: Halil İbrahim Kalkan
cover: https://res.weread.qq.com/wrepub/CB_9yUER8EP22ck6YM6YF_parsecover
readingStatus: 读完
progress: 97%
totalReadDay: 12
readingTime: 2小时53分钟
readingDate: 2022-04-29
finishedDate: 2022-04-29
isbn: 
lastReadDate: 2022-04-30
tags:
  - read

---
# 元数据
> [!abstract] Implementing Domain Driven Design
> - ![ Implementing Domain Driven Design|200](https://res.weread.qq.com/wrepub/CB_9yUER8EP22ck6YM6YF_parsecover)
> - 书名： Implementing Domain Driven Design
> - 作者： Halil İbrahim Kalkan
> - 简介： 
> - 出版时间： 
> - ISBN： 
> - 分类： 
> - 出版社： 
> - PC地址：https://weread.qq.com/web/reader/57b42552a43425f39795545523845503232636b36594d365946f24

# 高亮划线

### Domain Services

> 📌 We prefer and suggest to use the Manager suffix for the Domain Services. 
> ⏱ 2022-04-29 09:11:49 ^CB-9yUER8EP22ck6YM6YF-18-2591-2663

> 📌 If you don't have a good reason, we think there is no need tocreate interfaces (like IIssueManager for the IssueManager) for Domain Services. 
> ⏱ 2022-04-29 09:13:38 ^CB-9yUER8EP22ck6YM6YF-18-3427-3617

### Data transfer Objects

> 📌 A DTO should be serializable, by its nature. Because, most of the time it is transferred over network. So, it should have a parameterless (empty) constructor. 
> ⏱ 2022-04-29 09:18:55 ^CB-9yUER8EP22ck6YM6YF-20-833-1035

> 📌 Sometimes, it seems appealing to reuse the same DTO class for two use cases, because they are almost same. Even if they are same now, they will probably become different by the time and you will come to the same problem. Code duplication is abetter practice than coupling use cases. 
> ⏱ 2022-04-29 09:21:20 ^CB-9yUER8EP22ck6YM6YF-20-2741-3068

> 📌 Do not perform domain validation. For example, don't try to check unique username constraint in the DTOs. 
> ⏱ 2022-04-29 09:24:30 ^CB-9yUER8EP22ck6YM6YF-20-6057-6166

### Entity Creation

> 📌 Where to implement this rule? It is not proper to implement this rule inthe Application Service, because it is a corebusiness (domain) rule thatshould always be checked. 
> ⏱ 2022-04-29 18:08:14 ^CB-9yUER8EP22ck6YM6YF-22-3753-4021

### Updating / Manipulating An Entity

> 📌 saving changed entities is aresponsibility of the Application Service method that coordinates thebusiness objects and the transaction. 
> ⏱ 2022-04-29 18:16:10 ^CB-9yUER8EP22ck6YM6YF-23-2868-3004

# 读书笔记

# 本书评论

## 书评 No.1 
解答了关于DDD的常见问题，比如什么时候用聚合根什么时候用实体 ？领域间的互相引用怎么设计？领域服务和业务服务各怎么用等等，但值对象和领域事件没有涉及到。
总体来说很赞，可以当作DDD 的standard参考手册。  ^21860447-7yTex2rID
⏱ 2022-04-30 01:22:42

