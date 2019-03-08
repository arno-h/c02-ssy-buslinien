class Ticket {
    constructor(linie, einstieg, ausstieg, km, preis) {
        this.linie = linie;
        this.einstieg= einstieg;
        this.ausstieg = ausstieg;
        this.km = km;
        this.preis = preis;
    }
}

module.exports = Ticket;