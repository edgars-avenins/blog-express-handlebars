const express = require('express')
const router = express.Router()


router.get('/central', (req, res) => {
    res.render('blog/sprintCentral', {})
})

const path = 'blog/sprints/'

router.get('/:sprintID/:blogType', (req, res) => {
    const id = req.params.sprintID
    const type = req.params.blogType
    console.log(req.params)
    res.render(path + 's' + id + type, {})
})



module.exports = router