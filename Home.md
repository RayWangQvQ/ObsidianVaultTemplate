---
desc: 
tags: 
creationDate: 2024-09-25 23:00
modificationDate: 2024-10-19 17:35
banner: "![[homepage_banner.jpeg]]"
banner_y: 1
banner_lock: true
cssclasses:
  - rightlane
---

#  🍳  Homepage

```contributionWidget
id: 80f5ac56-0174-4a6b-9b8b-9a7ab5f9198d
type: multi
titleAlign: center
tabTitle: ""
maxWidthRatio: -1
backgroundStyle: none
widgets:
  - id: 36601490-01c9-44a4-ad16-6ee2c18c18fd
    type: count
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    backgroundStyle: card
    query:
      type: page
      filter:
        conditions: []
    title: All Pages
    backgroundColor: "#E4DFD963"
    fontColor: "#40352e"
  - id: 71c7a878-dbf4-42b1-a9d2-907735a96ebc
    type: count
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    backgroundStyle: card
    query:
      type: page
      filter:
        conditions:
          - type: tag
            value: "#MOC"
            operator: contains
            property: ""
            id: 8988477c-8059-4fff-b19b-2c61cfd3a83b
    title: MOC
    backgroundColor: "#E4DFD963"
    fontColor: "#40352e"
  - id: c074f1c6-9a3b-4fb2-9a74-28dedac7753a
    type: count
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    backgroundStyle: card
    query:
      type: page
      filter:
        conditions:
          - type: file_path
            value: 02.Notes
            operator: contains
            property: ""
            id: fade8e76-0bab-47d9-ac94-8a2306544933
    title: Notes
    backgroundColor: "#E4DFD963"
    fontColor: "#40352e"
  - id: 2d257c4b-bded-4879-839d-85550b4d2eca
    type: count
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    backgroundStyle: card
    query:
      type: page
      filter:
        conditions:
          - type: file_path
            value: 04.Projects
            operator: contains
            property: ""
            id: 5bd4fde2-37cf-4ac6-9acc-9dd7017f23fe
    title: Projects
    backgroundColor: "#E4DFD963"
    fontColor: "#40352e"
  - id: 1b7daf55-967b-44f7-aea6-d7bd74ff7b83
    type: count
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    backgroundStyle: card
    query:
      type: page
      filter:
        conditions:
          - type: file_path
            value: 03.Diary
            operator: contains
            property: ""
            id: ff9d94c5-5118-4bcf-9655-8306aa90d864
    title: Diary
    backgroundColor: "#E4DFD963"
    fontColor: "#40352e"
layoutType: column

```

```contributionWidget
id: f88a3438-8a23-487d-a13d-fd19914a50df
type: multi
titleAlign: center
tabTitle: ""
maxWidthRatio: -1
backgroundStyle: none
widgets:
  - id: 71d54891-cec1-4609-91bd-be00fe815315
    type: markdown
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    backgroundStyle: card
    maxHeight: 200
    contentAlign: left
    backgroundColor: "#E4DFD963"
    fontColor: "#40352e"
    markdownsSource: content
    markdownValue: |-
      #### Favorite MOC

      📚 [[Courses]]
      🪟 [[Work List|Work]]
      📝 [[Paper List|Papers]]

      📖 [Daily](obsidian://advanced-uri?vault=Work&daily=true)
      🗂 [Weekly](obsidian://advanced-uri?vault=Work&commandid=periodic-notes%253Aopen-weekly-note)

      🎨 [[Project A]]
      💥 [[Project B]]
  - id: 5e3fe8a2-207d-4ed1-ac2f-78810a944953
    type: dataview
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: 40
    query: |-
      dv.taskList(
          dv.pages('"04.Projects" or "05.Events" or "02.Notes" or "Courses"').flatMap(page => {
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
    maxHeight: 200
    dynamicParamComponents: []
    title: All Todo
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
      - id: c066e459-a232-4790-92f4-c1be0461e581
        type: dateProgress
        titleAlign: center
        tabTitle: ""
        maxWidthRatio: -1
        backgroundStyle: card
        showDateIndicator: true
        showProgressIndicator: true
        startDateTimeType: $specifiedDateTime
        endDateTimeType: $specifiedDateTime
        uiType: bar
        title: Life Loss
        startDateTime: 1995-01-01 00:00:00
        endDateTime: 2075-01-01 00:00:00
        backgroundColor: "#E4DFD963"
        fontColor: "#40352e"
    layoutType: column
layoutType: column

```

## All MOC

```dataview
table desc, creationDate, modificationDate
from #MOC 
sort lastReadDate desc
```

## CheckIn

```contributionWidget
id: bdd97067-6b1f-4abc-a9a4-2f3289ade5c9
type: multi
titleAlign: center
tabTitle: ""
maxWidthRatio: -1
backgroundStyle: none
widgets:
  - id: 755a13c4-e954-4eee-95f8-c291e4e476f5
    type: checkIn
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    cellShape: round
    backgroundStyle: card
    tasks:
      - id: 705420a6-9313-4840-b5ef-30fce370c266
        checkInRecordType: task
        tag: "#checkIn/review-notes"
        name: ""
    title: Review Notes
  - id: 69def9b5-6a6a-4d2e-bece-e1922b75a6f8
    type: checkIn
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    cellShape: round
    backgroundStyle: card
    tasks:
      - id: 44030cdd-93db-4050-b19c-0067dd291042
        checkInRecordType: task
        tag: "#checkIn/english"
        name: ""
    title: English
layoutType: column

```

## Statistics

```contributionWidget
id: a0638ecc-286a-41d2-be68-d21d2c695938
type: multi
titleAlign: center
tabTitle: ""
maxWidthRatio: -1
backgroundStyle: none
widgets:
  - id: 68917a3b-d45e-4f48-b12c-6a31e0e19da9
    type: chart
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    chartType: pie
    backgroundStyle: card
    maxHeight: 250
    labelProperty: tags
    labelFormat: $none
    valueProperty: $file_count
    filter:
      conditions: []
    chartColorSet: []
    chartLabelPosition: bottom
    title: Tags
layoutType: column

```

```contributionWidget
id: 44ad8397-d622-475b-b2b6-de2c1a182861
type: multi
titleAlign: center
tabTitle: ""
maxWidthRatio: -1
backgroundStyle: none
widgets:
  - id: 706bb7ec-95ca-4a37-8e7c-09304e40da8d
    type: chart
    titleAlign: center
    tabTitle: ""
    maxWidthRatio: -1
    chartType: line
    backgroundStyle: card
    maxHeight: 300
    labelProperty: modificationDate
    labelFormat: $toDate
    valueProperty: $file_count
    filter:
      conditions:
        - type: property
          value: <% tp.file.last_modified_date() %>
          operator: not_equals
          property: modificationDate
          id: fd205752-e80a-40b0-a6f3-05222ab165ee
    chartColorSet: []
    chartLabelPosition: top
    title: Modification
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
  fontColor: "#40352e"
cellStyle:
  borderRadius: ""
  minWidth: 4px

```
