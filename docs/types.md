---
id: types
title: Types
---

## `University`
The `University` type represents a single [officially recognised university](https://www.gov.uk/check-a-university-is-officially-recognised/recognised-bodies) that someone can study a degree at.

### Fields

#### `name` : `String!`

The name of the university: e.g. *University of Sussex*

#### `sortableName` : `String!`

A sortable name for the university: e.g. *Aberystwyth, University of*

#### `pubukprn` : `String!`

[The Publication UK Provider Reference Number](https://www.hesa.ac.uk/collection/c16061/unistats_dataset_file_structure) for the university: e.g. *10007783*

#### `campuses` : [`[Campus]!`](#campus)

A list of campuses that belong to the university.

#### `uniType` : [`UniversityType`](enums.html#universitytype)

The type of university that this institution is.

#### `unionUrl` : `String`

The URL for this university's student union.

#### `url` : `String`

The URL for this university.

#### `color` : `String`

The dominant colour of this university's logo. In the format: *rgb(x,y,z)*

#### `courses` : [`[Course]`](#course)

A list of courses that this university offers.

## `Campus`
Represents a university campus.
### Fields
#### `name` : `String`
The name of the campus. For universities with only one campus, the campus generally doesn't have a name.

#### `location` : [`Location!`](#location)
The physical location of the campus.

#### `locationType` : [`LocationType`](enums.html#locationtype)
The type of location the campus is in.

#### `nearestTrainStation` : [`TrainStation`](#trainstation)
The nearest train station to this campus.

#### `averageRent` : `Float`
The average rent in student accommodation near this campus.

## `Course`
Represents a university course.

#### `title` : `String!`
The title of the course, e.g. *MComp (Hons) Computer Science*.

#### `kiscourseid` : `String!`
The [KISCOURSEID](https://www.hesa.ac.uk/collection/c16061/a/kiscourseid) of the course.

#### `isFullTime` : [`FullTime`](enums.html#fulltime)
Indicates whether this course is full time or part time.

#### `courseURL` : `String`
A web page supplied by the university that gives more information about this course.

#### `years` : `Int`
The number of years the course takes to complete.

#### `placementYearAvailable` : `Boolean`
True if this course allows a placement year, false otherwise.

#### `yearAbroadAvailable` : `Boolean`
True if this course allows a year abroad, false otherwise.

#### `degreeLabel` : `String`
The label for this degree, i.e. *BA*, *BSc* etc.

#### `isHons` : `Boolean`
True if this degree is *with honours*, false otherwise.

## `Location`
Encapsulates a physical location.

### Fields
#### `lat` : `Float!`
The latitude of this physical location.
#### `lon` : `Float!`
The longitude of this physical location.

## `TrainStation`
Represents a train station that is close to a university campus.

### Fields
#### `name` : `String!`
The name of this train station

#### `code` : `String`
The [train station code](http://www.nationalrail.co.uk/stations_destinations/48541.aspx) for this train station.

#### `location` : [`Location!`](#location)
The physical location of this train station.

#### `distance` : `Float!`
The distance in miles between this train station and its parent `Campus`.
