---
desc: 
tags:
  - MOC
creationDate: <% tp.file.creation_date() %>
modificationDate: <% tp.file.last_modified_date() %>
---

## Content

```dataview
table author, progress, readingDate, lastReadDate
from #book 
sort lastReadDate desc
```
