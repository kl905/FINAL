import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {Col, Container, Image, Row} from "react-bootstrap";
import CWfind from "../components/componentsFunc/CWfind";
import CWstudy from "../components/componentsFunc/CWstudy";
import CWworkE from "../components/componentsFunc/CWworkE";
import CWtypeW from "../components/componentsFunc/CWtypeW";
import CWgender from "../components/componentsFunc/CWgender";
import {fetchOneWorker} from "../http/WorkerAPI";
import '../compstyles/WoorkerPstyle.css'

const Workerpage = () => {
    const [worker, setWorker] = useState({info: []})

    const {id} = useParams()


    useEffect(()=>{
        fetchOneWorker(id).then(data => setWorker(data))
        console.log(worker)
    },[])
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image style={{borderRadius:15}} width={200} height={300} src={process.env.REACT_APP_API_URL+ worker.img}/>
                </Col>
                <Col md={4}>
                    <div className="Tx">
                        <Row>
                            <h2 className="d-flex justify-content-start">
                                {worker.name}
                            </h2>
                        </Row>
                        <Row>
                            <h4>
                                {worker.salary} руб.
                            </h4>
                        </Row>
                        <h5>
                            ФИО: {worker.fio}
                        </h5>
                        <div>
                            зарплата: {worker.salary}
                        </div>
                        <div>
                            Статус поиска:{CWfind({worker})}
                        </div>
                        <div>
                            Образование: {CWstudy({worker})}
                        </div>
                        <div>
                            Требуемый опыт работы: {CWworkE({worker})}
                        </div>
                        <div>
                            Вид работы: {CWtypeW({worker})}
                        </div>
                        <div>
                            Пол: {CWgender({worker})}
                        </div>
                    </div>
                </Col>
            </Row>


            <Outlet/>
        </Container>
    );
};

export default Workerpage;