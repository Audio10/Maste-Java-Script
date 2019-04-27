class billete {
  constructor (v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}

var caja = [];
caja.push(new billete(100, 5));
caja.push(new billete(50, 10));
caja.push(new billete(20, 5));
caja.push(new billete(10, 10));
caja.push(new billete(5, 5));

var dinero = 120;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", get);

function get() {
  caja.forEach( (billete)=>{
    console.log(billete);
  });

}
