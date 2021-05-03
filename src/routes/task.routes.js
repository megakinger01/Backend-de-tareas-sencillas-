const express = require('express')
const router = express.Router()

const Task = require('../models/task')

router.get('/', async( req, res )=> {

    const tasks = await Task.find()
   
    res.json({
        ok:true,
        tareas:tasks
    })
})

router.post('/', async( req, res )=> {

    const { title, description } = req.body
    const task = new Task({title, description})
    await task.save()

    res.json({
        ok:true
    })

})


router.put('/:id', async( req, res )=> {

    const { title, description } = req.body
    const newTask = new Task({title, description})

    const nuevoEvento = {
        ...req.body,
    }
    const id = req.params.id

     await Task.findByIdAndUpdate(id , nuevoEvento, { new: true })

    res.json({
        ok:true,
        newTask,
        id

    })

})


router.delete('/:id', async( req, res )=> {

    const id = req.params.id

     await Task.findByIdAndRemove(id )

    res.json({
        ok:true,
        status: 'Task delete'

    })

})


router.get('/:id', async( req, res )=> {

    const id = req.params.id

    const task = await Task.findById(id )

    res.json({
        ok:true,
        task

    })

})


module.exports = router