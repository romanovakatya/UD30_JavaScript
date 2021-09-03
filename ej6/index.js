
let dni = prompt("Escribe el número de un DNI sin letra");


if (dni > 0 && dni <= 99999999) {

    let letraDni = prompt("Escribe letra de ese DNI");

    let letraCalculada = calcularletra(dni);

    //mostrar resultado,
    if (letraDni.toUpperCase() == letraCalculada) {

        alert("El número y la letra de DNI son correctos");
    } else {
        alert("La letra indicada no es correcta");
    }

} else {
    alert("El número es incorrecto");
}

//para calcular letra de dni,
function calcularletra(dni) {

    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
        'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    let resta = dni % 23;

    console.log("resta: " + resta);

    return letras[resta];
}