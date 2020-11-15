---
name: postman
title: Postman
subtitle: vaguely hipster title
description: >
  TBA
# Be sure to uncomment and fill this out!
speaker: Sayan Chaudhry
---

# Postman Fundamentals

While RESTful APIs can be very powerful and are extremely useful, dealing with them can come with a lot of pain points. API keys, different URLs, request parameters, just to name a few. In Postman Fundamentals, you'll learn how using an API client like Postman can make life easier while dealing with APIs. Millions of developers across the world use Postman to create requests and design, document, and test APIs.

We'll start with a brief overview of RESTful APIs and the API-first world and then talk about how using collections and variables in Postman can improve your interactions with RESTful APIs.

## What To Bring

Bring a computer with the [Postman API Client](https://www.getpostman.com/apps) installed. We'll also have some time at the beginning of the talk to download the client.

This talks is most useful when you have some experience building or using RESTful APIs (i.e. `GET`, `POST`, etc. requests) so you can see exactly which parts of the puzzle Postman can help with.

## Snippets


### Milestone 0
[Download the API Client](https://www.getpostman.com/apps)

### Milestone 1
cURL: Google
```
curl --X GET 'https://www.google.com/' >> get_google.html
open get_google.html
```

Postman: Google
```
GET https://www.google.com/
```

Documentation: OpenWeatherMap Current Weather Data API
```
https://openweathermap.org/current
```

Postman: OpenWeatherMap
```
GET https://api.openweathermap.org/data/2.5/weather?APPID=bdccc7424e97e0977392a147f3dee1a7&q=Pittsburgh
```

cURL: OpenWeatherMap
```
curl -X GET 'https://api.openweathermap.org/data/2.5/weather?APPID=bdccc7424e97e0977392a147f3dee1a7&q=Pittsburgh'
```

### Milestone 2
Documentation: Restful-booker
```
https://restful-booker.herokuapp.com/apidoc/index.html
```

Postman: Get All Bookings
```
GET https://restful-booker.herokuapp.com/booking
```

Postman: Create a Booking
```
POST https://restful-booker.herokuapp.com/booking
```

Booking Information (Body → Raw → JSON)
```
{
    "firstname": "John",
    "lastname": "Appleseed",
    "totalprice": 15151,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2019-10-25",
        "checkout": "2019-10-26"
    }
}
```

Postman: Delete a Booking
```
DELETE https://restful-booker.herokuapp.com/booking/0
```

Postman: Authorization
```
POST https://restful-booker.herokuapp.com/auth
```

Credentials (Body → Raw → JSON)
```
{
    "username" : "admin",
    "password" : "password123"
}
```

Postman: Delete a Booking (successfully!)
```
DELETE https://restful-booker.herokuapp.com/booking/0
```

Authorization (Header)
```
{
    "cookie" : "token={{token}}"
}
```

### Milestone 3
Postman: Get all Bookings Test
```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
```

## Resources

- [Presentation](https://docs.google.com/presentation/d/1ClI_hVIgkhMDkICGJ89NquvkY6G2_pszYww-wbRBfVU/edit?usp=sharing)

Background on Backend Frameworks

1. [Flask]({{ site.baseurl }}/backend)
1. [Node.js]({{ site.baseurl }}/rest)

Additional Postman Material

1. [Postman Learning Center](https://learning.getpostman.com/?_ga=2.57911018.1705501146.1571981022-746283426.1567962465)

