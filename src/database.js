const Loki = require('lokijs');
const Ticket = require('./Ticket');
const KMPreis = require('./KMPreis');
const Haltestellen = require('./Haltestellen');

const db = new Loki('bus.json');
const tickets = db.addCollection('tickets');
const kmpreis = db.addCollection('kmpreis');
const haltestellen = db.addCollection('haltestellen');

tickets.insert(new Ticket('Gelbe-Linie', 'Joseffi-Straße', 'Anna-Platz', 3, 5.25));
tickets.insert(new Ticket('Gelbe-Linie', 'Joseffi-Straße', 'Berta-Gasse', 1.5, 2.5));
tickets.insert(new Ticket('Gelbe-Linie', 'Anna-Platz', 'Bernd-Weg', 2.5, 3.5));
tickets.insert(new Ticket('Gelbe-Linie', 'Anna-Platz', 'Markus-Steig', 4.5, 7.25));
tickets.insert(new Ticket('Rote-Linie', 'Hugo-Straße', 'Anna-Platz', 3, 5.25));
tickets.insert(new Ticket('Rote-Linie', 'Anna-Platz', 'Berta-Gasse', 1.5, 2.0));
tickets.insert(new Ticket('Rote-Linie', 'Hugo-Straße', 'Bernd-Weg', 2.5, 3.75));
tickets.insert(new Ticket('Rote-Linie', 'Anna-Platz', 'Markus-Steig', 4.5, 6.75));

kmpreis.insert(new KMPreis('Blaue-Linie', 347.13, 487.25));

haltestellen.insert(new Haltestellen('Orange-Linie', {'Frieda-Gasse': 17, 'Emil-Allee': 3}));

module.exports = db;