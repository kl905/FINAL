{/*const uuid = require('uuid');
const path = require('path');
const {Company_f}=require('../models/models');
const ApiError = require('../error/ApiError');
const {Sequelize} = require("sequelize");
const { Op } = require('sequelize')
class company_fController{
    async create(req,res,next){
        try {
            const {salary,graph,study,work_e,type_w,companyId,testTabId,vacansionId} = req.body
            const {img} = req.files
            let fileName=uuid.v4()+".jpg"//генерация рандомного имя файла
            img.mv(path.resolve(__dirname,'..','static',fileName))//отправка картинки в папку
            const company_f = await Company_f.create({salary,graph,study,work_e,type_w,companyId,testTabId,vacansionId,img:fileName})
            return res.json(company_f)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {salary,graph,study,work_e,type_w,page,limit,salary_w,study_w,graph_w,work_e_w,type_w_w}=req.query
        page = Number(page) || 1
        limit = Number(limit) || 9
        salary_w = salary_w || -1
        graph_w = graph_w || 0
        study_w = study_w || 0
        work_e_w = work_e_w ||0
        type_w_w = type_w_w ||0
        let zerog = []
        let zeros = []
        let zerow = []
        let zerot = []
        let offset = page * limit - limit
        if (graph_w==0) {
            zerog = [1,2,3,4,5,6]
        }
        if (study_w==0){
            zeros = [1,2,3,4,5,6]
        }
        if (work_e_w==0) {
            zerow = [1,2,3,4,5,6]
        }
        if (type_w_w==0){
            zerot = [1,2,3,4,5,6]
        }
        const companies_f = await Company_f.findAndCountAll({where:Sequelize.and(
                Sequelize.or({salary: {[Op.gte]: salary_w} },{salary:0}),
                Sequelize.or({graph:graph_w},{graph:{[Op.in]:zerog}}),
                Sequelize.or({study:study_w},{study:{[Op.in]:zeros}}),
                Sequelize.or({work_e:work_e_w},{work_e:{[Op.in]:zerow}}),
                Sequelize.or({type_w:type_w_w},{type_w:{[Op.in]:zerot}})),limit,offset})
        console.log(companies_f)
        return res.json(companies_f)
    }


}
module.exports = new company_fController()*/}