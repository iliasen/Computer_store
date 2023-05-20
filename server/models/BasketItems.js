const {Schema, model} = require('mongoose')

const BasketItems = new Schema({
    basketId: {type: Schema.Types.ObjectId, ref: 'Basket'},
    itemId: {type: Schema.Types.ObjectId, ref: 'Item'},
})

module.exports = model('BasketItems', BasketItems)
