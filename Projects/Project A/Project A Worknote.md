---
tags:
  - worknote
  - ProjectA
---
### Task List
```dataviewjs
dv.taskList(
dv.current().file.tasks
    .where(t => !t.text.includes("?") && !t.text.includes("？") && !t.completed),false)
```
<br>%% %%
### Question List
```dataviewjs
let tag = dv.current().file.tags
dv.taskList(
dv.pages(tag.values[tag.length-1]).file.tasks
    .where(t => (t.text.includes("?")|t.text.includes("？")) && !t.completed),false)
```
<br>%% %%

### Paper List%%记得关于这个项目的文献笔记里都打上这个项目的标签这样才能检索得到 %%
```dataview
TABLE comment AS Comment, join(file.etags, "<br />") AS Tags
FROM "Literature/Notes" AND #ProjectA 
WHERE file.name != "Mdnotes Default Template"
SORT file.ctime desc
```
<br>%% %%
### Logging
#### [[2024-03-29-Fri|2024-03-29 ]]
- 用“logging”命令就可以快速插入日记链接作为日期标题
- 记录这一天在做这个项目的时候都干了些什么活！
	- [ ] 项目A工作记录的待办A ^549a61
	- [ ] 项目A工作记录的问题A？

