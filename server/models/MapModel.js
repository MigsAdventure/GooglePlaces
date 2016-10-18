// const axios = require('axios');
const { get } = require('axios');
require('dotenv').load();
const connection = require('../config/db');
const squel = require('squel').useFlavour('mysql');

require('dotenv').load();

 const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_API_KEY
  })




exports.searchPlaces = (search, cb) => {
  get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search.place}&key=${process.env.GOOGLE_API_KEY}`)
  .then((res) => {
    let placeInfo = {};
    let lat = res.data.results[0].geometry.location.lat;
    let lng = res.data.results[0].geometry.location.lng;
    googleMapsClient.places({
    query: search.category,
    location: [lat,lng]
   
    }, function(err, response) {
      if(!err) {
        console.log(JSON.stringify(response.json.results, null, 2));
           cb(null,response.json.results);
      }
  }) 
 
  })
  .catch(err => {
    console.log('ERROR:', err)
  })
};
