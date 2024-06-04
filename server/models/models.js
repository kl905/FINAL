const sequelize = require('../db')
const {DataTypes}=require('sequelize')
/*_e опыт работы
* _n название
* Весь этот файл инзициализация связей в бд
* */

// Блок инициализации таблиц из бд
//Сделать 1 to many для company и worker
const User = sequelize.define('user',{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, allowNull: false},
    password:{type: DataTypes.STRING, allowNull: false},
    role:{type: DataTypes.STRING, defaultValue: "USER"},
    created_at:{type: DataTypes.DATE},
    updated_at:{type: DataTypes.DATE},
    deleted_at:{type: DataTypes.DATE, allowNull:true}
});

const Company = sequelize.define('company',{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    name_c:{type: DataTypes.STRING, allowNull: false},
    name:{type: DataTypes.STRING, allowNull: false},
    salary:{type: DataTypes.INTEGER, allowNull: false},
    graph:{type: DataTypes.INTEGER, allowNull: false},
    study:{type: DataTypes.INTEGER, allowNull: false},
    work_e:{type: DataTypes.INTEGER, allowNull: false},
    type_w:{type: DataTypes.INTEGER, allowNull: false},
    img:{type: DataTypes.STRING, allowNull: false},
    created_at:{type: DataTypes.DATE},
    updated_at:{type: DataTypes.DATE},
    deleted_at:{type: DataTypes.DATE, allowNull:true}
});

const Test_tab = sequelize.define('test_tab',{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    test_n:{type: DataTypes.STRING, allowNull: false},
    tname_c:{type: DataTypes.STRING, allowNull: false},
    qe:{type: DataTypes.STRING, allowNull: false},
    qe_ans_r:{type: DataTypes.STRING, allowNull: false},
    qe_ans1:{type: DataTypes.STRING, allowNull: false},
    qe_ans2:{type: DataTypes.STRING, allowNull: false},
    qe_ans3:{type: DataTypes.STRING, allowNull: false},
    created_at:{type: DataTypes.DATE},
    updated_at:{type: DataTypes.DATE},
    deleted_at:{type: DataTypes.DATE, allowNull:true}

});
const Qe_tab = sequelize.define('qe_tab',{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    perc:{type: DataTypes.INTEGER, allowNull: false},
    email:{type: DataTypes.STRING, allowNull: false},
    cname:{type: DataTypes.STRING, allowNull: false},
});


const Worker = sequelize.define("worker",{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    fio:{type: DataTypes.STRING, allowNull: false},
    name:{type: DataTypes.STRING, allowNull: false},
    salary:{type: DataTypes.INTEGER, allowNull: false},
    work_e:{type: DataTypes.INTEGER, allowNull: false},
    grad:{type: DataTypes.INTEGER, allowNull: false},
    type_w:{type: DataTypes.INTEGER, allowNull: false},
    status_f:{type: DataTypes.INTEGER, allowNull: false},
    gender:{type: DataTypes.INTEGER, allowNull: false},
    img:{type: DataTypes.STRING, allowNull: false},
    created_at:{type: DataTypes.DATE},
    updated_at:{type: DataTypes.DATE},
    deleted_at:{type: DataTypes.DATE, allowNull:true}
});





//Блок связей из бд
User.hasMany(Worker,{as:'USWO', foreignKey:'userId'}); //User имеет связь 1к1 с Worker
Worker.belongsTo(User)  // worker подчиняется user

User.hasMany(Company, {as:'USCO', foreignKey:'userId'}); //User имеет связь 1 к 1 с Company
Company.belongsTo(User) // Company подчиняется User

Company.hasMany(Test_tab,{as: 'COTE', foreignKey:'companyId'}); //Company имеет связь 1 к many с Test_tab
Test_tab.belongsTo(Company) //Test_tab подчиняется  Company

User.hasMany(Qe_tab, {as:'USQE', foreignKey:'userId'}); //User имеет связь 1 к many с Qe_tab
Qe_tab.belongsTo(User) // Qe_tab подчиняется User

Company.hasMany(Qe_tab, {as:'COQE', foreignKey:'companyId'}); //Test_tab имеет связь 1 к many с Qe_tab
Qe_tab.belongsTo(Company) // Qe_tab подчиняется Test_tab



module.exports = {
    User,
    Worker,
    Company,
    Test_tab,
    Qe_tab

}

//Конец блока
