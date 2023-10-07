/*Utilizando un FOR mostrar en consola desde 800 a 100, con un decremento de 50 en 50. No mostrar los números 500 y 400.*/

var inicio = 800;
var fin = 100;

for (inicio; inicio >= fin; inicio -= 50) {
    if ((inicio != 500 && inicio != 400)) {
        console.log((inicio + '\n'));
    }
}