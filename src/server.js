const proffys = [
    {   name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "86989552244", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: 20, 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    {   name: "will Miranda",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "86989552244", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: 25, 
    weekday: [4], 
    time_from: [720], 
    time_to: [1220]
    }

]


const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject (subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding (req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    const filters = req.query  // req.query está recebendo os dados do front-end
    return res.render("study.html", {proffys, filters, subjects, weekdays}) // usando o nonjucks para passar um objeto para a pagina 
}

function pageGiveClasses (req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length != 0
    // condicional 
    if (isNotEmpty) {
        
        // add dados ao objeto proffys
        data.subject = getSubject(data.subject) // Fazendo a substituição de numero para materia respectiva
        
        proffys.push(data)

        return res.redirect("/study")
    }    
    // se não adicionar

    return res.render("give-classes.html", { subjects, weekdays })
} 

const express = require('express')
const server = express()

// importanto a lib nunjucks
const nunjucks = require('nunjucks')

// Configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// configurando arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)
