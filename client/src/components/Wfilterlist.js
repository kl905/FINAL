import React, {useContext} from 'react';
import {Button, Form, Row} from "react-bootstrap";
import {useState} from "react";
import '../compstyles/SCFilter.css'
import {Context} from "../index";


const WFilterlist = () => {
    const [sfitem, setsfItem] = useState({ Sf: "", another: "another" });
    const [stitem, setstItem] = useState({ St: "", another: "another" });
    const [tyitem, settyItem] = useState({ Ty: "", another: "another" });
    const [weitem, setweItem] = useState({ We: "", another: "another" });
    const [saitem, setsaItem] = useState({ Sa: "", another: "another" });
    const [geitem, setgeItem] = useState({ Ge: "", another: "another" });

    const { Sf } = sfitem;
    const { St } = stitem;
    const { Ty } = tyitem;
    const { We } = weitem;
    const { Sa } = saitem;
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
    const handleChangeSa = e => {
        e.persist();


        setsaItem(prevState => ({
            ...prevState,
            Sa: e.target.value
        }));
    };
    const handleChangeGe = e => {
        e.persist();


        setgeItem(prevState => ({
            ...prevState,
            Ge: e.target.value
        }));
    };

    const {Worker} =useContext(Context)
    const Transfer = ()=>{
        console.log('dsfs',Sa,'fdgdfg',Ge)
        Worker.setSoft()
        Worker.setSal(Number(Sa))
        Worker.setGen(Number(Ge))
        Worker.setGra(Number(St))
        Worker.setWor(Number(We))
        Worker.setTyp(Number(Ty))
        Worker.setStf(Number(Sf))
        //console.log(Worker.selectedSoft)
        console.log('FILTERLIST','Sal:',Worker.selectedSal,'Gen',Worker.selectedGen,'Gra',Worker.selectedGra,'Wor',Worker.selectedWor,'Typ',Worker.selectedTyp,'Stf',Worker.selectedStf)
        //console.log('TEST FILTERLIST','Sal:',Sa,'Stu',St,'Gra',Gr,'Wor',We,'Typ',Ty)
    }
    const TransferSoft = ()=>{
        Worker.setSoft(1)
        Worker.setSal(0)
        Worker.setGen(0)
        Worker.setGra(0)
        Worker.setWor(0)
        Worker.setTyp(0)
        Worker.setStf(0)
        Worker.setSoftSal(Number(Sa))
        Worker.setSoftGen(Number(Ge))
        Worker.setSoftGra(Number(St))
        Worker.setSoftWor(Number(We))
        Worker.setSoftTyp(Number(Ty))
        Worker.setSoftStf(Number(Sf))
        console.log('SOFTFILTERLIST','Sal:',Worker.selectedSoftSal,'Gen',Worker.selectedSoftGen,'Gra',Worker.selectedSoftGra,'Wor',Worker.selectedSoftWor,'Typ',Worker.selectedSoftTyp,'Stf',Worker.selectedSoftStf)
        //console.log(Worker.selectedSoft)
    }

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Фильтры для поиска работников</h4>
            <h5 className="mt-5">Уровень дохода соискателя</h5>
            <Form.Control
                style={{width:"250px"}}
                className="mt-3"
                placeholder="введите желаемый доход"
                onChange={handleChangeSa}
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
            <Row>
                <Button variant="outline-dark" type="submit" onClick={Transfer}>
                    Строгий поиск
                </Button>
                <Button variant="outline-dark" type="submit" onClick={TransferSoft}>
                    Мягкий поиск
                </Button>
            </Row>

        </form>
    );
};

export default WFilterlist;