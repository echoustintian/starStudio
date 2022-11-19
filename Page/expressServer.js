// 引入express模块
const express = require('express')

const app = express()

app.get('/',function(request,response){
  console.log(request.query)
  const Person = {
    name: "郭翔",
    sex: "男",
    github: "echoUstintian"
  }
  response.setHeader('Access-Control-Allow-Origin',"*")
  response.send(Person)
})

app.listen(3000,function(err){
  if(!err){
    console.log("expressServer启动成功")
  }else{
    console.log("expressServer启动失败")
  }
})