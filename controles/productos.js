const model = require('../models/productos')

exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
        res.send(
            {
                docs
            })
    }) 
} 


exports.insertData = (req, res) => {
    const data = req.body
    res.send({ data })
    model.create(data, (err, docs)=> {
        res.send ({data: docs})
    })


 }