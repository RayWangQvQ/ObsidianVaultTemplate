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


## Notes Created

```dataview
table file.path as "Path", file.tags as "Tags", dateformat(file.ctime, "yyyy-MM-dd HH:mm:ss") as "Creation Time" 
from "" 
where file.cday = this.file.day 
sort file.ctime asc
```

## Notes Modified

```dataview
table file.path as "Path", file.tags as "Tags", dateformat(file.mtime, "yyyy-MM-dd HH:mm:ss") as "Modified Time"
from "" 
where file.mday = this.file.day and file.cday != this.file.day
sort file.mtime asc
```

## Tasks Done

```dataviewjs
dv.taskList(
	dv.pages(
		'"01.MOC/Todo List" or "01.MOC/Inbox" or "02.Notes" or "03.Diary" or "04.Projects" or "05.Events" or "06.People" or "07.Lierature"'
	)
		.file
		.tasks
		.where(
			t => (t.completed && t.text.startsWith("<% tp.date.now("YYYY-MM-DD") %>"))
				|| (dv.compare(t.start, dv.date("<% tp.date.now("YYYY-MM-DD") %>")) == 0)
				|| (dv.compare(t.completion, dv.date("<% tp.date.now("YYYY-MM-DD") %>")) == 0)
		)
)
```

## Checkin
