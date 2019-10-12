'use strict';
//global variable
var storeHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//object literals
var seattle = {
  location: 'Seattle',
  minCustomerHr: 23,
  maxCustomerHr: 65,
  avgCookieCust: 6.3,
  randomCustomerHr: function(min, max) {
    min = Math.ceil(this.minCustomerHr);
    max = Math.floor(this.maxCustomerHr); 
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
};
console.log(randomCustomerHr);

var tokyo = {
  location: 'Tokyo',
  minCustomerHr: 3,
  maxCustomerHr: 24,
  avgCookieCust: 1.2,
};

var dubai = {
  location: 'Dubai',
  minCustomerHr: 11,
  maxCustomerHr: 38,
  avgCookieCust: 3.7,
};

var paris = {
  location: 'Paris',
  minCustomerHr: 20,
  maxCustomerHr: 38,
  avgCookieCust: 2.3,
};

var lima = {
  location: 'Lima',
  minCustomerHr: 2,
  maxCustomerHr: 16,
  avgCookieCust: 4.6,
};

