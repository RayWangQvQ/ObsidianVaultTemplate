---
tags:
  - list
cssclasses:
  - cards
  - cards-cols-3
---
### Todo List %%这个与主页的Todo List是同一个查询语句%%
```dataviewjs
dv.taskList(
    dv.pages('"Projects" or "Events" or "Literature" or "Blist" or "Courses"').flatMap(page => {
        let tags = String(page.tags).split(" ");
        if (tags.includes("list")) {
            return page.file.tasks.where(t => 
                !t.completed &&
                !t.text.contains("?") &&
                !t.text.includes("？") &&
                !t.text.contains("#pending") &&
                !t.path.contains("Projects/Building Workflow") && 
                (t.header.subpath == "Todo" || t.header.subpath == "Doing")
            );
        } else {
            return page.file.tasks.where(t => 
                !t.completed &&
                !t.text.contains("?") &&
                !t.text.includes("？") &&
                !t.text.contains("#pending") &&
                !t.path.contains("Projects/Building Workflow")
            );
        }
    })
)
```

### Pending List  %% 一些没整理完的笔记、没记完的东西都可以打上#pending 的标签，这里会收集所有打了这个标签的文件段落 %%
```dataviewjs
dv.taskList(
	dv.pages().file.tasks
    .where(t => t.text.includes("#pending") && !t.completed))
```
%%  %%
### Question List %%这个列表收集所有文件里 带问号的任务%%
%%  %%
```dataviewjs
const files = dv.pages().file
dv.taskList(
	files.tasks
    .where(t => (t.text.includes("?")|t.text.includes("？")) && !t.completed).sort(f=>f.mtime,"desc"))
```

