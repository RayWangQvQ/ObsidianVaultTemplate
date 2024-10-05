---
date: <% tp.date.now("YYYY-MM-DD") %>
cssclasses:
  - cards
  - cards-cols-3
tags:
  - diary
creationDate: <% tp.file.creation_date() %>
modificationDate: <% tp.file.last_modified_date() %>
---

## Capture 

```dataviewjs
const {Daily, Research} = customJS
Daily.display(dv, Research)
```

## TaskList

```dataviewjs
dv.taskList(
dv.pages('"04.Projects" or "05.Events" or "07.Lierature" or "02.Notes" or "01.MOC/Todo List" or "01.MOC/Inbox"').file.tasks
.where(t => (t.completed && t.text.startsWith("<% tp.date.now("YYYY-MM-DD") %>"))||
		(dv.compare(t.start, dv.date("<% tp.date.now("YYYY-MM-DD") %>")) == 0)||
		(dv.compare(t.completion, dv.date("<% tp.date.now("YYYY-MM-DD") %>")) == 0))
)
```

