export default class Client{
    constructor(nombre,impuesto =null){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre(){
       return this._nombre; 
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    calcularImpuesto(){
     return (this._impuesto.monto_bruto_anual - this._impuesto.deducciones)*21/100 
    }
}