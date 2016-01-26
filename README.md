# Congressional Districts
-------------------------
JavaScript helper methods to retrieve congressional district numbers and U.S. state using U.S. zip code

****Based on the 113th congressional districts
<a href="https://www.census.gov/geo/maps-data/data/cd_state.html" target="blank">Data Source</a>

## Add it

 1. $ npm install congressional-districts --save
 ```javascript
 var districts = require('congressional-districts');
```

## Methods

###Retrieve an array of all the district numbers from a specified zip code
```javascript
var zipcode = "12345";
//or
var zipcode = 12345;
var returnedDistricts = districts.getDistricts(zipcode);

//returnedDistricts is now an array of district strings(["1","3"]);

//***Note: will return an empty array if the zip code was not found;
```


###Confirm that a zipcode is part of a specified district
```javascript
var zipcode = 12345;
var district = 3;
var confirmed = districts.confirm(zipcode, district);

//this will return true if it is found, false if it isn't, and a -1 if the zip code was not found
```


###Retrieve the number of districts for a specified state
```javascript
var state = "North Carolina";  //syntax is not too important, as long as there is either a " " or "_" between words
var numberOfDistricts = districts.getNumOfDistricts(state);

//numberOfDistricts will now contain a number corresponding to the number of districts for the state inputted
```

**** The data for this pluggin is likely to change yearly if not more, so create an issue if it is out of date, and I will try and update if possible

