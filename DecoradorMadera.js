

export class DecoradorMadera{
    constructor(arma){
        this.arma = arma;
    }

    obtenerPoder(){
        return this.arma.obtenerPoder() + 15;
    }
}