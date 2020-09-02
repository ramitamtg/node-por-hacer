const argv = require("yargs")
    .command("crear", "Crea una tarea por hacer", {
        descripcion: {
            demand: true,
            alias: "d"

        }
    })
    .command("actualizar", "actualiza el estado de una tarea", {
        descripcion: {
            demand: true,
            alias: "d"

        },
        completado: {
            default: true,
            alias: "c"

        }
    })
    .command("borrar", "borra una tarea", {
        descripcion: {
            demand: true,
            alias: "b"
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}