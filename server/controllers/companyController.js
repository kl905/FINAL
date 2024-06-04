const uuid = require('uuid');
const path = require('path');
const {Company, Test_tab,User}=require('../models/models');
const ApiError = require('../error/ApiError');
const {Sequelize} = require("sequelize");
const { Op } = require('sequelize')
class companyController{
    async create(req,res,next){
        try {
            let {name_c,name,salary,graph,study,work_e,type_w,userId,test} = req.body
            const {img} = req.files
            let fileName=uuid.v4()+".jpg"//генерация рандомного имя файла
            img.mv(path.resolve(__dirname/*путь до текущей папки*/,'..','static',fileName))//отправка картинки в папку
            const company = await Company.create({name_c,name,salary,graph,study,work_e,type_w,userId, img:fileName})

            if (test){
                test = JSON.parse(test)
                test.forEach(t =>
                    Test_tab.create({
                        test_n: t.test_n,
                        companyId: Number(company.id),
                        tname_c:company.name,
                        qe:t.qe,
                        qe_ans_r:t.qe_ans_r,
                        qe_ans1:t.qe_ans1,
                        qe_ans2:t.qe_ans2,
                        qe_ans3:t.qe_ans3,
                    })
                )
            }
                        return res.json(company)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {page,limit,salary_w,study_w,graph_w,work_e_w,type_w_w}=req.query
        console.log('FK',page,limit,salary_w,study_w,graph_w,work_e_w,type_w_w)
        page = Number(page) || 1
        limit = Number(limit) || 9
        salary_w = salary_w || -1
        graph_w = graph_w || 0
        study_w = study_w || 0
        work_e_w = work_e_w || 0
        type_w_w = type_w_w || 0
        let zerog = [100]
        let zeros = [100]
        let zerow = [100]
        let zerot = [100]
        let offset = page * limit - limit
        if (graph_w==0) {
            zerog = [1,2,3,4,5,6,7,8,9]
        }
        if (study_w==0){
            zeros = [1,2,3,4,5,6,7,8,9]
        }
        if (work_e_w==0) {
            zerow = [1,2,3,4,5,6,7,8,9]
        }
        if (type_w_w==0){
            zerot = [1,2,3,4,5,6,7,8,9]
        }

        const companies = await Company.findAndCountAll({where:Sequelize.and(
                Sequelize.or({salary: {[Op.gte]: salary_w} },{salary:0}),
                Sequelize.or({graph:graph_w},{graph:{[Op.in]:zerog}}),
                Sequelize.or({study:study_w},{study:{[Op.in]:zeros}}),
                Sequelize.or({work_e:work_e_w},{work_e:{[Op.in]:zerow}}),
                Sequelize.or({type_w:type_w_w},{type_w:{[Op.in]:zerot}})),limit,offset})
        console.log(companies)
        return res.json(companies)
    }

    async getOne(req,res){
        const {id} = req.params
        const company = await Company.findOne(
            {
                where:{id}
            })
        return res.json(company)
    }


    async getAlluser(req,res){
        let {email} = req.query
        email=Number(email)
        console.log(email)
        const company = await Company.findAll(
            {
                where:{userId:email},
            })
        return res.json(company)
    }

}
module.exports = new companyController()