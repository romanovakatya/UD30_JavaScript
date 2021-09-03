var valores = [true, 5, false, "hola", "adios", 2];

stringMayor(valores[3], valores[4]);


//parte 2, booleanos,
console.log(valores[0]);
console.log(!valores[0]);

console.log(valores[2]);
console.log(!valores[2]);

//parte 3, el resultado de las cinco operaciones,
console.log("Suma: " + (valores[1] + valores[5]));
console.log("Resta: " + (valores[1] - valores[5]));
console.log("Multiplicación: " + (valores[1] * valores[5]));
console.log("División: " + (valores[1] / valores[5]));
console.log("Modulo: " +  (valores[1] % valores[5]));

//parte 1, cual de los dos elementos de texto es mayor,
function stringMayor(string1, string2){

    if(string1.length == string2.length){
        console.log(string1 + " es igual a " + string2);
    }else if(string1.length > string2.length){
        console.log(string1 + " es mayor que " + string2);
    }else{
        console.log(string2 + " es mayor que " + string1);
    }
}