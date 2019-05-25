const argv = require('yargs')
    .command('borrar', 'Borrar una tarea en lista de tareas', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por borrar'
        }
    })
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descricion de la tarea por hacer'
        }
    }).command('actualizar', 'Actualiza el estado completo de la tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualiza tarea cuando esta completada'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca completado o pendiente de la tarea'
        }
    }).help().argv;
module.exports = { argv }