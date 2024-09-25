title: "<%= it.title %>"
tags: unread, <%= it.tags.map(tag => tag.toString().replaceAll(' ', '-')).join(', ')%>
aliases: <%= it.citekey %>
papertype: <%= it.itemType %>