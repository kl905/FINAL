import React from 'react';
import {Button, Container, Image, Row} from "react-bootstrap";
import '../compstyles/SCompanyItem.css'
import Cgraph from "./componentsFunc/Cgraph";
import Cstudy from "./componentsFunc/Cstudy";
import CtypeW from "./componentsFunc/CtypeW";
import CworkE from "./componentsFunc/CworkE";



const AccCompanyItem = ({ucompany}) => {


    return (
        <div className="SItem1">
            <div className="SItem_layout1">
                <div className="p-2">
                    <h3 className="d-flex justify-content-start">
                        {ucompany.name}
                    </h3>
                    <h3>
                        {ucompany.salary} руб.
                    </h3>
                    <h5>
                        {ucompany.name_c}
                    </h5>
                    <div>
                        График работы: {Cgraph(ucompany.graph)}
                    </div>
                    <div>
                        Требуемое образование: {Cstudy(ucompany.study)}
                    </div>
                    <div>
                        Требуемый опыт работы: {CworkE(ucompany.work_e)}
                    </div>
                    <div>
                        Вид работы: {CtypeW(ucompany.type_w)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccCompanyItem;