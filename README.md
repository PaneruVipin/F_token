# dynamic-token
To make a secure and sensitive API request with a dynamic token, you need to ensure that the request is originating from your app. This is necessary because many proxy browsers do not support cross-origin requests, and apps like Postman do not have an origin. To achieve this, you can use a dynamic token feature when the anyone accesses a sensitive feature like login ,signup or verfiyOTP etc.\
.
> __Note__: A dynamic token is not a user authentication token like a JWT. Rather, it is an app/web/origin authentication token. For example, a JWT validates that a user is logged in, and a JWT token is reusable. However, a dynamic token validates that the request is originating from your app/web/origin and is not reusable. Each time a dynamic token is generated, it is unique and valid only for that specific request. The token cannot be used for any other requests.


## Getting Started
```javascript
npm install dynamic-token
```

### Usage
GENERATE TOKEN AND API CALLING IN FRONTEND 
```
import { generateToken } from "dynamic-token"
import axios from "axios"

cpnst login = async( ) => {
  await axios.post(`${baseUrl}/login`, 
  { username: "vipin", password: "vipin" },
  { headers:{
     dt: generateToken("334444784884")  // Note that the secret code must only contain numbers,                                      
  })                                    // and its minimum and maximum lengths must be 9 and 12 digits respectively. 
}                                       // The code cannot contain the digit '0'
```
> __Note__: To achieve better performance, consider using the generateToken function. There is no time difference between calling the API and using the generateToken function, as shown in the following example;
