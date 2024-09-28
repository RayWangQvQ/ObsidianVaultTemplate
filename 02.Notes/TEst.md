---
tags:
  - worknote
excerpt: 
status: inprogress
destination: Projects/
creation date: 2024-09-28 18:08
modification date: 2024-09-六 18:08:19 星期六
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

