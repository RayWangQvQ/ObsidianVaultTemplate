# <%= it.title %>
[Zotero](<%= it.backlink %>)  | [PDF](zotero://open-pdf/library/items/<%if (it.attachment){%><%= it.attachment.key %><%}else { %><%= it.key %><% }%>)

**<%= it.authors.join(", ") %>**

> [!Cite] Abstract
> <%= it.abstractNote %>



%% comment:: %%
