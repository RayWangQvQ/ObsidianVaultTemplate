---
tags:
  - worknote
excerpt: 
status:
  - inprogress
creation date: <% tp.file.creation_date() %>
modification date: <% tp.file.last_modified_date() %>
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

