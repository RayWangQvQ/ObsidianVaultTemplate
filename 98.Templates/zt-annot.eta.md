---
callout: false
---
<% if (it.attachment) { %>
<% if (it.imgEmbed) { %>
- <%= it.imgEmbed %>^<%= it.blockID %>
<% } %>
<% if (it.comment) { %>
> [!Note] [](zotero://open-pdf/library/items/<%= it.parentItem %>?page=<%= it.pageLabel %>&annotation=<%= it.key %>) 
> *<%= it.text %>*<% if (it.tags && it.tags.length > 0) { %> <% = it.tags.map(tag => '#' + tag.name).join(", ") %><% } %>
><% if (it.comment.startsWith('todo ')) { %>[ ] <%= it.comment.substring(5) %>:<% } else { %><%= it.comment %><% } %>
>^<%= it.blockID %><% } else if (it.text) { %>
> [!Note] [](zotero://open-pdf/library/items/<%= it.parentItem %>?page=<%= it.pageLabel %>&annotation=<%= it.key %>)
>*<%= it.text %>*<% if (it.tags && it.tags.length > 0) { %> <% = it.tags.map(tag => '#' + tag.name).join(", ") %><% } %>
>^<%= it.blockID %><% } %><% } %>