const express = require("express")
const app = express()
const port = 5000
const translation = require("./translations.json")

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.get('/', (req, res) => {
    res.render('fr', {
        title : translation.fr.title,
        pageTitle : translation.fr.pageTitle
    })
})

app.get('/:lang?', (req, res) => {
    const {lang} = req.params
    if (lang === 'fr'){
        res.render('fr', {
            title : translation.fr.title,
            pageTitle : translation.fr.pageTitle
        })
        
    }
    if (lang === 'en'){
        res.render('en',{
            title : translation.en.title,
            pageTitle : translation.en.pageTitle
        })
    }
    if (lang ==='es'){
        res.render('es', {
            title : translation.es.title,
            pageTitle : translation.es.pageTitle
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})