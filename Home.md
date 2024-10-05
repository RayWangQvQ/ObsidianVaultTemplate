---
tags: 
creationDate: 2024-09-25 23:00
modificationDate: 2024-10-05 20:42
banner: "![[homepage_banner.jpeg]]"
banner_y: 1
banner_lock: true
cssclasses:
  - rightlane
---

#  🍳  Homepage

```contributionWidget
id: f88a3438-8a23-487d-a13d-fd19914a50df
type: multi
titleAlign: center
tabTitle: ""
maxWidthRatio: -1
backgroundStyle: none
widgets:
  - id: 1769d304-2fb9-45a0-b2e9-9376b99beee5
    type: multi
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: 60.243414145853166
    backgroundStyle: none
    widgets:
      - id: 1bca177f-b95d-4e43-80ba-efbf441bf20c
        type: markdown
        titleAlign: center
        tabTitle: ""
        maxWidthRatio: -1
        backgroundStyle: card
        maxHeight: 150
        contentAlign: left
        markdownsSource: content
        markdownValue: |-
          <div class="title"; style="font-size: 18px; line-height: 24px; text-align: center;">MOC</div>
          <div style="font-size: 13px;">

          ````col
          ```col-md
          flexGrow=1
          ===
          📚 [[Courses]]
          🪟 [[Work List|Work]]
          📝 [[Paper List|Papers]]
          ```
          ```col-md
          flexGrow=1
          ===
          📖 [Daily](obsidian://advanced-uri?vault=Work&daily=true)
          🗂 [Weekly](obsidian://advanced-uri?vault=Work&commandid=periodic-notes%253Aopen-weekly-note)
          ```
          ```col-md
          flexGrow=1
          ===
          🎨 [[Project A]]
          💥 [[Project B]]
          ```
          ````

          </div>
        backgroundColor: "#E4DFD963"
        fontColor: "#40352e"
    layoutType: column
  - id: 5e3fe8a2-207d-4ed1-ac2f-78810a944953
    type: dataview
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: 39.756585854146834
    query: |-
      dv.taskList(
          dv.pages('"Projects" or "Events" or "Literature" or "Blist" or "Courses"').flatMap(page => {
              let tags = String(page.tags).split(" ");
              if (tags.includes("list")) {
                  return page.file.tasks.where(t => 
                      !t.completed &&
                      !t.text.contains("?") &&
                      !t.text.includes("？") &&
                      !t.text.contains("#pending") &&
                      !t.path.contains("Projects/Building Workflow") && 
                      (t.header.subpath == "Todo" || t.header.subpath == "Doing")
                  );
              } else {
                  return page.file.tasks.where(t => 
                      !t.completed &&
                      !t.text.contains("?") &&
                      !t.text.includes("？") &&
                      !t.text.contains("#pending") &&
                      !t.path.contains("Projects/Building Workflow")
                  );
              }
          })
      )
    queryType: dataviewjs
    backgroundStyle: card
    maxHeight: 120
    dynamicParamComponents: []
    title: Todo
    backgroundColor: "#E4DFD963"
    fontColor: "#40352e"
layoutType: column

```

```contributionWidget
id: 790989ce-58f7-4c54-8d03-c2c6cc7f1bc8
type: multi
titleAlign: center
tabTitle: ""
maxWidthRatio: -1
backgroundStyle: none
widgets:
  - id: 90d04826-ad71-4de0-b016-7cba0de4307e
    type: multi
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    backgroundStyle: none
    widgets:
      - id: 51707cb6-5865-4ab4-bb81-5baa6cac6f1e
        type: dateProgress
        titleAlign: center
        tabTitle: ""
        maxWidthRatio: -1
        backgroundStyle: card
        showDateIndicator: true
        showProgressIndicator: true
        startDateTimeType: $startOfYear
        endDateTimeType: $endOfYear
        uiType: bar
        title: Remaining of 2024
        backgroundColor: "#E4DFD963"
        fontColor: "#40352e"
      - id: f75299d1-2103-468a-8bf5-bf14e54dd0ab
        type: timing
        titleAlign: center
        tabTitle: ""
        maxWidthRatio: 50
        backgroundStyle: card
        showStartDateTime: false
        timeTextPattern: yMdHms
        title: Whatever you like to put here
        startDateTime: 2021-09-01 00:00:00
        backgroundColor: "#E4DFD963"
        fontColor: "#40352e"
    layoutType: column
layoutType: column

```

```contributionGraph
title: Contributions
graphType: default
dateRangeValue: 365
dateRangeType: LATEST_DAYS
startOfWeek: "1"
showCellRuleIndicators: true
titleStyle:
  textAlign: center
  fontSize: 16px
dataSource:
  type: PAGE
  value: ""
  dateField: {}
fillTheScreen: true
enableMainContainerShadow: false
cellStyleRules:
  - id: Wine_a
    color: "#d8b0b3"
    min: 1
    max: 2
  - id: Wine_b
    color: "#c78089"
    min: 2
    max: 3
  - id: Wine_c
    color: "#ac4c61"
    min: 3
    max: 5
  - id: Wine_d
    color: "#830738"
    min: 5
    max: 9999
mainContainerStyle:
  boxShadow: rgba(0, 0, 0, 0.16) 0px 1px 4px
  backgroundColor: "#E4DFD963"
cellStyle:
  borderRadius: ""
  minWidth: 4px

```

## MOC

```dataview
table desc, creationDate, modificationDate
from #MOC 
sort lastReadDate desc
```
