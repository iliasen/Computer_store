const {Schema, model} = require('mongoose')

const Type = new Schema({
    name: {type: String, required: true}
})

module.exports = model('Type', Type)

