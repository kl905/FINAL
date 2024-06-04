import React, {useContext} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import '../compstyles/SCompanyItem.css'
import CWstudy from "./componentsFunc/CWstudy";
import CWtypeW from "./componentsFunc/CWtypeW";
import CWworkE from "./componentsFunc/CWworkE";
import CWfind from "./componentsFunc/CWfind";
import {useNavigate} from "react-router-dom";
import {WORKERPAGE_ROUTE} from "../utils/consts";
import {Context} from "../index";
import ProgressBar from 'react-bootstrap/ProgressBar';
import {observer} from "mobx-react-lite";


const WorkerItem = observer(({worker,gr}) => {
    let navigate=useNavigate()
    function handleclick({worker}){
        navigate(WORKERPAGE_ROUTE+'/'+ worker.id)
    }
    const {Worker} =useContext(Context)
    const SOFT=Worker.selectedSoft
    let GRADE;
    if (SOFT===1){
        if (gr*10<=25){
            GRADE=<div>Оценка: <ProgressBar variant="danger" now={gr*10} /></div>
        }
        if ((gr*10> 25) && (gr*10<=50)){
            GRADE=<div>Оценка: <ProgressBar variant="warning" now={gr*10} /></div>
        }
        if ((gr*10> 50) && (gr*10<=75)){
            GRADE=<div>Оценка: <ProgressBar variant="info" now={gr*10} /></div>
        }
        if (gr*10> 75 ){
            GRADE=<div>Оценка: <ProgressBar variant="success" now={gr*10} /></div>
        }
    }

    return (
        <div className="SItem">
            <div className="SItem_layout">
                <div className="p-2">
                    <h2 className="d-flex justify-content-start">
                        {worker.name}
                    </h2>
                    <h4>
                        {worker.salary} руб.
                    </h4>

                    <div>
                        Статус поиска:{CWfind(worker.status_f)}
                    </div>
                    <div>
                        Образование: {CWstudy(worker.grad)}
                    </div>
                    <div>
                        Опыт работы: {CWworkE(worker.work_e)}
                    </div>
                    <div>
                        Вид работы: {CWtypeW(worker.type_w)}
                    </div>
                    {GRADE}
                </div>
                <div className="justify-content-end p-2 mt-5">
                    <Container>
                        <Row className="mb-5 mt-4">

                        </Row>
                        <Row>
                            <Button className="SBut1" style={{cursor:"pointer"}} variant="outline-dark" onClick={()=>handleclick({worker})}>Подробнее</Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
});

export default WorkerItem;