const description = {
	alias: 'd',
	demand: true,
	desc: 'Descripcion de la tarea por crear'
};

const complete = {
	alias: 'c',
	default: true,
	desc: 'Status de la tarea'
};

const argv = require('yargs')
.command('create', 'Crea una tarea', {
	description
})
.command('list', 'Lista las tareas')
.command('update', 'Actualiza el estado de una tarea', {
	description,
	complete
})
.command('delete', 'Elimina una tarea', {
	description
})
.help()
.argv;

module.exports = {
	argv
}