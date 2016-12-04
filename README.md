# yelpv3 (aka Yelp Fusion)

yelpv3 is a node module for accessing yelp's v3 API (renamed Yelp Fusion).
  - Inspired by https://github.com/olalonde/node-yelp and https://github.com/elbuo8/4square

## Installation
```javascript
npm install --save yelpv3
```

## Usage
View [yelp's guide](https://www.yelp.com/developers/documentation/v3/get_started) for how to obtain an app id and app secret

```javascript
var Yelp = require('yelpv3');

var yelp = new Yelp({
  app_id: '*******',
  app_secret: '*******'
});

// https://www.yelp.com/developers/documentation/v3/business_search
yelp.search({term: 'food', location: '90210', limit: 10})
.then(function (data) {
    console.log(data);
})
.catch(function (err) {
    console.error(err);
});

// https://www.yelp.com/developers/documentation/v3/business_search_phone
yelp.phoneSearch({phone: '+14159083801'})
.then(function (data) { console.log(data); })
.catch(function (err) { console.error(err);});

// https://www.yelp.com/developers/documentation/v3/transactions_search
yelp.transactionSearch('delivery', {location: 'Boston'})
.then(function (data) { console.log(data); })
.catch(function (err) { console.error(err);});

// https://www.yelp.com/developers/documentation/v3/business
yelp.business('yuko-kitchen-los-angeles')
.then(function (data) { console.log(data); })
.catch(function (err) { console.error(err);});

// https://www.yelp.com/developers/documentation/v3/business_reviews
yelp.reviews('yuko-kitchen-los-angeles')
.then(function (data) { console.log(data); })
.catch(function (err) { console.error(err);});

// https://www.yelp.com/developers/documentation/v3/autocomplete
yelp.autocomplete({text: 'Pizz', latitude: 40.71,longitude: 74.00})
.then(function (data) { console.log(data); })
.catch(function (err) { console.error(err);});
```
For additional information on parameter and response body data, check you the [yelp v3 documentation](https://www.yelp.com/developers/documentation/v3).

## License
MIT License

Copyright (c) 2016 Daniel Jin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
