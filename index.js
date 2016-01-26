var data = require('./data/data').data;

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

exports.getDistricts = getDistricts;
exports.confirm = confDist;