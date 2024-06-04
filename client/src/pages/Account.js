import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {Outlet, useParams} from "react-router-dom";
import {fetchUserCompany} from "../http/CompanyAPI";
import {fetchUserWorker} from "../http/WorkerAPI";
import { Scrollbar } from 'react-scrollbars-custom';
import AccWorkerItem from "../components/AccWorkerItem";
import AccCompanyItem from "../components/AccCompItem";
import CreateCompany from "../components/CreateCompany";
import CreateWorker from "../components/CreateWorker";
import {fetchQe} from "../http/QEAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import QeItem from "../components/QeItem";



const Account = observer(() => {

    const {Company}=useContext(Context)
    let windowInnerWidth = document.documentElement.clientWidth
    let windowInnerHeight = document.documentElement.clientHeight
    let WW=Math.ceil(windowInnerWidth/100)*45
    let WI=Math.ceil(windowInnerHeight/100)*30
    let cid=[]
    const {email} = useParams()
    const [companyVisible, setCompanyVisible] = useState(false)
    const [workerVisible, setWorkerVisible] = useState(false)
    const [ucompany, setUcompany] = useState([])
    const [uworker, setUworker] = useState([])
    const [uqe, setUqe] = useState([])

    useEffect(()=>{
        fetchUserCompany(email).then(data => setUcompany(data))
        fetchUserWorker(email).then(data => setUworker(data))
        fetchQe(email).then(data => setUqe(data))
    },[])




    return (
        <div>
            <Container>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setWorkerVisible(true)}
                >
                    Добавить анкету

                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setCompanyVisible(true)}
                >
                    Добавить вакансию
                </Button>

                <CreateCompany usid={email} show={companyVisible} onHide={() => setCompanyVisible(false)}/>
                <CreateWorker usid={email} show={workerVisible} onHide={() => setWorkerVisible(false)}/>

                <div>
                    <h1>Вакансии</h1>
                        <Scrollbar style={{width: WW, height: WI }}>
                            {ucompany.map(uc => <AccCompanyItem key={uc.id} ucompany={uc}/>)}
                        </Scrollbar>
                    <h1>Анкеты</h1>
                        <Scrollbar style={{width: WW, height: WI }}>
                            {uworker.map(uw => <AccWorkerItem key={uw.id} uworker={uw}/>)}
                        </Scrollbar>
                    <h1>Отклики</h1>
                    <Scrollbar style={{width: WW, height: WI }}>
                        {uqe.map(uw => <QeItem key={uw.id} uq={uw}/>)}
                    </Scrollbar>

                </div>

            </Container>
            <Outlet/>
        </div>
    );
});

export default Account;