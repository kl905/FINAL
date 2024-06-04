import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Col, Form, Row} from "react-bootstrap";
import { Scrollbar } from 'react-scrollbars-custom';
import '../compstyles/Modals.css'
import {observer} from "mobx-react-lite";
import {createCompany} from "../http/CompanyAPI";
import {forEach} from "react-bootstrap/ElementChildren";
//import {createBrand, createType} from "../../http/deviceAPI";

const CreateCompany = observer(({show, onHide,usid}) => {
    let windowInnerWidth = document.documentElement.clientWidth
    let windowInnerHeight = document.documentElement.clientHeight
    let WW=Math.ceil(windowInnerWidth/100)*55
    let WI=Math.ceil(windowInnerHeight/100)*80


    const [file, setFile] = useState(null)
    const [value, setValue] = useState('')
    const [nick,setNick]=useState('')
    const [testn, setTestn]=useState('')
    const [saitem, setsaItem] = useState('');
    const [gritem, setgrItem] = useState({ Gr: "", another: "another" });
    const [stitem, setstItem] = useState({ St: "", another: "another" });
    const [tyitem, settyItem] = useState({ Ty: "", another: "another" });
    const [weitem, setweItem] = useState({ We: "", another: "another" });

    const [test, setTest] = useState([])

    const { Gr } = gritem;
    const { St } = stitem;
    const { Ty } = tyitem;
    const { We } = weitem;


    const addTest = () => {
        setTest([...test, {test_n: '', qe: '', qe_ans_r: '',qe_ans1: '',qe_ans2: '',qe_ans3: '', number: Date.now()}])
    }
    const removeTest = (number) => {
        setTest(test.filter(i => i.number !== number))
    }
    const changeTest = (key, value, number) => {
        setTest(test.map(i => i.number === number ? {...i, [key]: value} : i))
    }


    const handleChangeGr = e => {
        e.persist();


        setgrItem(prevState => ({
            ...prevState,
            Gr: e.target.value
        }));
    };

    const handleChangeSt = e => {
        e.persist();


        setstItem(prevState => ({
            ...prevState,
            St: e.target.value
        }));
    };
    const handleChangeTy = e => {
        e.persist();


        settyItem(prevState => ({
            ...prevState,
            Ty: e.target.value
        }));
    };
    const handleChangeWe = e => {
        e.persist();


        setweItem(prevState => ({
            ...prevState,
            We: e.target.value
        }));
    };


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addCompany = () => {
        if (testn!=='' && nick!=='' && value!=='' && saitem!=='' && Gr!=='' && St!=='' && We!==''&& Ty!=='' && file!== null && test !==[]){
            test.forEach((data)=>data.test_n=testn)
            const formData = new FormData()
            formData.append('name_c', nick)
            formData.append('name', value)
            formData.append('salary', Number(saitem))
            formData.append('graph', Number(Gr))
            formData.append('study', Number(St))
            formData.append('work_e', Number(We))
            formData.append('type_w', Number(Ty))
            formData.append('userId', usid)
            formData.append('img', file)
            formData.append('test', JSON.stringify(test))
            createCompany(formData).then(data => onHide())
            setValue('')
            setNick('')
            setFile(null)
            setTestn('')
            setsaItem('');
            setTest([])
            setgrItem({ Gr: "", another: "another" });
            setstItem({ St: "", another: "another" });
            settyItem({ Ty: "", another: "another" });
            setweItem({ We: "", another: "another" });
        } else{
            alert('Заполнены не все поля')
        }



    }
    return (
        <Modal
            dialogClassName="ModalC"
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить вакансию
                </Modal.Title>
            </Modal.Header>
            <Scrollbar style={{width: WW, height: WI }}>
            <Modal.Body>
                    <Form>
                        <div className="dv">
                            <h5>Название вакансии</h5>
                            <Form.Control
                                style={{width:"90%"}}
                                className="mt-3"
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                placeholder={"Введите название вакансии"}
                            />
                            <h5>Уровень дохода</h5>
                            <Form.Control
                                style={{width:"90%"}}
                                className="mt-3"
                                value={saitem}
                                placeholder="введите желаемый доход работника"
                                onChange={e => setsaItem(e.target.value)}
                            />
                            <h5>Название компании</h5>
                            <Form.Control
                                style={{width:"90%"}}
                                className="mt-3"
                                value={nick}
                                placeholder={"введите название компании"}
                                onChange={e=>setNick(e.target.value)}
                            />
                            <h5>График работы</h5>
                            <Form.Group controlId="Gr">
                                <Form.Check
                                    id="form_control"
                                    value="0"
                                    type="radio"
                                    aria-label="radio 1"
                                    label="Не указан"
                                    onChange={handleChangeGr}
                                    checked={Gr === "0"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="1"
                                    type="radio"
                                    aria-label="radio 2"
                                    label="Удалённая работа"
                                    onChange={handleChangeGr}
                                    checked={Gr === "1"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="2"
                                    type="radio"
                                    aria-label="radio 3"
                                    label="Полный день"
                                    onChange={handleChangeGr}
                                    checked={Gr === "2"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="3"
                                    type="radio"
                                    aria-label="radio 4"
                                    label="Сменный график"
                                    onChange={handleChangeGr}
                                    checked={Gr === "3"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="4"
                                    type="radio"
                                    aria-label="radio 4"
                                    label="Вахтовый метод"
                                    onChange={handleChangeGr}
                                    checked={Gr === "4"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="5"
                                    type="radio"
                                    aria-label="radio 4"
                                    label="Гибкий график"
                                    onChange={handleChangeGr}
                                    checked={Gr === "5"}
                                />
                            </Form.Group>
                            <h5>Образование</h5>
                            <Form.Group controlId="St">
                                <Form.Check
                                    id="form_control"
                                    value="0"
                                    type="radio"
                                    aria-label="radio 1"
                                    label="Любое"
                                    onChange={handleChangeSt}
                                    checked={St === "0"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="1"
                                    type="radio"
                                    aria-label="radio 2"
                                    label="Не нужно"
                                    onChange={handleChangeSt}
                                    checked={St === "1"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="2"
                                    type="radio"
                                    aria-label="radio 3"
                                    label="Общее среднее"
                                    onChange={handleChangeSt}
                                    checked={St === "2"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="3"
                                    type="radio"
                                    aria-label="radio 4"
                                    label="Не полное высшее"
                                    onChange={handleChangeSt}
                                    checked={St === "3"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="4"
                                    type="radio"
                                    aria-label="radio 4"
                                    label="Высшее"
                                    onChange={handleChangeSt}
                                    checked={St === "4"}
                                />
                            </Form.Group>
                            <h5>Тип занятости</h5>
                            <Form.Group controlId="Ty">
                                <Form.Check
                                    id="form_control"
                                    value="0"
                                    type="radio"
                                    aria-label="radio 1"
                                    label="Любая"
                                    onChange={handleChangeTy}
                                    checked={Ty === "0"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="1"
                                    type="radio"
                                    aria-label="radio 2"
                                    label="Полная занятость"
                                    onChange={handleChangeTy}
                                    checked={Ty === "1"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="2"
                                    type="radio"
                                    aria-label="radio 3"
                                    label="Частичная занятость"
                                    onChange={handleChangeTy}
                                    checked={Ty === "2"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="3"
                                    type="radio"
                                    aria-label="radio 4"
                                    label="Стажировка"
                                    onChange={handleChangeTy}
                                    checked={Ty === "3"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="4"
                                    type="radio"
                                    aria-label="radio 5"
                                    label="Проектная работа"
                                    onChange={handleChangeTy}
                                    checked={Ty === "4"}
                                />
                            </Form.Group>
                            <h5>Опыт работы</h5>
                            <Form.Group controlId="We">
                                <Form.Check
                                    id="form_control"
                                    value="0"
                                    type="radio"
                                    aria-label="radio 1"
                                    label="Не имеет значения"
                                    onChange={handleChangeWe}
                                    checked={We === "0"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="1"
                                    type="radio"
                                    aria-label="radio 2"
                                    label="До 1 года"
                                    onChange={handleChangeWe}
                                    checked={We === "1"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="2"
                                    type="radio"
                                    aria-label="radio 3"
                                    label="От 1 года"
                                    onChange={handleChangeWe}
                                    checked={We === "2"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="3"
                                    type="radio"
                                    aria-label="radio 4"
                                    label="От 2 лет"
                                    onChange={handleChangeWe}
                                    checked={We === "3"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="4"
                                    type="radio"
                                    aria-label="radio 4"
                                    label="От 3 лет"
                                    onChange={handleChangeWe}
                                    checked={We === "4"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="5"
                                    type="radio"
                                    aria-label="radio 4"
                                    label="От 5 лет"
                                    onChange={handleChangeWe}
                                    checked={We === "5"}
                                />
                            </Form.Group>
                            <Form.Control
                                className="mt-3"
                                type="file"
                                onChange={selectFile}
                            />
                        </div>
                        <Button
                            variant={"outline-dark"}
                            onClick={addTest}
                        >
                            Добавить тест
                        </Button>
                        <div>Название теста</div>
                        <Form.Control
                            value={testn}
                            onChange={e => setTestn(e.target.value)}
                            placeholder="Введите название теста"
                        />
                        {test.map(i =>
                            <Row className="mt-4" key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.qe}
                                        onChange={(e) => changeTest('qe', e.target.value, i.number)}
                                        placeholder="Введите вопрос"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.qe_ans_r}
                                        onChange={(e) => changeTest('qe_ans_r', e.target.value, i.number)}
                                        placeholder="Введите правильный ответ"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.qe_ans1}
                                        onChange={(e) => changeTest('qe_ans1', e.target.value, i.number)}
                                        placeholder="Введите вариант ответа1"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.qe_ans2}
                                        onChange={(e) => changeTest('qe_ans2', e.target.value, i.number)}
                                        placeholder="Введите вариант ответа2"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.qe_ans3}
                                        onChange={(e) => changeTest('qe_ans3', e.target.value, i.number)}
                                        placeholder="Введите вариант ответа3"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => removeTest(i.number)}
                                        variant={"outline-danger"}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </Form>
            </Modal.Body>
            </Scrollbar>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addCompany}>Добавить</Button>
            </Modal.Footer>

        </Modal>
    );
});

export default CreateCompany;