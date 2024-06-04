import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import WorkerItem from "./WorkerItem";
import {forEach} from "react-bootstrap/ElementChildren";

const WorkerList = observer(() => {
    const {Worker} = useContext(Context)
    let sortarr=[]
    let WITEM;
    if (Worker.selectedSoft===1){
        Worker.Work.forEach((element)=>{
            let sort=0
            if (Worker.selectedSoftGen ===0){
                sort+=1
            }
            if (Worker.selectedSoftGra ===0){
                sort+=1
            }
            if (Worker.selectedSoftStf ===0){
                sort+=1
            }
            if (Worker.selectedSoftTyp ===0){
                sort+=1
            }
            if (Worker.selectedSoftGra ===0){
                sort+=1
            }
            if (Worker.selectedSoftSal ===0){
                sort+=5
            }
            if ((element.gender === Worker.selectedSoftGen) && (Worker.selectedSoftGen!==0)){
                sort+=1
            }
            if ((element.grad === Worker.selectedSoftGra) && (Worker.selectedSoftGra!==0)){
                sort+=1
            }
            if ((element.status_f === Worker.selectedSoftStf) && (Worker.selectedSoftStf !==0)){
                sort+=1
            }
            if ((element.type_w === Worker.selectedSoftTyp) && (Worker.selectedSoftTyp !==0)){
                sort+=1
            }
            if ((element.work_e === Worker.selectedSoftGra) && (Worker.selectedSoftGra !==0)){
                sort+=1
            }
            if ((element.salary < Worker.selectedSoftSal) && (Worker.selectedSoftSal !==0)){
                sort+=5
            }
            if ((element.salary >= Worker.selectedSoftSal) && (Worker.selectedSoftSal !==0)){
                sort+=0
            }
            sortarr.push([element,sort])
        })
        sortarr.sort()
        sortarr.reverse()
    }
    if (Worker.selectedSoft!==1){
        WITEM=<Row>{Worker.Work.map(worker => <WorkerItem key={worker.id} worker={worker}/>)}</Row>
    } else {
        WITEM=<Row>{sortarr.map(worker => <WorkerItem key={worker[0].id} worker={worker[0]} gr={worker[1]}/>)}</Row>
    }


    return (
        WITEM
    );
});

export default WorkerList;