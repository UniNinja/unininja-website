---
id: introduction
title: Introduction
---

## What is UniNinja?
UniNinja is a service that allows prospective university students in the UK to find their ideal place of study. As a team we compile as much information about UK universities as possible to give young people the information they need. We also rely on other information from [UniStats](https://unistats.ac.uk) - the official provider of course data for universities and colleges.

## What is GraphQL?
[GraphQL](https://graphql.org) is a query language that allows you as the developer to receive data in exactly the way you request it. This works in a slightly different way to a REST API. We use GraphQL at UniNinja to speed up queries and utilise a modern technology! Here is an example. Consider that you might want to get information about a university (with some id `123456`), and the names of all courses that that university offers. In a REST API you would have to write multiple queries:

1. Get the university: `/<some API>/university?id=123456`
2. Get the courses the university offers: `/<some API>/courses?university=123456`

With GraphQL, we write queries in a hierarchical syntax that can get us what we need with a single query:

```graphql
{
  university(id: "123456") {
    name
    url
    courses {
      name
    }
  }
}
```

If you opt for a REST API, you'll have to get the data returned from your multiple queries and put it into a data structure. If you opt for GraphQL however, the data will be returned in exactly the format you requested it in! Taking our previous GraphQL example, we'd expect the GraphQL API to return:

```json
{
  "university" : {
    "name" : "University of Sussex",
    "url" : "https://sussex.ac.uk",
    "courses" : [
      {
        "name" : "Computer Science"
      },
      {
        "name" : "Mathematics"
      },
      {
        "name" : "Physics"
      }
    ]
  }
}
```
And so on! If you have never used GraphQL before, we recommend you [check out some tutorials on their website!](http://graphql.org/learn/)

## API Endpoint

The API is hosted at `https://api.uni.ninja/v0`
