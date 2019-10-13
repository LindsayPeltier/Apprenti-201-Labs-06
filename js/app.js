'use strict';
//global variables
var storeHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//object literals
var seattle = {
  location: 'Seattle',
  minCustomerHr: 23,
  maxCustomerHr: 65,
  avgCookieCust: 6.3,
  randomCustomerHr() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr) + this.minCustomerHr)
  },
  estimatedCookiesHr() {
    var result = [];
    for (var i = 0; i < storeHours.length; i++){
      result.push(Math.floor(this.randomCustomerHr() * this.avgCookieCust));
    }
  return result;
  },
  totalDailyCookies() {
    var cookieSum = 0;
    for (var i = 0; i < storeHours.length; i++){
      cookieSum += this.estimatedCookiesHr()[i];
    }
    return cookieSum;
  },
  render() {
    var section = document.getElementById('sales_list');
    var ul = document.createElement('ul');
    ul.textContent = `${this.location}`;
    section.appendChild(ul);
    for (var i = 0; i <= storeHours.length -1; i++){
      var li = document.createElement('li');
      li.textContent = `${storeHours[i]}: ${this.estimatedCookiesHr()[i]} cookies`;
      ul.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.cookieSum()} cookies`;
    ul.appendChild(li);
  },
};

var tokyo = {
  location: 'Tokyo',
  minCustomerHr: 3,
  maxCustomerHr: 24,
  avgCookieCust: 1.2,
  randomCustomerHr() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr) + this.minCustomerHr)
  },
  estimatedCookiesHr() {
    var result = [];
    for (var i = 0; i < storeHours.length; i++){
      result.push(Math.floor(this.randomCustomerHr() * this.avgCookieCust));
    }
  return result;
  },
  totalDailyCookies() {
    var cookieSum = 0;
    for (var i = 0; i < storeHours.length; i++){
      cookieSum += this.estimatedCookiesHr()[i];
    }
    return cookieSum;
  },
  render() {
    var section = document.getElementById('sales_list');
    var ul = document.createElement('ul');
  ul.textContent = `${this.location}`;
  section.appendChild(ul);
    for (var i = 0; i <= storeHours.length -1; i++){
      var li = document.createElement('li');
      li.textContent = `${storeHours[i]}: ${this.estimatedCookiesHr()[i]} cookies`;
      ul.appendChild(li);
    }
  li = document.createElement('li');
  li.textContent = `Total: ${this.cookieSum()} cookies`;
  ul.appendChild(li);
  },
};

var dubai = {
  location: 'Dubai',
  minCustomerHr: 11,
  maxCustomerHr: 38,
  avgCookieCust: 3.7,
  randomCustomerHr() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr) + this.minCustomerHr)
  },
  estimatedCookiesHr() {
    var result = [];
    for (var i = 0; i < storeHours.length; i++){
      result.push(Math.floor(this.randomCustomerHr() * this.avgCookieCust));
    }
  return result;
  },
  totalDailyCookies() {
    var cookieSum = 0;
    for (var i = 0; i < storeHours.length; i++){
      cookieSum += this.estimatedCookiesHr()[i];
    }
    return cookieSum;
  },
  render() {
    var section = document.getElementById('sales_list');
    var ul = document.createElement('ul');
  ul.textContent = `${this.location}`;
  section.appendChild(ul);
    for (var i = 0; i <= storeHours.length -1; i++){
      var li = document.createElement('li');
      li.textContent = `${storeHours[i]}: ${this.estimatedCookiesHr()[i]} cookies`;
      ul.appendChild(li);
    }
  li = document.createElement('li');
  li.textContent = `Total: ${this.cookieSum()} cookies`;
  ul.appendChild(li);
  },
};

var paris = {
  location: 'Paris',
  minCustomerHr: 20,
  maxCustomerHr: 38,
  avgCookieCust: 2.3,
  randomCustomerHr() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr) + this.minCustomerHr)
  },
  estimatedCookiesHr() {
    var result = [];
    for (var i = 0; i < storeHours.length; i++){
      result.push(Math.floor(this.randomCustomerHr() * this.avgCookieCust));
    }
  return result;
  },
  totalDailyCookies() {
    var cookieSum = 0;
    for (var i = 0; i < storeHours.length; i++){
      cookieSum += this.estimatedCookiesHr()[i];
    }
    return cookieSum;
  },
  render() {
    var section = document.getElementById('sales_list');
    var ul = document.createElement('ul');
  ul.textContent = `${this.location}`;
  section.appendChild(ul);
    for (var i = 0; i <= storeHours.length -1; i++){
      var li = document.createElement('li');
      li.textContent = `${storeHours[i]}: ${this.estimatedCookiesHr()[i]} cookies`;
      ul.appendChild(li);
    }
  li = document.createElement('li');
  li.textContent = `Total: ${this.cookieSum()} cookies`;
  ul.appendChild(li);
  },
};

var lima = {
  location: 'Lima',
  minCustomerHr: 2,
  maxCustomerHr: 16,
  avgCookieCust: 4.6,
  randomCustomerHr() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr) + this.minCustomerHr)
  },
  estimatedCookiesHr() {
    var result = [];
    for (var i = 0; i < storeHours.length; i++){
      result.push(Math.floor(this.randomCustomerHr() * this.avgCookieCust));
    }
  return result;
  },
  totalDailyCookies() {
    var cookieSum = 0;
    for (var i = 0; i < storeHours.length; i++){
      cookieSum += this.estimatedCookiesHr()[i];
    }
  return cookieSum;
  },
  render() {
    var section = document.getElementById('sales_list');
    var ul = document.createElement('ul');
  ul.textContent = `${this.location}`;
  section.appendChild(ul);
    for (var i = 0; i <= storeHours.length -1; i++){
      var li = document.createElement('li');
      li.textContent = `${storeHours[i]}: ${this.estimatedCookiesHr()[i]} cookies`;
      ul.appendChild(li);
    }
  li = document.createElement('li');
  li.textContent = `Total: ${this.cookieSum()} cookies`;
  ul.appendChild(li);
  },
};

(function display() {
  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();
})();
