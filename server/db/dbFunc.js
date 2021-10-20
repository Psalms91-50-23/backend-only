const db = require('./connection')


function getAllTodoTask()
{
    return db('todos').select()

}

function getTodoTaskById(id){

    return db('todos')
    .where('id', id)
    .first()
}

function addTodoTask(task){

    return db('todos')
    .insert(task)
    .then(idArr => {
        return getTodoTaskById(idArr[0])
    })
}

function deleteTodoTask(id){

    return db('todos')
    .where('id', id)
    .delete()

}


function updateTodoTask(id,todo)
{
    const updateID = id
    const beforeUpdate = getTodoTaskById(updateID)
    var tempArray = []
    tempArray.push(todo)
    return db('todos')
    .where('id', id)
    .update(todo)
    // .then(after  => {
    //     console.log("after ", after)
    //     const afterUpdate = getTodoTaskById(updateID)
    //     tempArray.push(afterUpdate)
    //     console.log('update array ', tempArray)
    //     return tempArray
    // })
}

module.exports = {

    getAllTodoTask,
    getTodoTaskById,
    addTodoTask,
    deleteTodoTask,
    updateTodoTask
}