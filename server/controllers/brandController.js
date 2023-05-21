const Brand = require('../models/Brand')
const Type = require('../models/Type')
const ApiError = require("../error/ApiError");


class brandController{
    async create(req,res,next){
        try{
            const {name, type} = req.body
            if (!name){
                next(ApiError.badRequest('Не задано имя бренда'))
            }
            const typeId = Type.findOne({type})
            const brand = new Brand({name, typeId})
            await brand.save()
            return res.json('Бренд успешно добавлен')
        }catch (e) {
            ApiError(e.message)
        }
    }

    async getBrand(req, res){
        try{
            const data = await Brand.find()
            return res.json({data})
        }catch (e) {
            ApiError(e.message)
        }
    }
    async del(req,res,next){
        try{
            const {name} = req.params
            if(!name){
                next(ApiError.badRequest('Не указано имя брэнда'))
            }
            await Brand.remove({name})
            res.json('Брэнд успешно удалён')
        }catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new brandController()