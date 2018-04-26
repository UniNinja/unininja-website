---
id: authorisation
title: Authorisation
---
## HTTP Basic Authorisation
The UniNinja API uses HTTP Basic authorisation. Firstly, you must [obtain an access token](#obtaining-an-access-token). You should make sure that your access token stays secret. When making requests to the API, you should include an `Authorization:` header in your HTTP requests. The `Authorization` header should contain the access token and any password in the form `<access token>:<password>`. This string should then be Base 64 encoded and prepended with the text `Basic `. An example request in `curl` would be:

```bash
curl -H "Authorization: Basic <base64 encoded token>" https://api.uni.ninja/v0
```

## Obtaining an Access Token
At this current moment in time, an access token can only be obtained by emailing us at [developers@uni.ninja](mailto:developers@uni.ninja). Just let us know a bit about you and why you want to use the UniNinja API and we'll be happy to send you an access token.
