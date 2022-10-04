
let contenido1= document.querySelector(".ejemplo1");

let contenido2= document.querySelector(".ejemplo2");

let arreglo= ["Gordor", "Vato", "Serduro"];

let texto= [];

//FOREACH
arreglo.forEach(funcion);

contenido1.innerHTML= texto;

//FILTER
contenido2.innerHTML= arreglo.filter(filtrado);



function funcion(valor, indice){
  texto+= indice + ": " + valor + "<br>";
  return texto;
}

function filtrado(elemento){
  return elemento.length<7;
}



//!--------------------------------------------------------------------------------------------

//28/07/2022
//DIFERENCIA ENTRE FOREACH Y MAP:

//MULTIPLICAR C/U DE LOS PARÁMETROS DEL ARREGLO X 2 Y GUARDAR EN NEWNUM
let num= [1,2,3];

//FOREACH::

let newNum1= [];

num.forEach(fancion);

console.log(newNum1);

function fancion(aaa){
  newNum1.push(aaa*2);
}

//MAP

let newNum2= num.map(aaa=> aaa*2);

console.log(newNum2);


//!--------------------------------------------------------------------------------------------

//28/07/2022
//Ejercicio serio con FOREACH

let contenedor= document.querySelector(".serio-foreach");

let personas= [
  {nombre: "Vato Serduro", edad: 25, Hobbie: "Tener tos"},
  {nombre: "Gordor Mido", edad: 30, Hobbie: "Comer"},
  {nombre: "Pepo Posiado", edad: 17, Hobbie: "Jugar"}
];

let info= '';

personas.forEach(listado);

function listado(persona, index){
  info+= `
  ${index+1}. Nombre: ${persona.nombre} || Edad: ${persona.edad} || Le gusta hacer en el tiempo libre: ${persona.Hobbie}<br>
  `
}

contenedor.innerHTML= info;


//Ejercicio serio con MAP

//Utilizo el arreglo personas de arriba

let nuevaPersonas= personas.map(persona=> ({tipo: "Ser Humano", edad: persona.edad}));
//!importante que la función flecha sea de la forma ()=> ({}) porque estoy trabajando con propiedades
//!de arreglos. Si lo dejo solo ()=>{} me da error.

console.log(nuevaPersonas);

//Si quiero conservar todas las propiedades del arreglo original y agregar una propiedad nueva:
let arregloNuevo= personas.map(persona=>({...persona, sexo: "Masculino"}));

console.log(arregloNuevo);


//!CON MAP SE PUEDEN HACER ENCADENAMIENTOS
let valores= [34,465,54];

let nuevoValores= valores.map(dato=> dato*2).map(dato=>dato.toString()).map(dato=>"$"+dato);

console.log(nuevoValores);


//Si yo quiero luego obtener el total::
let total=0;
nuevoValores.forEach(valor=>{
  let num= parseInt(valor.substring(1));
  total+=num;
});
console.log(total);


//Ejercicio con FILTER

//Utilizo el arreglo personas de arriba

let adultos= personas.filter(persona=> persona.edad>18);

console.log(adultos);