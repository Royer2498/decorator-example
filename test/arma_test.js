var expect = require('chai').expect;
import { Arco } from '../Arco';
import { Espada } from '../Espada';
import { DecoradorFuego } from '../DecoradorFuego';
import { DecoradorHierro } from '../DecoradorHierro';
import { DecoradorMadera } from '../DecoradorMadera';

describe('Test de Arma', function() {
    
   it('El poder de una un arco simple deberia ser 10', function() {
        let arco = new Arco();
        expect(arco.obtenerPoder()).eq(10);
    });

    it('El poder de una una espada simple deberia ser 15', function() {
        let espada = new Espada();
        expect(espada.obtenerPoder()).eq(15);
    });

    it('El poder de una una espada simple con poder de madera deberia ser 30', function() {
        let espada = new Espada();
        let decoradorMadera = new DecoradorMadera(espada);
        expect(decoradorMadera.obtenerPoder()).eq(30);
    });

    it('El poder de un arco simple con poder de madera,hierro y fuego deberia ser 40', function() {
        let arco = new Arco();
        let decoradorMadera = new DecoradorMadera(new DecoradorHierro(new DecoradorFuego(arco)));
        expect(decoradorMadera.obtenerPoder()).eq(40);
    });
});
