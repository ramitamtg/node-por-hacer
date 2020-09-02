const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

// cons./gv = require("yargs").argv;


let comando = argv._[0]; //posicion 0 xq aca esta el comando 

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion) //con el . le digo q quiero q tome de porHacer y toma del (descripcion) que esta en argv
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado()
        for (let tarea of listado) {
            console.log("===========Por Hacer===".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log("=========================".green);

        }
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log("Comando no reconocido");

    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
};