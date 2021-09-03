checkString("KATIA");
checkString("katia");
checkString("Katia");

function checkString(string) {

    let contadorLetrasMay = 0;
    let contadorLetrasMin = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == string.charAt(i).toUpperCase()) {
            contadorLetrasMay++;
        }
        else if (string.charAt(i) == string.charAt(i).toLowerCase()) {

            contadorLetrasMin++;
        }
    }

    if (contadorLetrasMay == string.length) {
        console.log("Cadena está formada sólo por mayúsculas");
    }
    else if (contadorLetrasMin == string.length) {
        console.log("Cadena está formada sólo por minúsculas");
    } else {
        console.log("Cadena está formada por una mezcla de mayúsculas y minúsculas");
    }
}