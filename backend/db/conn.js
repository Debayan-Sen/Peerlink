const mongoose = require('mongoose');
require('dotenv').config()

const db = `mongodb+srv://${ process.env.DB_USER_NAME }:${ process.env.DB_PASSWORD }@cluster0.c1llw.mongodb.net/${ process.env.DB_COLLECTION }?retryWrites=true&w=majority`
mongoose.connect(db).then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err)
})
