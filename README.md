---
tags: 
desc: 
creationDate: 2024-09-25 23:56
modificationDate: 2024-10-26 12:16
---

Obsidian笔记模版，尝试结合卢曼卡片笔记法、MOC和PARA法，搭建适合自己的第二大脑笔记模板。

使用方法：git clone后，使用Obsidian打开。

## 布局

使用了`Core Plugins`的`Workspaces`插件，将布局整体分为5块工作区。


### 左上面板

定义为笔记和大纲面板。

文件物理路径如下：
- **01.MOC**：`Map of Content`，该目录下主要放用Dataview检索出来的东西，可能有些语句需要修改成你自己的文件夹名字、你自己的标签等等。
	- ☑︎Todo List：待办事项
	- ☑︎Todo Archive：代办归档
	- Event List：日程表
	- 其他自建MOC
- **02.Notes**：用于暂存新建的笔记文件，插入模版等操作搞定后你就可以把笔记挪到它原来应该在的位置了。
- **03.Diary**：日记
	- 注意日记目前需要你每天先运行quick add的“Capture”命令，输入一些闲话（？）来创建当天日记。如果从主页的Diary创建，或者从右上面板的日历视图创建，都会导致一些语法的失效
	- 这个bug预计是可以修复的问题，但还在等大佬们写插件出来
	- 创建后的日记就可以从主页和日历视图点进去
- **04.Projects**：项目
	- 每个科研课题都可以有一个总览的kanban【模版：🏠 Project】
	- 以及一个工作记录文件【模版：🧸 Work】
- **05.Events**：放的是周期会议、讲座、组会、workshop等事务。
	- 讲座我自己做了一个总览文件，请自行根据文件路径等需求修改dataview语句
	- 讲座笔记【模版：📢 Talk】
	- 组会和1v1会议笔记【模版：👀 Meeting】
- **06.People**：人，其他笔记内如果需要标记人，可以使用外链链接过来。
- **07.Literature**：放书、影音和笔记，可以结合微信读书或豆瓣等插件。
- **98.Templates**：放模板文件。
- **99.Attachments**：放一些脚本和附件。
	- ==Scripts文件夹下的文件，除了“daily_diary.js”文件之外，其他都需要你去把里面的文件路径修改成你自己的文件路径，否则有一些脚本功能无法实现==
	- kanban.js文件除了文件路径之外，还需要把代码里如图内容改成你自己的toggl track的项目名，记得一一对应，参考视频可以点[这里](https://www.bilibili.com/video/BV1mb4y1y7R6/)
	- ![[截屏2024-03-30 16.11.25.png |400]]

### 左下面板

标签和书签

### 右上面板

双链和Git

### 右下面板

日历和代办区。

- 左下其实就是固定了**01.MOC**目录中的“Todo List”和“Event List”两个md文件**
- 关于Todo List
	- Today下面放的是在其他文件中已经有的待办任务，所以他的原理是引用文件里任务的那一行，真正的内容还是在原来的文件里，像这样：![[Project A Worknote#^549a61]]
	- Inbox下面放的则是“真实”的待办，是你临时想要做或者不适用于放在任何其他文件里的待办都可以放在这里
	- 完成任务之后可以直接在面板打勾，不需要进入到文件里面；再运行quick add的“🧾 Archive Tasks”命令就可以把已完成的任务归档
	- 对于已完成任务的归档，Today的原理是直接删除这个引用（但原文件里的该待办依然存在），Inbox的原理是把已完成的任务删除，并写入Amap/Inbox这个文件里
- 关于Event List
	- 我这里放的是除了课程以外的、每周重复的事件，如果是1v1会议就链接到1v1会议的文件，讲座就链接到讲座总览文件，以此类推
	- 由于是重复性事件，在事件过去后打勾完成该事件它会自动生成下一次的这个事件
	- 对于已过去（完成）的事件，可以运行quick add的“Archive Events”命令删除（没有归档）这些事件
- 在左下角的待办添加完毕后，运行quick add的“Track”命令，OB就会读取你左下待办里面的所有未完成的任务


### 正文面板

- 如果想更换主页头图，可以把图片文件放到`99.Attachments/Files`文件夹里，并改名为【homepage_banner.jepg】
- 主页整体由一个叫“contribution widget”的插件构成（现版本已改名为“components”，但本库目前没有更新到这个版本）参考视频可以点[这里](https://www.bilibili.com/video/BV1TJ4m1x76K)
- 这是一个还在内测阶段的插件，所以没有办法在插件市场找到

## 主要设置

- 使用该库需要你掌握OB的一些最基本的概念，你大概需要知道（包括但不仅限于）：
	- 命令（command）是什么（Mac电脑是【command+P】来打开命令面板），怎么用快捷键调用指定命令，怎么更换指定命令快捷键
	- Markdown文件是什么，基本语法怎么写
	- 阅读模式（reading view），编辑模式（editing view）以及源码模式（source mode）是什么，如何切换
	- 如何下载、配置、使用第三方插件
	- 双链的基本用法（引用文件，引用标题，用Block ID引用块）
	- 标签、文件的属性（properties/meta data/front matter）怎么用
	- 核心三方插件
		- Commander
		- QuickAdd
		- Templater
		- Dataview
		- Kanban
		- Tasks
- 一些示例文件在开启“编辑模式”后可以看到我写的一些注释，但可能会有文件遗漏
- ==**Run quick add** 这个命令是本库工作流的核心==，我目前用的快捷键是Mac电脑的【option+Q】，如果不习惯请自行到设置（setting）-快捷键（hotkeys）中更改
	- quick add的命令包括
		- 📝 Today： 在复制好**其他文件中的待办任务Block ID**后，运行该命令，粘贴进对话栏即可添加该任务到左下面板的Today标题下
		- ☑︎Todo Inbox：运行该命令，输入待办内容后，任务会被自动添加进左下面板的Inbox标题下
		- ⏳ Track：让你选取左下面板中各个任务，以及选择任务相应的project后，开始对该任务计时
		- 🕰 Capture：在日记里打下时间戳内容，用它来创建每天的日记文件（而不是用日历视图/主页链接来创建每天的日记文件）
		- 🌫 Logging：在笔记中的“### Logging”字样下插入当日日记的链接
		- Templates：以该目录下的选取的某个模版创建一个新笔记文件
		- Archive：Archive Tasks是把左下角面板“Todo List”中**已完成的Inbox任务**以及**所有Today的任务**（不管是否完成）清除；Archive Events是把左下角面板“Events List”中  **已完成的事件任务清除**

## 主题颜色

- 该库使用Minimal主题。
- 颜色为自调，可以在style setting中修改。
- 除了minimal之外我还缝合了另一个主题border的卡片分布，所以你可以看到左中右的面板都像一张张卡片
- 如果想对目前的布局等外观进行修改，以下是目前控制着外观的插件和设置
	- 设置（setting）-外观（appearance）有多个参数可调，且up写了一些css来对整体布局进行调整，可以关闭那些css查看都有什么变化
	- Hider插件：用于隐藏一些零零碎碎的小东西
	- Minimal theme setting插件：对于minimal这个主题的整体设置
	- style setting插件：对于minimal主题更细节方面的设置
- ==不建议大家花太多时间在外观设置上，如果像我一样没有css经验还非要扒别人的样式，真的费时费力且不讨好……==

## 搭建教程
- 上面所有内容基本涵盖了我90%的搭建流程了。对OB略微熟悉的朋友（应该）看了说明就可以开始动手使用啦！
- 搭建教程的视频会基于这个文件进行录制，逻辑会再捋一捋，细节也可能会扩展一下，但个人认为核心内容已经都在这里了

## 参考
- 《卡片笔记写作法：如何实现从阅读到写作》
- 《笔记的方法》
- 《Antinet》
- Bilibili UP: [锅操操](https://space.bilibili.com/9193727) / 小红书: [锅贴贴](https://www.xiaohongshu.com/user/profile/5a6e15a1e8ac2b7034cf1c94)
