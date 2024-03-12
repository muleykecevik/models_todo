"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
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

module.exports = Todo //baska b ir dosyaya taasidikintan sonra export ediyoruz

/* ------------------------------------------------------- */