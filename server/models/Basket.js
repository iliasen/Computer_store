const {Schema, model} = require('mongoose')

const Basket = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('Basket', Basket)

