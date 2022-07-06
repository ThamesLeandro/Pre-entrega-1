let amd = 0;
let intel = 0;
let rx = 0;
let rtx = 0;
let tecl = 0;
let mouse = 0;
let total = 0;
let preamd = 25000;
let preintel = 30000;
let prerx = 80000;
let prertx = 100000;
let pretecl = 7000;
let premouse = 3000;
const sumar = (a, b) => a + b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;
const iva = (a) => a * 0.21;
let cantidadProd = 0;
let nav;
let nombre = prompt("Ingrese su nombre:");
alert(`${nombre} te damos la bienvenida a Espacio Gamer`);
do {
  let elegirProd;
  let unidades;
  nav = parseInt(
    prompt(
      `${nombre} en que te podemos ayudar\n1-Agregar componentes al carrito\n2-Ver el carrito y teminar la compra\n3-Ingresar componente\n4-Filtrar\n5-Salir`
    )
  );
  switch (nav) {
    case 1:
      while (elegirProd != 7) {
        elegirProd = parseInt(
          prompt(
            `Que componentes agregamos al carrito\n====================================\n1-AMD Ryzen 5600x $25000\n2-Intel Core i7-9700-k\n3-RX 6700 $80000\n4-RTX 3060 $100000\n5-Mouse Logitech g-502\n6-Teclado Hyperx Alloy FPS\n7-Salir`
          )
        );
        switch (elegirProd) {
          case 1:
            unidades = parseInt(
              prompt("Cuantos procesadores AMD quiere agregar al carrito")
            );
            amd = sumar(amd, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, preamd));
            break;
          case 2:
            unidades = parseInt(
              prompt("Cuantos procesadores Intel quiere agregar al carrito")
            );
            intel = sumar(intel, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, preintel));
            break;
          case 3:
            unidades = parseInt(
              prompt("Cuantas RX 6700 quiere agregar al carrito")
            );
            rx = sumar(rx, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, prerx));
            break;
          case 4:
            unidades = parseInt(
              prompt("Cuantas RTX 3060 quiere agregar al carrito")
            );
            rtx = sumar(rtx, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, prertx));
            break;
          case 5:
            unidades = parseInt(
              prompt("Cuantos G-502 quiere agregar al carrito")
            );
            mouse = sumar(mouse, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, premouse));
            break;
          case 6:
            unidades = parseInt(
              prompt("Cuantos Hyperx Alloys FPS quiere agregar al carrito")
            );
            tecl = sumar(tecl, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, pretecl));
            break;
          default:
            break;
        }
      }
      break;
    case 2:
      while (elegirProd != 1) {
        elegirProd = parseInt(
          prompt(
            `El precio total de los componentes es:$${total}\n====================================\n1-Seguir Comprando\n2-Finalizar compra`
          )
        );
        switch (elegirProd) {
          case 2:
            unidades = parseInt(
              prompt(
                `Usted esta llevando ${cantidadProd} de componentes por $${total}
                \nAMD Ryzen x ${amd}:$${multi(amd, preamd)}
                \nIntel Core i7 x ${intel}: $${multi(intel, preintel)}
                \nRX 6700 x ${rx}: $${multi(rx, prerx)}
                \nRTX 3060 x ${rtx}: $${multi(rtx, prertx)}
                \nMouse G-502 x ${mouse}: $${multi(mouse, premouse)}
                \nTeclado Hyperx x ${tecl}: $${multi(tecl, pretecl)}
                \niva: $${iva(total).toFixed(2)}
                \nTotal con iva $${sumar(total, iva(total)).toFixed(2)}
                \nPresione:\n1-Realizar la compra en un pago
                \n2-Realizar la compra en 6 cuotas con 10% de interes
                \n3-Realizar la compra en 12 cuotas con 25% de interes`
              )
            );
            switch (unidades) {
              case 1:
                alert(
                  `Su total es de $${sumar(total, iva(total)).toFixed(
                    2
                  )} gracias por confiar en nosotros ${nombre}\n
⣿⣿⣿⣿⣿⣿⣿⡿⡛⠟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠿⠨⡀⠄⠄⡘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠿⢁⠼⠊⣱⡃⠄⠈⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡿⠛⡧⠁⡴⣦⣔⣶⣄⢠⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣤⠭⠏⠙⢿⣿⣿⣿⣿⣿
⣿⡧⠠⠠⢠⣾⣾⣟⠝⠉⠉⠻⡒⡂⠄⠙⠻⣿⣿⣿⣿⣿⡪⠘⠄⠉⡄⢹⣿⣿⣿⣿
⣿⠃⠁⢐⣷⠉⠿⠐⠑⠠⠠⠄⣈⣿⣄⣱⣠⢻⣿⣿⣿⣿⣯⠷⠈⠉⢀⣾⣿⣿⣿⣿
⣿⣴⠤⣬⣭⣴⠂⠇⡔⠚⠍⠄⠄⠁⠘⢿⣷⢈⣿⣿⣿⣿⡧⠂⣠⠄⠸⡜⡿⣿⣿⣿
⣿⣇⠄⡙⣿⣷⣭⣷⠃⣠⠄⠄⡄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣧⣁⣿⡄⠼⡿⣦⣬⣰⣿
⣿⣷⣥⣴⣿⣿⣿⣿⠷⠲⠄⢠⠄⡆⠄⠄⠄⡨⢿⣿⣿⣿⣿⣿⣎⠐⠄⠈⣙⣩⣿⣿
⣿⣿⣿⣿⣿⣿⢟⠕⠁⠈⢠⢃⢸⣿⣿⣶⡘⠑⠄⠸⣿⣿⣿⣿⣿⣦⡀⡉⢿⣧⣿⣿
⣿⣿⣿⣿⡿⠋⠄⠄⢀⠄⠐⢩⣿⣿⣿⣿⣦⡀⠄⠄⠉⠿⣿⣿⣿⣿⣿⣷⣨⣿⣿⣿
⣿⣿⣿⡟⠄⠄⠄⠄⠄⠋⢀⣼⣿⣿⣿⣿⣿⣿⣿⣶⣦⣀⢟⣻⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡆⠆⠄⠠⡀⡀⠄⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡿⡅⠄⠄⢀⡰⠂⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`
                );
                nav = 4;
                break;
              case 2:
                alert(`Su total es de 6 cuotas de $${div(
                  sumar(total, sumar(iva(total), multi(total, 0.1))),
                  6
                ).toFixed(2)} gracias por confiar en nosotros ${nombre}\n
  ⣿⣿⣿⣿⣿⣿⣿⡿⡛⠟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⠿⠨⡀⠄⠄⡘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⠿⢁⠼⠊⣱⡃⠄⠈⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⡿⠛⡧⠁⡴⣦⣔⣶⣄⢠⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣤⠭⠏⠙⢿⣿⣿⣿⣿⣿
  ⣿⡧⠠⠠⢠⣾⣾⣟⠝⠉⠉⠻⡒⡂⠄⠙⠻⣿⣿⣿⣿⣿⡪⠘⠄⠉⡄⢹⣿⣿⣿⣿
  ⣿⠃⠁⢐⣷⠉⠿⠐⠑⠠⠠⠄⣈⣿⣄⣱⣠⢻⣿⣿⣿⣿⣯⠷⠈⠉⢀⣾⣿⣿⣿⣿
  ⣿⣴⠤⣬⣭⣴⠂⠇⡔⠚⠍⠄⠄⠁⠘⢿⣷⢈⣿⣿⣿⣿⡧⠂⣠⠄⠸⡜⡿⣿⣿⣿
  ⣿⣇⠄⡙⣿⣷⣭⣷⠃⣠⠄⠄⡄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣧⣁⣿⡄⠼⡿⣦⣬⣰⣿
  ⣿⣷⣥⣴⣿⣿⣿⣿⠷⠲⠄⢠⠄⡆⠄⠄⠄⡨⢿⣿⣿⣿⣿⣿⣎⠐⠄⠈⣙⣩⣿⣿
  ⣿⣿⣿⣿⣿⣿⢟⠕⠁⠈⢠⢃⢸⣿⣿⣶⡘⠑⠄⠸⣿⣿⣿⣿⣿⣦⡀⡉⢿⣧⣿⣿
  ⣿⣿⣿⣿⡿⠋⠄⠄⢀⠄⠐⢩⣿⣿⣿⣿⣦⡀⠄⠄⠉⠿⣿⣿⣿⣿⣿⣷⣨⣿⣿⣿
  ⣿⣿⣿⡟⠄⠄⠄⠄⠄⠋⢀⣼⣿⣿⣿⣿⣿⣿⣿⣶⣦⣀⢟⣻⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⡆⠆⠄⠠⡀⡀⠄⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⡿⡅⠄⠄⢀⡰⠂⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`);
                nav = 4;
                break;
                break;
              case 3:
                alert(`Su total es de 12 cuotas de $${div(
                  sumar(total, sumar(iva(total), multi(total, 0.25))),
                  12
                ).toFixed(2)} gracias por confiar en nosotros ${nombre}\n
⣿⣿⣿⣿⣿⣿⣿⡿⡛⠟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠿⠨⡀⠄⠄⡘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠿⢁⠼⠊⣱⡃⠄⠈⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡿⠛⡧⠁⡴⣦⣔⣶⣄⢠⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣤⠭⠏⠙⢿⣿⣿⣿⣿⣿
⣿⡧⠠⠠⢠⣾⣾⣟⠝⠉⠉⠻⡒⡂⠄⠙⠻⣿⣿⣿⣿⣿⡪⠘⠄⠉⡄⢹⣿⣿⣿⣿
⣿⠃⠁⢐⣷⠉⠿⠐⠑⠠⠠⠄⣈⣿⣄⣱⣠⢻⣿⣿⣿⣿⣯⠷⠈⠉⢀⣾⣿⣿⣿⣿
⣿⣴⠤⣬⣭⣴⠂⠇⡔⠚⠍⠄⠄⠁⠘⢿⣷⢈⣿⣿⣿⣿⡧⠂⣠⠄⠸⡜⡿⣿⣿⣿
⣿⣇⠄⡙⣿⣷⣭⣷⠃⣠⠄⠄⡄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣧⣁⣿⡄⠼⡿⣦⣬⣰⣿
⣿⣷⣥⣴⣿⣿⣿⣿⠷⠲⠄⢠⠄⡆⠄⠄⠄⡨⢿⣿⣿⣿⣿⣿⣎⠐⠄⠈⣙⣩⣿⣿
⣿⣿⣿⣿⣿⣿⢟⠕⠁⠈⢠⢃⢸⣿⣿⣶⡘⠑⠄⠸⣿⣿⣿⣿⣿⣦⡀⡉⢿⣧⣿⣿
⣿⣿⣿⣿⡿⠋⠄⠄⢀⠄⠐⢩⣿⣿⣿⣿⣦⡀⠄⠄⠉⠿⣿⣿⣿⣿⣿⣷⣨⣿⣿⣿
⣿⣿⣿⡟⠄⠄⠄⠄⠄⠋⢀⣼⣿⣿⣿⣿⣿⣿⣿⣶⣦⣀⢟⣻⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡆⠆⠄⠠⡀⡀⠄⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡿⡅⠄⠄⢀⡰⠂⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`);
                nav = 4;
                break;
              default:
                break;
            }
          default:
            break;
        }
        break;
      }
    case 3:
      class Componentes {
        constructor(nombre, precio, cantidad) {
          this.nombre = nombre.toUpperCase();
          this.precio = precio;
          this.cantidad = cantidad;
        }
      }
      function agregarComponentes() {
        let numeroComponente = parseInt(
          prompt("Cuantos Componentes necesita registrar")
        );
        let componenetes = [];
        for (let index = 0; index < numeroComponente; index++) {
          let nombre = prompt("Ingrese el nombre");
          let precio = parseFloat(prompt("Ingrese el precio"));
          let cantidad = prompt("Ingrese la cantidad");
          let regiComponente = new Componentes(nombre, precio, cantidad);
          componenetes.push(regiComponente);
        }
        return componenetes;
      }
      function mostrarComponentes(componentes) {
        for (const componente of componentes) {
          console.log(componente);
          alert(
            `El componente ingresado\nNombre:${componente.nombre}\nPrecio:$${componente.precio}\nStock:${componente.cantidad}`
          );
        }
      }
      function main() {
        let componenetes = agregarComponentes();
        mostrarComponentes(componenetes);
      }
      main();
      break;
    case 4:
      const Filcoms = [
        { nombre: "Hyperx ram 8gb", precio: 150, cantidad: 10 },
        { nombre: "HP ram 4gb", precio: 50, cantidad: 15 },
        { nombre: "RTX 3060", precio: 1500, cantidad: 25 },
        { nombre: "AMD R7", precio: 500, cantidad: 40 },
        { nombre: "Luces led", precio: 100, cantidad: 200 },
      ];
      let tipofil;
      tipofil = parseInt(prompt(`Tipo de filtrado\n1-Nombre\n2-precio\n3.Salir`));
      switch (tipofil) {
        case 1:
          let nombrefil = prompt("Palabra que quiere filtrar:");
          const resultado = Filcoms.filter((filcom) =>
            filcom.nombre.includes(nombrefil)
          );
          console.log(resultado);
          alert("Filtrado:" + resultado);
          break;
        case 2:
          maymen = parseInt(prompt(`Tipo de filtrado\n1-Mayor\n2-Menor\n3.Salir`));
          switch (maymen) {
            case 1:
              let may;
              may = parseInt(prompt(`El precio es mayor a:`));
              const resulmay = Filcoms.filter((filcom) => filcom.precio >= may);
              alert("Filtrado:" + resulmay);
              console.log(resulmay);
              break;
            case 2:
              let men;
              men = parseInt(prompt(`El precio es menor a:`));
              const resulmen = Filcoms.filter((filcom) => filcom.precio <= men);
              alert("Filtrado:" + resulmen);
              console.log(resulmen);
              break;
            default:
              break;
          }
      }
      
    default:
      break;
  }
} while (nav != 5);
