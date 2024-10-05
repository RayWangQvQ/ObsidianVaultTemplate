---
tags:
  - MOC
desc: All readed books
creation_date: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
modification_date: <% tp.file.last_modified_date() %>
---

```dataview
table author, progress, readingDate, lastReadDate
from #book 
sort lastReadDate desc
```
