
//https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+3T2018/courseware/1e95019f-b0fe-1ae9-fcf4-4e35d66aa371/0a606aa3-4a8f-bec7-7718-8532f3eb1f20/?activate_block_id=block-v1%3AMicrosoft%2BDEV283x%2B3T2018%2Btype%40sequential%2Bblock%400a606aa3-4a8f-bec7-7718-8532f3eb1f20
const express = require('express') 
const bodyParser = require('body-parser')
let app = express() 
app.use(bodyParser.json())



let profile={}
app.get('/profile', (req, res)=>{
  res.send(profile)
})
app.post('/profile', (req, res) => {
  profile = req.body
  console.log('created', profile)
  res.sendStatus(201)
})
app.put('/profile', (req, res)=>{
  Object.assign(profile, req.body)
  console.log('updated', profile)
  res.sendStatus(204)
})
app.delete('/profile', (req, res)=>{
  profile ={}
  console.log('deleted', profile)
  res.sendStatus(204)
})
 //#curl localhost:3000/profile -i
app.listen(3000)