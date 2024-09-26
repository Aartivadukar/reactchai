const mongoose=require('mongoose');
require("dotenv").config();

const dbConnection=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("dataBase connect succfully")})
    .catch((erro)=>{
        console.log("database not connect");
        console.log(erro.massage);
        process.exit(1);
    });
}

module.exports=dbConnection;
