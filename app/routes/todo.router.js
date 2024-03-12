"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// ROUTERS:
const Todo = require('./todo.model')
const router = require('express').Router()

// // LIST TODOS:
router.get('/', async (req, res) => {    //burasi controller

    // const data = await Todo.findAll()
    const data = await Todo.findAndCountAll() //tum kayitlarin sayisini verir

    res.status(200).send({
        error: false,
        result: data
    })
})

//? CRUD Processes:

// CREATE TODO:
// router.post('/', async (req, res) => {

//     const receivedData = req.body

// const data = await Todo.create({
//     title: receivedData.title,
//     description: receivedData.description,
//     priority: receivedData.priority,
//     isDone: receivedData.isDone,
//     // newKey: 'newValue' // Modelde tanımlanmadığı için bir işe yaramayacaktır.
// })

//     const data = await Todo.create(req.body)

//     res.status(201).send({
//         error: false,
//         result: data.dataValues
//     })
// })

// READ TODO:
// router.get('/:id', async (req, res) => {

//     //const data = await Todo.findOne({ where: { id: req.params.id } })
//     const data = await Todo.findByPk(req.params.id) //await ayazdigimiz icin yukari async yaziyoruz

//     res.status(200).send({
//         error: false,
//         result: data
//     })

// })

//Uptade todo
// router.put('/:id', async (req, res) => {

//     //const data = await Todo.update({....newdata}, {where} })
//     const data = await Todo.update(req.body, { where: { id: req.params.id } })

//     res.status(202).send({ //guncelleme status kodu
//         error: false,
//         message: "updated",
//         body: req.body,
//         result: data,  //kac kayit guncelledim onu gosterir
//         new: await Todo.findByPk(req.params.id) //gncelledigim datayi gosterir
//     })

// })

//Delete todo

// router.delete('/:id', async (req, res) => {

//     //const data = await Todo.destroy({where} })
//     const data = await Todo.destroy({ where: { id: req.params.id } })

//     res.status(204).send({ //silme status kodu
//         error: false,
//         message: "deleted",
//         result: data,  //kac kayit sildim onu gosterir

//     }) // 204 no content icerik vermeyebilri. 

// })

//app.use(router)

app.use(req('./todo.router'))
module.exports = router

/* ------------------------------------------------------- */