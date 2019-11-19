const express = require('express') //chama a dependencia express, pra dentro da variavel
const nunjucks = require('nunjucks')

const server = express() //o servidor vai executar o express
const videos = require("./data") //chama o data.js

server.use(express.static('public')) //pegar o que tem exemplo css da pasta public

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
}) //caminho é ir pra views

//iniciar a rota

//rota pricipal/ "/"
server.get("/", function(req, res){ //req = requisicao e res = response    
    return res.render("about")
}) 

//rota do portfolio

server.get("/portfolio", function(req, res){ //req = requisicao e res = response    
    return res.render("portfolio", { items: videos })
}) 


//iniciar o servidor
server.listen(5000, function() {
    console.log("Server is runnig") //bandera se estiver rodando 
})