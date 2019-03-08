class KMPreis {
    constructor(linie, km, preis) {
        this.linie = linie;
        this.sum_km = km;
        this.sum_preis = preis;
        this.preis_pro_km = preis / km;
    }
}

module.exports = KMPreis;