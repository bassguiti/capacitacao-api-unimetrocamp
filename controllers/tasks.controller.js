const Task = require('../models/Task');

const get = async function(req, res){
    try{
        const tasks = await Task.find();

        return res.send(tasks);
    }catch (error) {
        return res.status(500).send('Erro ao buscar tarefas');
    }    
}

const create = async function(req, res){
    try{
        const task = await Task.create(req.body);
        return res.send(task);
    }catch (error){
        return res.status(500).send('Erro ao Cadastrar Tarefa');
    }
}

const update = function(req, res){

}

const remove = function(req, res){

}

module.exports = { get, create, update, remove };