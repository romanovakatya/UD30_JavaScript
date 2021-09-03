function isPar(number){

    if(number % 2 == 0){
        return "El número "+ number + " es par";
    }else{
        return "El número "+ number + " es impar";
    }
}

console.log(isPar(11))