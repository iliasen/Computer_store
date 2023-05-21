const {Schema, model} = require('mongoose')


const Brand = new Schema({
    name: {type: String, required: true},
    typeId: {type: Schema.Types.ObjectId, ref: 'Type', required: true}
})

module.exports = model('Brand', Brand)

