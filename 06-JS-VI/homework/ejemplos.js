const { resetTask } = require("simple-git/src/lib/tasks/reset");

function decirHolaAlUsuario88(usuario) {
    return "hola " + usuario + "!";
}

function decirAdiosAlUsuario(usuario) {
    return "Adios " + usuario + "!";

}

console.log(decirHolaAlUsuario)("Jose")// Hola Jose!
// var Hola Jose = decirHolaAlUsuario("jose")
//console.log(holaJose)

//otro ejemplo
function multiplicadorMaximo(num1,num2,multiplicador,cb) {
    return cb(num1,num2) * multiplicador
}


function suma2 (num1, num2) {
    return num1 + num2
}

console.log(multiplicadorMaximo(5,10,3,suma2))

//otro ejemplo
function resta(num1, num2) {
     return num1 - num2
}

function suma(num1,num2) {
    return num1 + num2
}

function multiplicacion(num1,num2) {
    return num1 * num2
}

function division(num1,num2) {
    return num1 / num2
}

function miCalculadora(num1, num2,cb) {
    return "Su resultado es " + cb(num1,num2)
}
console.log(mimiCalculadora(4,8,suma))
console.log(miCalculadora(4,8,division))







