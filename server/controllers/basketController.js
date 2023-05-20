const Basket = require('../models/Basket')
const BasketItem = require('../models/BasketItems')
const Item = require('../models/Item')
const {ApiError}= require('../error/ApiError')

class BasketController{

    async addItem(req,res,next){
        try{
            const {userId,itemId} = req.params
            console.log('1', userId)
            const basket = await Basket.findOne({userId})
            if (!basket) {
                return next(ApiError.internal("Ошибка. не задан id пользователя(Корзина не найдена)"))
            }

            const item = await Item.findOne({_id: itemId})
            console.log(item)
            if (!item) {
                return next(ApiError.internal("Ошибка. Заданный товар не найден"))
            }
            await BasketItem.create({basketId: basket, itemId: item})
            return res.json({massage: "товар добавлен к корзину"})
        }catch (e) {
            console.log(e)
            next(ApiError.internal(e.message))
        }
    }

    async getItems(req,res,next){
        const {userId} = req.params
        const basket = await Basket.findOne({userId: userId})
        if(!basket){
            next(ApiError.badRequest('Не задан id пользователя'))
        }
        const basketItem = await BasketItem.find({basketId: basket._id})
        if(!basketItem){
            next(ApiError.badRequest('Корзина не найдена'))
        }
        return res.json(basketItem)
    }

    async delItem(req,res,next){
        const {userId, itemId} = req.params
        const basket = await Basket.findOne({userId})
        if(!basket){
            next(ApiError.badRequest('Не задан id пользователя'))
        }
        const basketItem = await BasketItem.findOneAndDelete({basketId: basket._id, itemId})
        if(!basketItem){
            next(ApiError.badRequest('Корзина не найдена или товар не укзан'))
        }
        return res.json({ message: 'Тавар удалён' })
    }
}
module.exports = new BasketController();