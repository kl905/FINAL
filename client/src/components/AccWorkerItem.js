import CWfind from "./componentsFunc/CWfind";
import CWstudy from "./componentsFunc/CWstudy";
import CWworkE from "./componentsFunc/CWworkE";
import CWtypeW from "./componentsFunc/CWtypeW";
import React from "react";

const AccWorkerItem =({uworker})=>{
    return(
        <div className="SItem1">
            <div className="SItem_layout1">
                <div className="p-2">
                    <h3 className="d-flex justify-content-start">
                        {uworker.name}
                    </h3>
                    <h3>
                        Желаемая зарплата:{uworker.salary} руб.
                    </h3>
                    <div>
                        Статус поиска:{CWfind(uworker.status_f)}
                    </div>
                    <div>
                        Образование: {CWstudy(uworker.grad)}
                    </div>
                    <div>
                        Опыт работы: {CWworkE(uworker.work_e)}
                    </div>
                    <div>
                        Вид работы: {CWtypeW(uworker.type_w)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccWorkerItem
