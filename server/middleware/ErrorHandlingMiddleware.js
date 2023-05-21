const ApiError = require('../error/ApiError')

module.exports= function (err,req,res){
    if (err instanceof ApiError){
        return res.status(err.status).json({massage: err.massage})
    }
    return res.status(500).json({massage: "Не предвиденная ошибка"})
}