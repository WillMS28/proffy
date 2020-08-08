//Servidor
const express = require('express')
const server = express()

const { 
    pageLanding,
    pageStudy, 
    pageGiveClasses,
    saveClasses 
} = require('./pages')

// importanto a lib nunjucks
const nunjucks = require('nunjucks')

// Configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({ extended: true }))
// configurando arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
.listen(5500)
