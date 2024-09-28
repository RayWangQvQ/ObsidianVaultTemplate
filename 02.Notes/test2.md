---
tags:
  - worknote
excerpt: 
status:
  - inprogress
creation date: 2024-09-28 18:10
modification date: 2024-09-28 18:10
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

