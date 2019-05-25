const fs = require('fs');

let listadoPorHacer = [];

const guarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se puedo Grabar', err);
        }
    })

}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }

}
const listar = () => {

    return listadoPorHacer;
}
const crear = (descricion) => {
    let confirmar = false
    let porHacer = {
        descricion,
        completado: false
    }

    if (listadoPorHacer.length == 0) {
        listadoPorHacer.push(porHacer);
        confirmar = true;
        guarDB();
    } else {
        let respuesta = listadoPorHacer.findIndex(tarea => {
            return tarea.descricion === porHacer.descricion
        })
        if (respuesta == -1) {
            listadoPorHacer.push(porHacer);
            confirmar = true;
            guarDB();
        }
    }
    return confirmar;
}
const update = (task) => {
    let confirmar = false;
    let buscar = listadoPorHacer.findIndex(tarea => {
        return tarea.descricion === task;
    })

    if (buscar > -1) {
        listadoPorHacer[buscar].completado = true;

        confirmar = listadoPorHacer[buscar].completado;
        guarDB();
    }
    return confirmar;
}
const erase = (task) => {
    let confirmar = true;
    /**
     * filter funciona para crear un nuevo 
     * arreglo deacuerdo a un parametro
     */
    let buscar = listadoPorHacer.filter((tarea) => {
        return tarea.descricion !== task
    })
    console.log(buscar);
    if (buscar.length == listadoPorHacer.length) {
        confirmar = false;
    } else {
        listadoPorHacer = buscar;
        guarDB();
    }
    return confirmar;
}


module.exports = { crear, listar, cargarDB, update, erase }