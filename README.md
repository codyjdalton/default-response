# Default Response

Simple developer message module for use with RESTful APIs.

## Installation
```{r, engine='shell'}
npm install default-response --save
```

## Usage
```javascript
// include default response
var defaultResponse = require('default-response);

// set a status
console.log(defaultResponse.status(404));

/*
Returns:
{
  "status": "404",
  "message": "Not found",
  "developerMessage": "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
  "error": "ClientError"
}
*/
```