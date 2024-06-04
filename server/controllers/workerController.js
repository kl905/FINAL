const {Worker}=require('../models/models');
const ApiError = require('../error/ApiError');
const {Sequelize} = require("sequelize");
const { Op } = require('sequelize');
const uuid = require("uuid");
const path = require("path");
class workerController{
    async create(req,res,next){
        try {
            const {fio,name,salary,work_e,grad,type_w,status_f,gender,userId} = req.body
            const {img} = req.files
            let fileName=uuid.v4()+".jpg"//генерация рандомного имя файла
            img.mv(path.resolve(__dirname/*путь до текущей папки*/,'..','static',fileName))
            const worker = await Worker.create({fio,name, salary,work_e,grad,type_w,status_f,gender,userId, img:fileName})
            return res.json(worker)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {page,limit,salary_w,gender_w,grad_w,work_e_w,type_w_w, status_f_w}=req.query
        page = Number(page) || 1
        limit = Number(limit) || 9
        salary_w = salary_w || -1
        work_e_w = work_e_w || 0
        grad_w = grad_w || 0
        type_w_w = type_w_w ||0
        status_f_w = status_f_w || 0
        gender_w = gender_w || 0
        let zerog = [100]
        let zerot = [100]
        let zeros = [100]
        let zeroge = [100]
        let zerow = [100]
        let offset = page * limit - limit

        if (work_e_w==0) {
            zerow = [1,2,3,4,5,6,7,8,9]
        }
        if (grad_w==0){
            zerog = [1,2,3,4,5,6,7,8,9]
        }
        if (type_w_w==0) {
            zerot = [1,2,3,4,5,6,7,8,9]
        }
        if (status_f_w==0){
            zeros = [1,2,3,4,5,6,7,8,9]
        }
        if (gender_w==0){
            zeroge = [1,2]
        }
        const workers = await Worker.findAndCountAll({where:Sequelize.and(
                Sequelize.or({salary: {[Op.gte]: salary_w} },{salary:0}),
                Sequelize.or({work_e:work_e_w},{work_e:{[Op.in]:zerow}}),
                Sequelize.or({grad:grad_w},{grad:{[Op.in]:zerog}}),
                Sequelize.or({type_w:type_w_w},{type_w:{[Op.in]:zerot}}),
                Sequelize.or({status_f:status_f_w},{status_f:{[Op.in]:zeros}}),
                Sequelize.or({gender:gender_w},{gender:{[Op.in]:zeroge}})),limit,offset})
        console.log(workers)
        return res.json(workers)
    }
    async getOne(req,res) {
        const {id} = req.params
        const worker = await Worker.findOne(
            {
                where: {id}
            })
        console.log('worker back controller',worker)
        return res.json(worker)
    }
    async getAlluser(req,res){
        let {email} = req.query
        email=Number(email)
        console.log(email)
        const company = await Worker.findAll(
            {
                where:{userId:email},
            })
        return res.json(company)
    }
}

module.exports = new workerController()