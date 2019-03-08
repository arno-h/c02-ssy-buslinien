Einfache Demo-Applikation für NodeJS/Express
============================================

Verzeichnisse & Dateien
-----------------------

* bin/www ... Starten des Webservers, Error-Handling
* routes/ ... Hier stehen die einzelnen Controller
* src/ ... Datenmodell und Geschäftslogik
* app.js ... Definition & Setup der Express-Applikation
* package.json ... Welche Bibliotheken sonst eingebunden werden sollen

Aufgaben:
---------

1) Erstellen Sie ein Ticket-Service (Route: /tickets),
welche alle Fahrten in einer Datenbank speichert.
Die üblichen Routen sollen enthalten sein, also:
   * `POST /tickets` für neue Tickets,
   * `GET /tickets`, um sich alle Tickets anzusehen, und
   * `GET /tickets/5`, um sich ein einzelnes Ticket anzusehen.

2) Erstellen Sie ein Preis-Kilometer-Service (Route: /kmpreis),
welches sich **je Betreiber** die in *Summe*
gefahrenen KM, den in *Summe* bezahlten Preis und den
daraus resultierenden Preis/km enthält. Die üblichen Routen
sollen enthalten sein, also:
   * `POST /kmpreis` wenn neue Tickets kommen, soll die Information
      zur zugehörigen Linie **aktualisiert** werden. Es gibt in der
      Datenbank also maximal so viele Einträge, wie es Linien gibt.
   * `GET /kmpreis`, um sich alle Einträge anzusehen, und
   * `GET /kmpreis/Gelbe-Linie`, um sich einzelne Einträge anzusehen.

3) Erstellen Sie ein Haltestellen-Service (Route: /haltestellen),
welches sich **je Betreiber** speichert, wie oft welche Haltestellen
angefahren worden sind (also Start- bzw. Endpunkt eines Tickets waren).
Die üblichen Routen sollen enthalten sein, also:
   * `POST /haltestellen` wenn neue Tickets kommen, soll die Information
      zur zugehörigen Linie **aktualisiert** werden. Es gibt in der
      Datenbank also maximal so viele Einträge, wie es Linien gibt.
   * `GET /haltestellen`, um sich alle Einträge anzusehen, und
   * `GET /haltestellen/Blaue-Linie`, um sich einzelne Einträge anzusehen.

4) Pub/Sub: Erstellen Sie einen neuen Endpunkt (Route: /fahrt),
der eingehende Nachrichten an mehrere Services verteilen kann.
Tragen Sie als Subscriber die vorangegangenen Services ein.
   * für 50%: Pub/Sub-Antwort bei eingehender Nachricht ist einfach `true`
   * für 100%: Pub/Sub-Antwort bei eingehender Nachricht ist Array
     aller Antwort-Nachrichten.

5) Partitionierung: die Ticket-Datenbank soll (wegen des hohen Verkehrsaufkommens)
nach Linie partitioniert werden. Erstellen Sie folgende Services: für jede Linie
soll eine eigene Datenbank angelegt werden und eine eigene Route. Vorbereitungen
dazu finden Sie schon vor. Die Routen sind z.B. `/linientickets/Gelbe-Linie`.
Es soll die selbe Funktionalität wie beim Service aus Aufgabe 1 unterstützt werden.

6) Router für Partitionierung: Schreiben Sie ein Service (Route: /ticketrouter)
welches eingehende Tickets abhängig vom Betreiber an spezifische Routen
weiterleitet, z.B. die Nachricht `{ "betrieb": "Gelbe-Linie", ...}` and die
Route `/linientickets/Gelbe-Linie`. Das Router soll die Antwort des Services
(Status + Body) retournieren. Folgende Methoden sollen unterstützt werden:
   * `POST /` ... legt neues Ticket an
   * `GET /Gelbe-Linie/`  ... liefert alle Daten zur Gelben Linie
   * `GET /Gelbe-Linie/3` ... liefert Daten zum 3. Ticket der Gelben Linie
