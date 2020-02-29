const express= require('express')
const app= express()

app.get('/',(req,res)=>{
    // res.send('hello world')
    res.send({msg:'hello world'})
})

app.listen(3000)