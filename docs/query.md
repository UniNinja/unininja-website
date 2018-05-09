---
id: query
title: Query
---

## `universities` : [`[University]`](types.html#university)
Returns a list of all universities

## `courses` : [`[Course]`](types.html#course)
Returns a list of all courses for a particular university.

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `pubukprn` | `String!` | Required. The [Public UK Provider Reference Number](https://www.hesa.ac.uk/collection/c16061/unistats_dataset_file_structure) of the university whose courses you wish to list. |

## `course` : [`Course`](types.html#course)
Returns data for a particular course.

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `pubukprn` | `String!` | Required. The [Public UK Provider Reference Number](https://www.hesa.ac.uk/collection/c16061/unistats_dataset_file_structure) of the university that offers this course. |
| `kiscourseid` | `String!` | The [KISCOURSEID](https://www.hesa.ac.uk/collection/c16061/a/kiscourseid) of this course. |
| `isFullTime` | [`FullTime!`](enums.html#fulltime) | Request either the full time course or the part time course if it exists. |

## `university` : [`University`](types.html#university)
Returns data for a particular university.

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `pubukprn` | `String!` | Required. The [Public UK Provider Reference Number](https://www.hesa.ac.uk/collection/c16061/unistats_dataset_file_structure) of the university. |
