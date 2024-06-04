const {Test_tab}=require('../models/models');
const ApiError = require('../error/ApiError');
const {where} = require("sequelize");
class test_tabController{
    async create(req,res,next){
        try {
            const {test_n} = req.body
            const test_tab = await Test_tab.create({test_n})
            return res.json(test_tab)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {id}=req.query
        const test_tabs = await Test_tab.findAndCountAll(
            {where:{companyId:id}}
        )
        return res.json(test_tabs)
    }
    async getOne(req,res){
        const {id}=req.params
        const test_tabs = await Test_tab.findOne(
            //where
        )
        return res.json(test_tabs)
    }

}
module.exports = new test_tabController()