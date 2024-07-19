numero = 5

if (numero%2 !=0){
    if (numero%3 !=0){
        if(numero%4 !=0){
            console.log("es primo")
        } else {
            console.log("no es primo")
        }
    } else {
        console.log("no es primo")
    }
} else {
    console.log("no es primo")
}