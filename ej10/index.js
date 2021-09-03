console.log(isPalindromo("La ruta nos aporto otro paso natural"));

function isPalindromo(frase) {

    let newFrase = frase.replace(/[\W_]/g, "").toLowerCase();
    let fraseReverse = newFrase.split("").reverse().join("");

    return newFrase === fraseReverse ? "Es palindromo" : "No es palindromo";
}