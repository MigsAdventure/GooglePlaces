const express = require('express');
const router = express.Router();
const MapModel = require('../models/MapModel');

router.route('/search')
  .get((req, res) => {
    let search = req.query;
    MapModel.searchPlaces(search, (err, place) => {
      res.status(err ? 400 : 200).send(err || place);
    });
  });

module.exports = router;
