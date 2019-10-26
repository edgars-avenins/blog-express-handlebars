const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('blog/indexBody', {})
})

router.get('/contact', (req, res) => {
    res.render('blog/contact', {})
})

router.get('/aboutme', (req, res) => {
    res.render('blog/aboutMe', {})
})

router.get('/featured', (req, res) => {
    res.render('blog/featured', {})
})


module.exports = router