'use strict'
const express=require('express')
const PORT=6300
const app=express()
app.get('/',(req,res)=>{

    res.send('Hello World')
})
app.listen(PORT,()=>{
    console.log('Serveur demarré  PORT',PORT)
})