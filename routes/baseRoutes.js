const express = require('express')
const router = express.Router()

const bool = {
    passIf: true
}

router.get('/', (req, res) => {
    res.render('blog/indexBody', bool)
})

router.get('/contact', (req, res) => {
    res.render('blog/contact', bool)
})

router.get('/aboutme', (req, res) => {
    res.render('blog/aboutMe', bool)
})

router.get('/featured', (req, res) => {
    res.render('blog/featured', bool)
})


module.exports = router