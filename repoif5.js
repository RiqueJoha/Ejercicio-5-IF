const LIMITE_MASCOTAS= 3;
const LIMITE_GATO= 1;
const LIMITE_PERRO= LIMITE_MASCOTAS;


const TIPO_MASCOTA_PERRO=1;
const TIPO_MASCOTA_GATO=2;

const CANT_DEF_PERROS= 0;

const TIEMPO_MIN= 30;
const TIEMPO_MAX= 60;



let pasearTipoMascota = prompt ("¡Paseo para perros: Opcion 1! ¡Paseo para un gato: Opción 2!");
let cantidadPerros = CANT_DEF_PERROS;

let tiempoColocado= prompt ("Ingrese tiempo de paseo");

if (pasearTipoMascota==TIPO_MASCOTA_PERRO) {
    cantidadPerros= prompt ("Ingrese la cantidad");}
if ((cantidadPerros<=LIMITE_MASCOTAS) && ((tiempoColocado>=TIEMPO_MIN)&&(tiempoColocado<=TIEMPO_MAX)))
  { document.write ("¡Se podrá realizar el paseo!");
} else {
    document.write ("¡Excedio la cantidad permitida: No se puede realizar el paseo!");   
}


