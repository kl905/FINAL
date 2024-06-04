const {Qe_tab, Company, User}=require('../models/models');
const ApiError = require('../error/ApiError');
const {where, Sequelize} = require("sequelize");
const { Op } = require('sequelize')


class qe_tabController{
    async create(req,res,next){
        try {
            const {perc, email, cname,companyId, userId} = req.body
            const qe_tab = await Qe_tab.create({perc, email,cname, companyId,userId})
            return res.json(qe_tab)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {cid} = req.query
        //'SELECT qe_tabs.perc, qe_tabs.email, qe_tabs.cname FROM users, companies, qe_tabs WHERE users.id = 9 and users.id=companies.userId and companies.id=qe_tabs.companyId').then(results => {
        //             console.log(results);
        const qe_tabs = await Qe_tab.findAll({
                where:{},
                include:[{
                    model:Company,
                    where: {userId:cid},
                }]
        }
        );
        return res.json(qe_tabs)
    }

}
module.exports = new qe_tabController()