

export class DecoradorHierro{
    constructor(arma){
        this.arma = arma;
    }

    obtenerPoder(){
        return this.arma.obtenerPoder() + 10;
    }
}