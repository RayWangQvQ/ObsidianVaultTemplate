---
desc: 
tags:
  - MOC
creationDate: 2024-10-17 21:12
modificationDate: 2024-10-17 21:14
---

## Team

```dataview
table organization, team, role, workLocation, desc
from #people/team  
sort lastReadDate desc
```

## People

```dataview
table organization, team, role, workLocation, desc
from #people 
sort lastReadDate desc
```
