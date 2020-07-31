const argv = require('./config/yargs').argv;
const tasks = require('./tasks/tasks');
const colors = require('colors');

let comando = argv._[0];

switch(comando){
	case 'create':
		let newTask = tasks.create(argv.description);
	break;

	case 'list':
		
		let list = tasks.listTasks();
		for(let task of list){
			console.log("==== Por Hacer ====".green);
			console.log(task.description);
			console.log(`Status: ${task.complete}`);
			console.log("===================".green);
		}

	break;

	case 'update':
		let updated = tasks.update(argv.description, argv.complete);
		console.log(updated);
	break;

	case 'delete':
		let deleted = tasks.deleteTask(argv.description);
		console.log(deleted);
	break;

	default:
		console.log("Comando no reconocido");
	break;
}