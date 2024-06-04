import React, {useContext, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import WorkerList from "../components/WorkerList";
import WFilterlist from "../components/Wfilterlist";
import {Context} from "../index";
import {fetchWorker} from "../http/WorkerAPI";
import {observer} from "mobx-react-lite";
import WPages from "../components/WPages";


const Workers = observer (() => {
    const{Worker}=useContext(Context)
    useEffect(() => {
        fetchWorker(Worker.page,10,Worker.selectedSal, Worker.selectedGen, Worker.selectedGra, Worker.selectedWor, Worker.selectedTyp,Worker.selectedStf).then(data => {
            Worker.setWork(data.rows)
            Worker.setTotalCount(data.count)
        })
    }, [Worker.selectedSal, Worker.selectedGen, Worker.selectedGra, Worker.selectedWor,Worker.selectedTyp,Worker.selectedStf,Worker.page])

    return (
        <div>
            <div className="MainContent">
                <div className="Filtwrapper">
                    <WFilterlist/>
                </div>
                <div className="Cont">
                    <WorkerList/>
                    <WPages/>
                </div>
                <Outlet/>
            </div>
        </div>
    );
});

export default Workers;