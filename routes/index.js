const router = require('express').Router();
const burger = require('../config/orm');


router.get('/', (req, res) => {
    //do some database stuff, res.render('view', {})
    burger.all('burgers', function (result) {
        console.log(result)
        res.render('index', { burgers: result })
    })
})

router.put('/burgers/:id', ({ body, params }, res) => {
    console.log(body.devoured)
    burger.update(params.id, body.devoured, (result) => {
        console.log(result)
        res.json('ok')
    })
})

router.post('/burgers', ({ body }, res) => {
    burger.create(body, function (result) {
        console.log(result);
        res.json('ok')
    })
})

module.exports = router