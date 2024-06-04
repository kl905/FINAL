import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import { Scrollbar } from 'react-scrollbars-custom';
import '../compstyles/Modals.css'
import {observer} from "mobx-react-lite";
import {createWorker} from "../http/WorkerAPI";
//import {createBrand, createType} from "../../http/deviceAPI";

const CreateWorker = observer(({show, onHide,usid}) => {
    let windowInnerWidth = document.documentElement.clientWidth
    let windowInnerHeight = document.documentElement.clientHeight
    let WW=Math.ceil(windowInnerWidth/100)*55
    let WI=Math.ceil(windowInnerHeight/100)*80

    const [file, setFile] = useState(null)
    const [value, setValue] = useState('')
    const [nick,setNick]=useState('')
    const [saitem, setsaItem] = useState('');
    const [stitem, setstItem] = useState({ St: "", another: "another" });
    const [tyitem, settyItem] = useState({ Ty: "", another: "another" });
    const [weitem, setweItem] = useState({ We: "", another: "another" });
    const [sfitem, setsfItem] = useState({ Sf: "", another: "another" });
    const [geitem, setgeItem] = useState({ Ge: "", another: "another" });

    const { Sf } = sfitem;
    const { St } = stitem;
    const { Ty } = tyitem;
    const { We } = weitem;
    const { Ge } = geitem;

    const handleChangeSf = e => {
        e.persist();
        setsfItem(prevState => ({
            ...prevState,
            Sf: e.target.value
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
    const handleChangeGe = e => {
        e.persist();

        setgeItem(prevState => ({
            ...prevState,
            Ge: e.target.value
        }));
    };
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addWorker = () => {
        if (nick!=='' && value!=='' && saitem !== '' && We!=='' && St!=='' && Ty!=='' && Sf!=='' && Ge!=='' && file!== null) {
            const formData = new FormData()
            formData.append('fio', value)
            formData.append('name', nick)
            formData.append('salary', Number(saitem))
            formData.append('work_e', Number(We))
            formData.append('grad', Number(St))
            formData.append('type_w', Number(Ty))
            formData.append('status_f', Number(Sf))
            formData.append('gender', Number(Ge))
            formData.append('userId', usid)
            formData.append('img', file)
            createWorker(formData).then(data => onHide())
            setValue('')
            setNick('')
            setsaItem('');
            setweItem({ We: "", another: "another" });
            setstItem({ St: "", another: "another" });
            settyItem({ Ty: "", another: "another" });
            setsfItem({ Sf: "", another: "another" });
            setgeItem({ Ge: "", another: "another" });

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
                            <h5>Ваш ФИО</h5>
                            <Form.Control
                                style={{width:"90%"}}
                                className="mt-3"
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                placeholder={"Введите ФИО"}
                            />
                            <h5>Уровень дохода</h5>
                            <Form.Control
                                style={{width:"90%"}}
                                className="mt-3"
                                value={saitem}
                                placeholder="введите желаемый доход"
                                onChange={e=>setsaItem(e.target.value)}
                            />
                            <h5>Название профессии</h5>
                            <Form.Control
                                style={{width:"90%"}}
                                className="mt-3"
                                value={nick}
                                placeholder={"введите название профессии"}
                                onChange={e=>setNick(e.target.value)}
                            />
                            <h5 className="mt-3">Статус поиска</h5>
                            <div>
                                <Form.Group controlId="Sf">
                                    <Form.Check
                                        id="form_control"
                                        value="0"
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Без статуса"
                                        onChange={handleChangeSf}
                                        checked={Sf === "0"}
                                    />
                                    <Form.Check
                                        id="form_control"
                                        value="1"
                                        type="radio"
                                        aria-label="radio 2"
                                        label="Активно ищет работу"
                                        onChange={handleChangeSf}
                                        checked={Sf === "1"}
                                    />
                                    <Form.Check
                                        id="form_control"
                                        value="2"
                                        type="radio"
                                        aria-label="radio 3"
                                        label="Рассматривает предложения"
                                        onChange={handleChangeSf}
                                        checked={Sf === "2"}
                                    />
                                    <Form.Check
                                        id="form_control"
                                        value="3"
                                        type="radio"
                                        aria-label="radio 4"
                                        label="Не ищет работу"
                                        onChange={handleChangeSf}
                                        checked={Sf === "3"}
                                    />
                                    <Form.Check
                                        id="form_control"
                                        value="4"
                                        type="radio"
                                        aria-label="radio 4"
                                        label="Вышел на новое место"
                                        onChange={handleChangeSf}
                                        checked={Sf === "4"}
                                    />
                                </Form.Group>
                            </div>
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
                                    aria-label="radio 4"
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
                            <h5>Пол</h5>
                            <Form.Group controlId="Ge">
                                <Form.Check
                                    id="form_control"
                                    value="0"
                                    type="radio"
                                    aria-label="radio 1"
                                    label="Не имеет значения"
                                    onChange={handleChangeGe}
                                    checked={Ge === "0"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="1"
                                    type="radio"
                                    aria-label="radio 2"
                                    label="Мужской"
                                    onChange={handleChangeGe}
                                    checked={Ge === "1"}
                                />
                                <Form.Check
                                    id="form_control"
                                    value="2"
                                    type="radio"
                                    aria-label="radio 3"
                                    label="Женский"
                                    onChange={handleChangeGe}
                                    checked={Ge === "2"}
                                />
                            </Form.Group>
                            <Form.Control
                                className="mt-3"
                                type="file"
                                onChange={selectFile}
                            />
                        </div>
                    </Form>

                </Modal.Body>
            </Scrollbar>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addWorker}>Добавить</Button>
            </Modal.Footer>

        </Modal>
    );
});

export default CreateWorker;