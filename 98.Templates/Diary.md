---
tags:
  - dailynote
date: <% tp.date.now("YYYY-MM-DD") %>
cssclasses:
  - cards
  - cards-cols-3
---

---

### Capture    
<br>%% %%
```dataviewjs
const {Daily, Research} = customJS
Daily.display(dv, Research)
```
<br>%% %%
### TaskList 
```dataviewjs
dv.taskList(
dv.pages('"Projects" or "Events" or "Lierature" or "Blist" or "Courses" or "Amap/Todo List" or "Amap/Inbox"').file.tasks
.where(t => (t.completed && t.text.startsWith("<% tp.date.now("YYYY-MM-DD") %>"))||
		(dv.compare(t.start, dv.date("<% tp.date.now("YYYY-MM-DD") %>")) == 0)||
		(dv.compare(t.completion, dv.date("<% tp.date.now("YYYY-MM-DD") %>")) == 0))
)
```
<br>%% %%
### NoteList


%% ### ReadList 
```dataview
TABLE comment AS Comments, join(file.etags, "<br />") AS Tags
FROM "Literature/Notes" or "Events"
WHERE file.name[0] = "@"
WHERE file.tags[0] != "#unread"
WHERE file.mtime>=date(<% tp.date.now("YYYY-MM-DD") %>) AND file.mtime<date(<% tp.date.now("YYYY-MM-DD", 1) %>)
SORT file.mtime desc
```
<br> 
 %%