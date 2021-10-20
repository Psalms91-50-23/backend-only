const express = require('express')
const db = require('../db/dbFunc')
const router = express.Router()


router.get('/', (req,res) => {

    db.getAllTodoTask()
    .then(tasks => {

        tasks.map(task => {
            task.completed = Boolean(task.completed)
        })
     
        res.json(tasks)
        return null
    }).catch(err => {

        res.status(500).json({error: err.message})
    })
           
})

router.get('/:id', (req,res) => {

    const postId = req.params.id
    db.getTodoTaskById(postId)
    .then(task => {
        
        task.completed = Boolean(task.completed)
        res.json(task)

    }).catch(err => {

        res.status(500).json({error: err.message})

    })
})

router.post('/', (req,res)=> {

    const newPost = req.body
 
    if(newPost.from === "")
    {
        newPost.from = "anonymous"
    }
    
    db.addTodoTask(newPost)
    .then(post => {

        res.json(post)

    }).catch(err => {

        res.status(500).json({error: err.message})

    })
})

router.delete('/:id', (req,res) => {

    const taskID = req.params.id
    db.deleteTodoTask(taskID)
    .then(() => {

        res.json(`Task id number ${taskID} has been deleted`)

    }).catch(err => {

        res.status(404).json({error: err.message})

    })

})


router.patch('/:id', (req,res) => {

    const taskID = req.params.id
    const taskToUpdate = req.body

    db.updateTodoTask(taskID, taskToUpdate)
    .then(()  => {

        res.json({updateCompleted: true})

    }).catch(err => {
        res.status(404).json({error: err.message})
    })
})

module.exports = router