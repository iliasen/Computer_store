const {Schema, model} = require('mongoose')

const Item = new Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    typeId: { type: Schema.Types.ObjectId, ref: 'Type',required: true },
    brandId: { type: Schema.Types.ObjectId, ref: 'Brand',required: true },
});

module.exports = model('Item', Item)

