// 1-Van a diseñar un algoritmo que tome el valor de dos edades y menciona cual es el mayor.


/*
let edad1= parseInt(prompt("Digite la primera edad"));
let edad2= parseInt(prompt("Digite la segunda edad"));

if(edad1 > edad2){
    alert("la edad mayor es " + edad1);
}

else{
    alert("la edad mayor es " +edad2);
}
*/

/*
//2-El docente de programación quiere capturar la nota de sus 5 estudiante y obtener el promedio de notas


let estudiante=5;
let nota1= parseInt(prompt("Digite su nota"));
let nota2= parseInt(prompt("Digite su nota"));
let nota3= parseInt(prompt("Digite su nota"));
let nota4= parseInt(prompt("Digite su nota"));
let nota5= parseInt(prompt("Digite su nota"));

function promedioTotal() {
    let promedio=(nota1+nota2+nota3+nota4+nota5)/estudiante;
    return alert ("el promedio de nota de la clase es " + promedio);
}

promedioTotal()

*/

//Los magios actualizaron su santo y seña a la palabra: “dom” por eso es necesario que usted cree un algoritmo que solicite la palabra y si es correcta que diga un mensaje: “bienvenidos al nuevo club de los magios” de lo contrario diga: “No puedes ingresar, no eres un miembro”

/*
let usuario="dom";
let santoSena= prompt("Digite el santo y seña de los magios");


if(usuario === santoSena){
alert("Usuario correcto, Bienvenido a los Magios");
}

else{ 
    alert("no puedes ingresar, no eres un miembro");

}
*/

//4-La sala de cine de la ciudad de Pasto requiere realizar el control de los clientes que van a ingresar a ver la función de Batman, el requisito para ver la película debe ser que el cliente esté vacunado. Si está vacunado va aparecer un mensaje que diga: bienvenido, si no está vacunado saldrá un mensaje que diga: por favor ve a vacunarte.
/*
let vacuna= prompt("usted se encuentra vacunado?");
let si="si";
let no="no";


if(vacuna== si){
    alert("Bienvenido");
}

else if(vacuna== no){
    alert ("por favor, Ve a vacunarte");
}

else{
    alert("respuesta equivocada");
}
*/
//5-Realiza un algoritmo que solicite una fecha de nacimiento y en razón a ese dato va calcular la edad.

/*
let edad= prompt("Digite el año de su nacimiento");

function calcularEdad(edad) {
    let edadCompleta= ( 2022-edad);
    return alert("su edad es " + edadCompleta);
}
calcularEdad(edad);
*/

//Profe aqui va otro intento pero no lo logre, espero que lo pueda revisar y me ayude a encontrar una manera para hacerlo mas exacto: Gracias! :)
/*
let dia=PaseInt(prompt("Digite el dia de hoy"));
let mes=PaseInt(prompt("Digite el mes de hoy"));
let ano=PaseInt(prompt("Digite el año de hoy"));


let diaNacimiento=PaseInt(prompt("Digite el dia de su nacimiento"));
let mesNacimiento=PaseInt(prompt("Digite el mes de su nacimiento"));
let anoNacimiento=PaseInt(prompt("Digite el año de su nacimiento"));



function calcularEdad(){
    let diaExacto= 0;
    let mesExacto= 0;
    let anoExacto= 0;

    return alert ("usted tiene " + diaExacto + "dias" + mesExacto + "meses" + "y" + anoExacto + "años" );
}
calcularEdad();

*/



//6-Usted tiene los siguientes países; COLOMBIA, ARGENTINA, PERÚ, JAPÓN,ALEMANIA, al seleccionar alguno de ellos le va mostrar su capital.
/*
let pais= prompt("Selecciona uno de estos paises: \n 1.Colombia \n 2. Argentina \n 3. Peru \n 4.Japon \n 5. Alemania");

if (pais==1) {
    alert("La capital del pais seleccionado es Bogota");
  }

else if(pais==2){
    alert("La capital del pais seleccionado es Buenos Aires");
}
else if(pais==3){
    alert("La capital del pais seleccionado es Lima");
}
else if(pais==4){
    alert("La capital del pais seleccionado es Tokio");
}
else if(pais==5){
    alert("La capital del pais seleccionado es Berlin");
}

else{
    alert("tu respuesta no coincide con la pregunta");
}
*/
//7-Realiza la tabla de multiplicar de su número favorito hasta el número 100.
/*
let tabla= prompt("Digite su numero favorito");
let limite=100;

for (let i=1; i <= limite; i++ ){
  let multi= tabla*i;

  document.write( tabla + " x " + i + "=" + multi + "<br>");
  
}
*/

//8- Diccionario de inglés; por favor traduce 5 palabras que quieras al inglés; el usuario las va observar y al seleccionar cualquiera le va mostrar la traducción al inglés.

let palabra= prompt("Selecciona la palabra a traducir a ingles: \n 1.patineta \n 2. bicicleta  \n 3. casco \n 4.guantes \n 5. pesas");

if (palabra==1) {
    alert("Skate");
  }

else if(palabra==2){
    alert("bicycle");
}
else if(palabra==3){
    alert("Helmet");
}
else if(palabra==4){
    alert("Gloves");
}
else if(palabra==5){
    alert("Weights");
}

else{
    alert("tu respuesta no coincide con la pregunta");
}