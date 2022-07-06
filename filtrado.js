const Filcoms = [
  { nombre: "Hyperx ram 8gb", precio: 150, cantidad: 10 },
  { nombre: "HP ram 4gb", precio: 50, cantidad: 15 },
  { nombre: "RTX 3060", precio: 1500, cantidad: 25 },
  { nombre: "AMD R7", precio: 500, cantidad: 40 },
  { nombre: "Luces led", precio: 100, cantidad: 200 },
];
Filcoms.forEach((filcom) => {
  alert(
    `Nombre: ${filcom.nombre}\nPrecio: $${filcom.precio}\nStock: ${filcom.cantidad}`
  );
});
let tipofil;
tipofil = parseInt(prompt(`Tipo de filtrado\n1-Nombre\n2-precio\n3-Salir`));
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
