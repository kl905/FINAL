import {Button, Form, Row} from "react-bootstrap";
import React, {useContext, useRef, useState} from "react";
import {Context} from "../index";


const TestItem =({test})=>{
    const {Test} = useContext(Context)


    const checkans = (e,ans,id)=>{
        if (!(Test.AnsIdStore.includes(id))){
            Test.setAnsStore({id:id,answ:ans})
            Test.setAnsIdStore(id)
        }
    }
    return(
        <div>
            <Row className="d-flex flex-column m-3">
                <Row key={test.id}>
                    <h4>
                        {test.test_n}
                    </h4>
                    <h5>
                        {test.qe}
                    </h5>
                    <Button className="m-lg-2" variant={"outline-dark"} onClick={e=>checkans(e,`${test.qe_ans1}`,`${test.id}`)}>
                        {test.qe_ans1}
                    </Button>
                    <Button className="m-lg-2" variant={"outline-dark"} onClick={e=>checkans(e,`${test.qe_ans2}`,`${test.id}`)}>
                        {test.qe_ans2}
                    </Button>
                    <Button className="m-lg-2" variant={"outline-dark"} onClick={e=>checkans(e,`${test.qe_ans3}`,`${test.id}`)}>
                        {test.qe_ans3}
                    </Button>

                </Row>
            </Row>
        </div>
    )
}
export default TestItem;