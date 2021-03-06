"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Client = /*#__PURE__*/function () {
  function Client(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Client);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Client, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nombre) {
      this._nombre = nombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 21 / 100;
    }
  }]);

  return Client;
}();

exports["default"] = Client;