const User = require('../models/User')
const Role = require('../models/Role')
const Basket = require('../models/Basket')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')
const {secret} = require("../config")
const ApiError = require("../error/ApiError");

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"} )
}

class authController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                next(ApiError.badRequest("Пустые параметы"))
            }
            const {username, password} = req.body;
            const candidate = await User.findOne({username})
            if (candidate) {
                next(ApiError.badRequest("Пользователь с таким именем уже существует"))
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: "USER"})
            const user = new User({username, password: hashPassword, roles: [userRole.value]})
            await user.save()

            const userId = await User.findOne({username})
            await Basket.create({userId: userId})

            return res.json({message: "Пользователь успешно зарегистрирован"})
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest('Ошибка регистарции'))
        }
    }

    async login(req, res, next) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                next(ApiError.badRequest("Пользователь с таким именем не найден"))
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                next(ApiError.badRequest("Не верный параль!"))
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest("Ошибка авторизации"))
        }
    }

    async getUsers(req, res) {
        try {
            // const userRole = new Role()
            // const adminRole = new Role({value: 'ADMIN'})
            // await userRole.save()
            // await adminRole.save()
            // res.json('good')


            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new authController()