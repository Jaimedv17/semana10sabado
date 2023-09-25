// EJERCICIO (1)

// function sumar3 (examen1, examen2, examen3, examen4){
//     promedio = (examen1 + examen2 + examen3 + examen4) / 4
//     return promedio
// }

// let suma = sumar3(15, 18, 12, 20)

// console.log (suma)

//...............................................................................

// //EJERCICIO (2)

// function rectangulo(largo, ancho){
//     let area1 = (largo * ancho)
//     return area1
// }

// // console.log (rectangulo(10, 5))

//................................................................................

// //EJERCICIO (3)
// function triangulo(base, altura){
//     let area = (base * altura) / 2
//     return area
// }

// console.log (triangulo(20, 15))

//................................................................................

//EJERCICIO (4)

// pi= 3.14
// r = 5 elevado al cuadrado(2)

// function number(radio){
//     const pi =3.14
//     const area = pi * Math.pow(radio, 2)
//     return area
// }

// const final = number(5)

// console.log (final)

//................................................................................

//EJERCICIO (5)

// function datos(salario, horas){
//     let sueldoHoras = (salario * horas) * 7
//     return sueldoHoras
// }

// let sueldoDia = datos(40, 8)

// console.log(sueldoDia)


//................................................................................

// //EJERCICIO (6)

// function dato1(dineroSoles){ //Parametro / Entrada
//     let cambioDolares = (dineroSoles / 3.73)
//     return cambioDolares
// }

// console.log (dato1(40).toFixed(2)) //Argumento / Salida


//................................................................................

//EJERCICIO (7)

// function ultimoElemento(arreglo){

//     if (arreglo.length > 0){
//         return arreglo[arreglo.length -1];
//     }
// }

// const arreglo = [4, 8, 5, 3]
// const final = ultimoElemento(arreglo);

// console.log (final)


//................................................................................

//EJERCICIO (8)


// function number(arreglo1, arreglo2){
//     const arregloNuevo = [... arreglo1, arreglo2]
//     return arregloNuevo
// }

// const arreglo1 = [2, 7, 5, 11] 
// const arreglo2 = 9

// const arregloFinal = number(arreglo1, arreglo2)

// console.log (arregloFinal)


//................................................................................

//EJERCICIO (9)

// function number(arreglo){
//     let suma = 0
//     for (let i = 0; i < arreglo.length; i++){
//         suma += arreglo[i]
//     }
//     return suma 
// }

// const miArreglo = [2, 6, 1, 8];

// const final = number (miArreglo);

// console.log (final);


//................................................................................

//EJERCICIO (10)

// function number(arreglo){
//     let suma = 0
//     for (let i = 0; i < arreglo.length; i++){
//         if(arreglo[i] % 2 === 0){
//             suma = suma + arreglo[i]
//         }
//     }
//     return suma 
// }

// const miArreglo = [1, 2, 5, 8, 9, 12, 2, 3];

// const final = number (miArreglo);

// console.log (final);


//................................................................................

//EJERCICIO (11)

// function arreglos(arreglo1, arreglo2){
//     const arregloNuevo = [... arreglo1, ...arreglo2]
//     if (arregloNuevo.length >= 10){
//         return true;
//     }else{
//         return false;
//     }
// }

// const arreglo1 = [2, 5, 2, 3, 7, 2];
// const arreglo2 = [1, 5, 3, 3];

// const final = arreglos(arreglo1, arreglo2)

// console.log (final)


//................................................................................

//EJERCICIO (12)

// function funcionArray(arreglo1, arreglo2){
//     const arregloNuevo1 = []
//     const arregloNuevo2 = []
//     for (let i = 0; i < arreglo1.length; i++){
//         arregloNuevo1[i] = arreglo1[i] * 2
//     }
//     for (let i = 0; i < arreglo2.length; i++){
//         arregloNuevo2[i] = arreglo2[i] * 2
//     }

//     const arregloMultiplicado = [...arregloNuevo1, ...arregloNuevo2]
//     return arregloMultiplicado
// }

// const arreglo1 = [2, 5, 2];
// const arreglo2 = [1, 5, 3];

// const final = funcionArray(arreglo1, arreglo2)

// console.log (final)


//................................................................................

//EJERCIO 13


// function personasConSalarioMayor(personas) {
//     return personas.filter(persona => persona.salario > 1200);
//   }
// function primeraPersonaCantar(personas) {
//     return personas.find(persona => persona.hobby === 'cantar');
//   }
// function algunaPersonaGustaLeer(personas) {
//     return personas.some(persona => persona.hobby === 'leer');
//   }

//   // Ejemplo de uso:
//   const personas = [
//     { nombre: 'boris', hobby: 'correr', salario: 2000 },
//     { nombre: 'luis', hobby: 'cantar', salario: 1500 },
//     { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
//     { nombre: 'percy', hobby: 'cantar', salario: 1100 },
//     { nombre: 'rosa', hobby: 'leer', salario: 3000 },
//   ];
  
// const personasSalarioMayor = personasConSalarioMayor(personas);
// console.log(personasSalarioMayor);

// const personaCantar = primeraPersonaCantar(personas);
// console.log(personaCantar);

// const gustaLeer = algunaPersonaGustaLeer(personas);
// console.log(gustaLeer);


//................................................................................

//EJERCICIO 14

// function diaEscogido(dia){
//     const diaMinuscula = dia.toLowerCase()

//     const diaSemana = {
//         lunes: "Maria",
//         martes: "Luis",
//         miercoles: "Antonia",
//         jueves: "Pedro",
//         viernes: "Maria",
//     }
    
//     if (diaSemana[diaMinuscula]){
//         const contenedorDia = diaSemana[diaMinuscula]
//         return `Este dia se encarga ${contenedorDia}`
//     }
//     else{
//         return `Este dia no hay servicio`
//     }
// }

// const preguntaDelDia = prompt(`Por favor, ingrese el dia`)
// const recepcionDia = diaEscogido(preguntaDelDia)

// alert (recepcionDia)


//................................................................................

//EJERCICIO (15)


// function productoEscogido(producto){
//     const productoMinuscula = producto

//     const dato = {
//         monitor: 200,
//         teclado: 20,
//         raton: 10,
//     }
    
//     if (dato[productoMinuscula]){
//         const contenedorProdcuto = dato[productoMinuscula]
//         return `El pruducto ingresado tiene el precio de ${contenedorProdcuto}€`
//     }
// }

// const preguntaDelProducto = prompt(`Por favor, ingrese el producto deseado`)
// const recepcionProducto = productoEscogido(preguntaDelProducto)

// alert (recepcionProducto)
