let amd = 0;
let intel = 0;
let rx = 0;
let rtx = 0;
let tecl = 0;
let mouse = 0;
let total = 0;
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
      `${nombre} en que te podemos ayudar\n====================================\n1-Agregar componentes al carrito\n2-Ver el carrito y teminar la compra\n3.Salir`
    )
  );
  switch (nav) {
    case 1:
      while (elegirProd != 7) {
        elegirProd = parseInt(
          prompt(
            `Que componentes agregamos al carrito\n====================================\n1-AMD Ryzen 5600x $25000\n2-Intel Core i7-7900-k\n3-RX 6700 $80000\n4-RTX 3060 $100000\n5-Mouse Logitech g-502\n6-Teclado Hyperx Alloy FPS\n7-Salir`
          )
        );
        switch (elegirProd) {
          case 1:
            unidades = parseInt(
              prompt("Cuantos procesadores AMD quiere agregar al carrito")
            );
            amd = sumar(amd, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, 25000));
            break;
          case 2:
            unidades = parseInt(
              prompt("Cuantos procesadores Intel quiere agregar al carrito")
            );
            intel = sumar(intel, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, 30000));
            break;
          case 3:
            unidades = parseInt(
              prompt("Cuantas RX 6700 quiere agregar al carrito")
            );
            rx = sumar(rx, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, 80000));
            break;
          case 4:
            unidades = parseInt(
              prompt("Cuantas RTX 3060 quiere agregar al carrito")
            );
            rtx = sumar(rtx, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, 100000));
            break;
          case 5:
            unidades = parseInt(
              prompt("Cuantos G-502 quiere agregar al carrito")
            );
            mouse = sumar(mouse, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, 3000));
            break;
          case 6:
            unidades = parseInt(
              prompt("Cuantos Hyperx Alloys FPS quiere agregar al carrito")
            );
            tecl = sumar(tecl, unidades);
            cantidadProd = sumar(cantidadProd, unidades);
            total = sumar(total, multi(unidades, 7000));
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
            `El precio total de los componentes es:$${total}\n====================================\n1.Seguir Comprando\n2.Finalizar compra.`
          )
        );
        switch (elegirProd) {
          case 2:
            unidades = parseInt(
              prompt(
                `Usted esta llevando ${cantidadProd} de componentes por $${total}
                \nAMD Ryzen X ${amd}:$${multi(amd, 25000)}
                \nIntel Core i7 X ${intel}: $${multi(intel, 30000)}
                \nRX 6700 X ${rx}: $${multi(rx, 80000)}
                \nRTX 3060 X ${rtx}: $${multi(rtx, 25000)}
                \nMouse G-502 X ${mouse}: $${multi(mouse, 3000)}
                \nTeclado Hyperx X ${tecl}: $${multi(tecl, 7000)}
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
                  `Su total es de $${sumar(total, iva(total)).toFixed(2)} Gracias por confiar en nosotros ${nombre}\n
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
              case 2:
                alert(`Su total es de 6 cuotas de $${div(
                    sumar(total, sumar(iva(total), multi(total, 0.1))),
                    6
                  ).toFixed(2)} Gracias por confiar en nosotros ${nombre}\n
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
                ).toFixed(2)} Gracias por confiar en nosotros ${nombre}\n
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
      break;
  }
} while (nav != 3);
