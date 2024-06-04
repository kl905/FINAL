import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Row} from "react-bootstrap";
import TestItem from "./TestItem";
import {postqe} from "../http/QEAPI";
import '../compstyles/btn.css'


const TestList = observer(() => {
    const {Test} = useContext(Context)
    const {User} = useContext(Context)
    const endt=()=>{
        let ans=0
        let qe=Test.QeStore.length
        Test.QeStore.forEach(dataqe=>{
            Test.AnsStore.forEach(dataan=>{
                if (dataqe.qe_ans_r===dataan.answ){
                    ans+=1
                }
            })
        })
        const formData = new FormData()
        formData.append('perc', (ans*100/qe))
        formData.append('email',User.user)
        formData.append('cname', Test.QeStore[0].tname_c)
        formData.append('companyId', Test.QeStore[0].companyId)
        formData.append('userId', User.userid)
        postqe(formData).then()
        // console.log(Test.QeStore[0].companyId)
        // console.log(User.userid)
        // console.log('ans_r',Math.ceil(ans*100/qe))
        // console.log('ans',Test.AnsStore)
        // console.log('qe_s',Test.QeStore)
        Test.setClearTestStore()
        alert('Данные отправлены')
    }
    return (
        <form>
            <Row>
                {Test.QeStore.map(test1 =>
                    <TestItem key={test1.id} test={test1}/>
                )}
            </Row>
            <div className='bt'>
                <Button  variant='outline-dark' onClick={endt}>
                    Отправить результат
                </Button>
            </div>

        </form>

    );
});

export default TestList;