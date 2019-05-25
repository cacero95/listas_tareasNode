const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];
porHacer.cargarDB();
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        if (tarea) {
            console.log('Tarea Guardada');
        } else {
            console.log('La tarea ya existe en la base de datos');
        }
        break;
    case 'listar':
        let lista_tareas = porHacer.listar();
        console.log(lista_tareas);
        break;
    case 'actualizar':
        let task = porHacer.update(argv.descripcion);
        if (task) {
            console.log('Tarea actualizada');
        } else {
            console.log('La tarea no se encontro');
        }
    case 'borrar':
        let homework = porHacer.erase(argv.descripcion)
        if (homework) {
            console.log('Tarea eliminada');
        } else {
            console.log('No se encontro la tarea');
        }
        break;
    default:
        console.log('Comando no reconocido');
}