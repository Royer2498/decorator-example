

export class DecoradorFuego{
    constructor(arma){
        this.arma = arma;
    }

    obtenerPoder(){
        return this.arma.obtenerPoder() + 5;
    }
}