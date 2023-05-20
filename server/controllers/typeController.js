const Type = require('../models/Type')
const ApiError = require("../error/ApiError");


class typeController{
    async create(req,res,next){
        try{
            const {name} = req.body
            if (!name){
                next(ApiError.badRequest('Не задано имя типа'))
            }
            const type = new Type({name})
            await type.save()
            return res.json('Тип успешно добавлен')
        }catch (e) {
            ApiError(e.message)
        }
    }

    async getType(req, res){
        try{
            const data = await Type.find()
            return res.json({data})
        }catch (e) {
            ApiError(e.message)
        }
    }

    async del(req,res,next){
        try{
            const {name} = req.params
            if(!name){
                next(ApiError.badRequest('Не указано имя типа'))
            }
            await Type.remove({name})
            res.json('Тип успешно удалён')
        }catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new typeController()