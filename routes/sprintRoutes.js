const express = require('express')
const router = express.Router()

router.get('/central', (req, res) => {
    res.render('blog/indexBody', {})
})



module.exports = router