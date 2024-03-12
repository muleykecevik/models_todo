"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())    //json data gonderdıgımızı soyluyoruz express e

// Catch async-errors:
require('express-async-errors')

// app.all('/abc', (req, res) => { // Allow all methods. all -> URL=/ - use -> URL=/* //app all dedıgınde tum methodlar icin gecelri olur. '/' varsa sadece anaysayfaya gıder  app use kullanırsak abc yle baslayan ve devam eden trum ıstekler olur. onemlı olan abc ıle baslaması.
//     res.send('WELCOME TO TODO API')
// })
/* ------------------------------------------------------- 
// MODELS:

const { Sequelize, DataTypes } = require('sequelize')
// sequelize instance oluştur:
const sequelize = new Sequelize('sqlite:./db.sqlite3')

// define methodu sequelize modeli oluşturur:
// her bir model, veritabanında bir tabloya denk gelir.
// sequelize.define('tableName', {  modelDetails  })

const Todo = sequelize.define('todos', {   //model isimleri buyuk harfle olur //model olusturma 

    // //     // ilk sutun olarak id sutunu sequelize tarafından otomatik oluşturulur/yönetilir. olusturmaya gerek yok. her kayıtta 1 artar. yani id field name diye belirtmeme gerek yok.
    // id: {
    //     type: DataTypes.INTEGER,   //dırekt verı tiipi yazılamıyo datatypes yazmak gerekiyr
    //     allowNull: false, // default: true  // ıd bos bırakılabilir mi diye bunu yazıyoeruz
    //     unique: true, // default: false   //aynı kayıttan bırden fazla olabilir mi diye bakiyoruz
    //     comment: 'description',   //
    //     primaryKey: true, // default: false
    //     autoIncrement: true, // default: false
    // field: 'custom_name',
    //    defaultValue: 'default', // default: null
    //  },
    // onemlı olan ılk ucu. genelde onları kullanacagiz
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: DataTypes.TEXT, // ShortHand Using.

    priority: { // -1: Low, 0: Norm, 1: High
        type: DataTypes.TINYINT,
        allowNull: false,
        default: 0
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
    }

    //? Not need define createdAt & updatedAt fields.
    //? createdAt ve updatedAt tanımlamaya gerek yoktur. Sequelize otomatik oluşturur/yönetir.
})

// Syncronization:
// Model bilgilerini db'ye uygula:
//sequelize.sync() // CREATE TABLE //arka tarafta sql diliyle haberlesir //surekli acik kalmamali yoksa db yi sifirlar //veri tabani sifirdan olusturalacaksa
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP //veri tabaninda degisiklik yapilacaksa 

// Connect to db:
sequelize.authenticate() //database e baglanma methodu
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

 ------------------------------------------------------- */

/*------------------------------------------------------- 
// ROUTERS:
const Todo = require('./todo.model')

const router = express.Router()

// // LIST TODOS:
router.get('/', async (req, res) => {

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

app.use(router)

 ------------------------------------------------------- */
// const errorHandler = (err, req, res, next) => {
//     const errorStatusCode = res.errorStatusCode ?? 500
//     console.log('errorHandler worked.')
//     res.status(errorStatusCode).send({
//         error: true, // special data
//         message: err.message, // error string message
//         cause: err.cause, // error option cause
//         // stack: err.stack, // error details
//     })
// }
// app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));