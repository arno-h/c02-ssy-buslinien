const express = require('express');
const database = require('../src/database');
const Ticket = require('../src/Ticket');

const router = express.Router();

/* INPUT:
    { "start": "Sabinenweg",
      "ende": "Alexanderplatz",
      "km": 3,
      "preis": 3.5,
      "betrieb": "Gelbe-Linie"
    }
   OUTPUT:
   Ticket + ID
*/

module.exports = router;
