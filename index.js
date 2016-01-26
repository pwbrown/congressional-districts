var data = require('./data/data').data;
var states = require('./data/states').states;

var getDistricts = function(zip){
	//convert to string and trim spaces
	zip = zip.toString().trim();
	if(!data[zip]){
		return [];
	}else{
		return data[zip].districts;
	}
}

var confDist = function(zip, district){  //method to confirm if zip code is in a specific district
	zip = zip.toString().trim();
	district = district.toString().trim().parseInt().toString();
	if(!data[zip])
		return false;
	else if(data[zip].districts.indexOf(district) === -1)
		return false;
	else
		return true;
}

var getNumOfDistricts = function(state){
	state = state.trim().toLowerCase().replace(/ /g,'_');
	if(!states[state])
		return -1;
	else
		return states[state];
}

exports.getNumOfDistricts = getNumOfDistricts;
exports.getDistricts = getDistricts;
exports.confirm = confDist;