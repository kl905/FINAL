import React from 'react';
import {Button, Container, Image, Row} from "react-bootstrap";
import '../compstyles/SCompanyItem.css'
import B from '../assets/A3.jpg'
import {useNavigate} from "react-router-dom";
import {COMPANYPAGE_ROUTE} from "../utils/consts";
import Cgraph from "./componentsFunc/Cgraph";
import Cstudy from "./componentsFunc/Cstudy";
import CtypeW from "./componentsFunc/CtypeW";
import CworkE from "./componentsFunc/CworkE";
import * as Process from "process";
//graph:0,study:0,workE:0,typeW:0


const CompanyItem = ({company}) => {
    let navigate=useNavigate()
    function handleclick({company}){
        navigate(COMPANYPAGE_ROUTE+'/'+ company.id)
    }

    return (
        <div className="SItem">
            <div className="SItem_layout">
                <div className="p-2">
                    <h2 className="d-flex justify-content-start">
                        {company.name}
                    </h2>
                    <h4>
                        {company.salary} руб.
                    </h4>
                    <h5>
                        {company.name_c}
                    </h5>
                    <div>
                        График работы: {Cgraph(company.graph)}
                    </div>
                    <div>
                        Требуемое образование: {Cstudy(company.study)}
                    </div>
                    <div>
                        Требуемый опыт работы: {CworkE(company.work_e)}
                    </div>
                    <div>
                        Вид работы: {CtypeW(company.type_w)}
                    </div>
                </div>
                <div className="justify-content-end p-2 mt-4">
                    <Container>
                        <Row className="mb-2">
                            <div style={{borderRadius:"15px"}}>
                                <Image className="SImg" src={process.env.REACT_APP_API_URL + company.img} rounded/>
                            </div>
                        </Row>
                        <Row>
                            <Button className="SBut" style={{cursor:"pointer"}} variant="outline-dark" onClick={()=>handleclick({company})} >Подробнее</Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default CompanyItem;