import React, {useContext, useEffect} from "react";
import {Outlet, useParams} from "react-router-dom";
import TestList from "../components/TestList";
import {fetchTest} from "../http/TestAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const Testpage = observer(() => {
    const {Test}=useContext(Context)
    const {id} = useParams()
    useEffect(() => {
        fetchTest(id).then(data => {
            Test.setQeStore(data.rows)
            Test.setQeTotalCount(data.count)
        })
    }, [id])
    // console.log('Testpg',Test.QeStore)
    return (
        <div className="MainContent">
            <div className="Cont">
                <TestList/>
            </div>
            <Outlet/>
        </div>
    )
});
export default Testpage;