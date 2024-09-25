---
cssclasses: 
  - cards
recent_limit: 20
tags:
  - list
---

### `$= dv.pages('"Literature/Notes" AND #unread').where(p=>p.file.name[0]=='@').file.length` Papers to Read
%%  %%
  
```dataview
TABLE title AS Title, join(file.etags, "<br />") AS Tags
FROM "Literature/Notes" AND #unread
WHERE file.name != "Mdnotes Default Template"
SORT file.ctime desc
```

%%  %%
  
  
### Recent Reading
```dataview
TABLE title AS Title, join(file.etags, "<br />") AS Tags
FROM "Literature/Notes"
WHERE file.name[0] = "@"
WHERE file.tags[0] != "#unread"
WHERE comment > 0
SORT file.mtime desc
LIMIT this.recent_limit
```
%%  **评分维度说明**

- 相关性：指文章与当前研究课题或者拟开展的课题的相关程度
- 信息量：指文章内容能够学习参考的东西（作图、行文、数据分析）多寡
- 创新性：指文章的研究思路是否真正别出心裁让人有所启发

显示最近阅读过的`=this.recent_limit`篇文献。 
 %%