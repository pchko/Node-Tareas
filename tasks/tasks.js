const fs = require('fs');

var tasks = [];

const saveDB = () => {

	fs.writeFile(`db/db.json`, JSON.stringify(tasks), (err) => {
	  if (err) throw new Error(err);
	});
};

const loadDB = () => {
	try{
		tasks = require('../db/db.json');	
	}catch( err ){
		tasks = [];
	}
	
	return tasks;
};

const create = (description) => {

	let task = {
		description,
		complete:false
	}

	loadDB();
	tasks.push(task);
	saveDB();

	return task;
};

const update = (desc, status) => {
	loadDB();

	let index = tasks.findIndex( (item) => item.description === desc);

	if(index >= 0){
		tasks[index].complete = status;
		saveDB();
		return true;
	}

	return false;
};

const deleteTask = (desc) => {
	loadDB();

	let auxTasks = tasks.filter( (item) => item.description !== desc);

	if(auxTasks.length !== tasks.length ){
		tasks = auxTasks;
		saveDB();

		return true;
	}else{
		return false;		
	}

	
}


const listTasks = () => {
	//console.log(loadDB());
	return loadDB();
};

module.exports = {
	create,
	listTasks,
	update,
	deleteTask
};