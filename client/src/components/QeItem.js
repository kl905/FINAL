import React, {useContext, useEffect, useState} from "react";
import {fetchOneCompany} from "../http/CompanyAPI";
import {fetchOneUserU} from "../http/userAPI";
import {Scrollbar} from "react-scrollbars-custom";
import {fetchQe} from "../http/QEAPI";
import {Context} from "../index";

const QeItem =({uq})=>{

    return(
        <div className="SItem1">
            <div className="SItem_layout1">
                <div className="p-2">
                    <h3 className="d-flex justify-content-start">
                         Результат {uq.perc}%
                    </h3>
                    <h3 className="d-flex justify-content-start">
                        Название вакансии {uq.cname}
                    </h3>
                    <h3 className="d-flex justify-content-start">
                        Пользователь {uq.email}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default QeItem