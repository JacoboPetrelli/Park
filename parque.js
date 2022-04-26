let nacionalidad = prompt("¿Es usted gringo o colombiano? (¿US o COL?)")
nacionalidad = nacionalidad.toUpperCase()
let estatura
let temperatura
if(nacionalidad == "US"){
    estatura = Number(prompt("Ingrese su estatura en pies"))
}else{(nacionalidad == "COL")
    estatura = Number(prompt("Ingrese su estatura en metros"))
}
if(nacionalidad == "COL"){
    temperatura = Number(prompt("Ingrese SU temperatura en grados centigrados"))
}else{(nacionalidad == "US")
    temperatura = Number(prompt("Ingrese SU temperatura en grados Farengate"))
}
let Acompañante = prompt("¿Esta acompañado por un adulto? (Si o no?)")
Acompañante = Acompañante.toUpperCase()
if(nacionalidad == "US"){
    if((estatura >= 4.59318 || Acompañante == "SI") && temperatura < 100.4  ){
    contenedor.innerHTML = "Si puede entrar"
    }
    else{
        contenedor.innerHTML = "No puede entrar"
    }
}else{
    if((estatura >= 1.4 || Acompañante == "SI") && temperatura < 38  ){
    contenedor.innerHTML = "Si puede entrar"
    }
    else{
        contenedor.innerHTML = "No puede entrar"
    }
}
contenedor = document.querySelector("#contenedor")
    




