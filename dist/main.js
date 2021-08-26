"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestoDesafio = new _impuestos["default"](20000, 4000);
var clienteDesafio = new _cliente["default"]("Tomas", impuestoDesafio); // console.log(clienteDesafio)

console.log(" EL impuesto a pagar es: ".concat(clienteDesafio.calcularImpuesto()));