---
tags:
  - meetingnote
---

### Question List
```dataviewjs
dv.taskList(
dv.current().file.tasks
    .where(t => (t.text.includes("?") |t.text.includes("？")) && !t.completed),false)
```
### Task List
```dataviewjs
dv.taskList(
dv.current().file.tasks
    .where(t => !t.text.includes("?") && !t.text.includes("？") && !t.completed),false)
```

### Logging
#### [[2024-03-30-Sat|2024-03-30 ]]
- 用quick add的“logging”命令就可以快速插入日记链接作为日期标题
- 在这天和这位老师开完会后记下来了一些要点
	- 准备好xxxxx
	- [ ] 单独会议的待办A ^bf17c8
	- 这个待办会出现在上方的task list和主页的task list里面
	- 读文献 [[@Fong2015|(W. Fong et al., 2015)]]
	- [ ] 单独会议的问题A（问题必须有问号）？


