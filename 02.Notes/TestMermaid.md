---
tags:
  - worknote
excerpt: 
status: inprogress
destination: Projects/
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

```mermaid
--- 
title: Node 
--- 

flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
    D -->|Link text| F(Round edge)
	F -->|Link text| G(Round edge)
	G -->|Link text| h(Round edge)
	h -->|Link text| I(Round edge)
```
