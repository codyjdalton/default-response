[![Build Status](https://travis-ci.org/codyjdalton/default-response.svg?branch=master)](https://travis-ci.org/codyjdalton/default-response) [![Coverage Status](https://coveralls.io/repos/github/codyjdalton/default-response/badge.svg?branch=master)](https://coveralls.io/github/codyjdalton/default-response?branch=master) [![npm version](https://badge.fury.io/js/default-response.svg)](https://badge.fury.io/js/default-response)

# Default Response

Simple API "default message" module for use with RESTful APIs.

## Installation
```{r, engine='shell'}
$ npm i default-response
```

## Basic Usage

Include the dependency and call response.status(code):

```javascript
// include default response
const response = require('default-response');

// set a status
console.log(response.status(404));
```
Logs:
```json
{
  "status": 404,
  "message": "Not found",
  "developerMessage": "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
  "error": "ClientError"
}
```
And many, many more...

## Custom Developer Messages
```javascript
// include default response
const response = require('default-response');

// set a status
console.log(
  response.statusMessage(
    401, 
    "You do not have permission to access the users resource."
  )
);
```
Logs:
```json
{
  "status": 401,
  "message": "Unauthorized",
  "developerMessage": "You do not have permission to access the users resource.",
  "error": "ClientError"
}
```