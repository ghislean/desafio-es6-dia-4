import Tax from "./impuestos.js"
import Cliente from "./cliente.js"

let impuestoDesafio = new Tax(20000,4000)
let clienteDesafio = new Cliente("Tomas",impuestoDesafio)
// console.log(clienteDesafio)

console.log(` EL impuesto a pagar es: ${clienteDesafio.calcularImpuesto()}`)



