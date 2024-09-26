const express=require('express');
require('dotenv').config();
const dataBase=require("../Bloging App/config/dataBase");
const router=require("../Bloging App/routes/postRoutes");
const PORT=process.env.PORT

const app=express();
app.use(express.json());
app.use(router);

app.listen(PORT,()=>{
    console.log(`The server run on port ${PORT}`);
});
app.get("/",(req,res)=>{
    res.send('<h1>this is home page and first page</h1>')
})

dataBase();
