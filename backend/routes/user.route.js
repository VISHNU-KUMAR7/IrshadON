const router = require('express').Router();

router.post('/add', (req,res)=> {
    res.json({
        'user': 'Irshad',
        'password': 'BSDK'
    })
})

module.exports = router