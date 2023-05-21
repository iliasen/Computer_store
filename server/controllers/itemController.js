const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const fs = require('fs')//удаление страрого изображения
const Item = require('../models/Item')
const Brand = require("../models/Brand");
const Type = require("../models/Type");

class ItemController {
    async create(req, res, next) {
        try {
            const {name, price, brand, type} = req.body
            const {img} = req.files
            const fileName = uuid.v4() + ".jpg"
            await img.mv(path.join(__dirname, '..', 'static', fileName))
            console.log(name, price, brand, type)
            const brandId = await Brand.findOne({name: brand}).lean()
            const typeId = await Type.findOne({name: type}).lean()
            console.log(brandId._id,typeId._id)

            const item = await Item.create({name, price,brandId: brandId,typeId: typeId, img: fileName});

            return res.json(item)
        } catch (e) {
            console.log(e)
            next(ApiError.internal(e.message))
        }
    }

    async getAll(req,res,next){
        try{
            const {brandId, typeId} = req.body
            const data = await Item.find({brandId, typeId})
            return res.json({data})
        }catch (e) {
            next(ApiError(e.message))
        }
    }

    async del(req,res,next){
        try{
            const {name} = req.params
            if(!name){
                next(ApiError.badRequest('Не указано имя товара'))
            }
            const item = await Item.findOne({name})
            let oldFile = path.resolve(__dirname, '..', 'static', item.img)
            fs.unlink(oldFile, (err) => {
                if (err) {
                    console.error(err)
                }
            })
           await Item.remove({name})
           res.json('Товар успешно удалён')
        }catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}
module.exports = new ItemController();