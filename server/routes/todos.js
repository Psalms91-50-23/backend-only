const express = require('express')
const db = require('../db/dbFunc')
const router = express.Router()


router.get('/', (req,res) => {

    db.getAllTodoTask()
    .then(todos => {

        todos.map(todo => {
            todo.completed = Boolean(todo.completed)
        })
     
        res.json(todos)
        return null
    }).catch(err => {

        res.status(500).json({error: err.message})
    })
           
})

router.get('/:id', (req,res) => {

    const todoId = req.params.id
    db.getTodoTaskById(todoId)
    .then(todo => {
        
        todo.completed = Boolean(todo.completed)
        res.json(todo)

    }).catch(err => {

        res.status(500).json({error: err.message})

    })
})

router.post('/', (req,res)=> {

    const newTodo = req.body
 
    if(!newTodo.from)
    {
        newTodo.from = "anonymous"
    }
    
    db.addTodoTask(newTodo)
    .then(todo => {

        res.json(todo)

    }).catch(err => {

        res.status(500).json({error: err.message})

    })
})

router.delete('/:id', (req,res) => {

    const todoId = req.params.id
    db.deleteTodoTask(todoId)
    .then(() => {

        res.json(`Todo id number ${todoId} has been deleted`)

    }).catch(err => {

        res.status(404).json({error: err.message})

    })

})


router.patch('/:id', (req,res) => {

    const todoId = req.params.id
    const todoToUpdate = req.body

    db.updateTodoTask(todoId, todoToUpdate)
    .then(()  => {

        res.json({updateCompleted: true})

    }).catch(err => {
        res.status(404).json({error: err.message})
    })
})

module.exports = router