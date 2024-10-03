export default class Heroi {

    constructor(nome, xp) {
        this._nome = nome;
        this._xp = xp;
    }


    get nome() {
        return this._nome;
    }

    get xp() {
        return this._xp;
    }
}