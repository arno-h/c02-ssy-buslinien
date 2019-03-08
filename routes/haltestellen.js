const express = require('express');
const database = require('../src/database');
const Haltestellen = require('../src/Haltestellen');

const router = express.Router();

/* INPUT:
    { "start": "Jürgenhain",
      "ende": "Dorissteg",
      "betrieb": "Gelbe-Linie"
    }
   OUTPUT:
   Update von Haltestellen
*/

module.exports = router;
