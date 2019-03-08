const express = require('express');
const database = require('../src/database');
const KMPreis = require('../src/KMPreis');

const router = express.Router();

/* INPUT:
    { "km": 3,
      "preis": 3.5,
      "betrieb": "Gelbe-Linie"
    }
   OUTPUT:
   Update von KMPreis
*/

module.exports = router;
