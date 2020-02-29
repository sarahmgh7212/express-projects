//https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+3T2018/courseware/1e95019f-b0fe-1ae9-fcf4-4e35d66aa371/73b7f1e5-3b59-4d2b-825c-8dff9a988cbf/?child=first
const express= require('express')
const app= express()

app.use((req,res,next) =>{
    console.log(`${req.method}:${req.url}`)
    next()
})

app.use((req,res,next) =>{
   if(req.query.api_key){
       next()

   }
    else{
        res.status(401).send({msg:'Not authorized'})
    }
})




app.get('/',(req,res)=>{
    // res.send('hello world')
    res.send({msg:'hello world'})
})

app.get('/accounts',(req,res,next)=>{
    console.log('accounts inline middleware')
    next()
}
,(req,res)=>{
    
    res.send({msg:'accounts'})
})

app.get('/errors',(req,res,next)=>{
    console.log('accounts inline middleware')
    next(new Error('oops'))
}
,(req,res)=>{
    
    res.send({msg:'accounts'})
})

app.get('/transactions',(req,res)=>{
    
    res.send({msg:'transactions'})
})

app.use((error,req,res,next) =>{
    res.status(500).send(error)
})
//# curl localhost:3000/transactions -i  -->result: "not authorized"
//# curl localhost:3000/transactions?api_key=1234 -i --> result:"transactions"
//# curl localhost:3000/accounts?api_key=1234 -i --> result:"accounts"  in the GET:/accounts?api_key=123 --> acounts inline middleware
app.listen(3000)