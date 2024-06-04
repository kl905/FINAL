import React, {useContext, useEffect} from 'react';
import {Button,Form} from "react-bootstrap";
import {useState} from "react";
import '../compstyles/SCFilter.css'
import {Context} from "../index";



const Filterlist = () => {
    const {Company} = useContext(Context)
    const [gritem, setgrItem] = useState({ Gr: "", another: "another" });
    const [stitem, setstItem] = useState({ St: "", another: "another" });
    const [tyitem, settyItem] = useState({ Ty: "", another: "another" });
    const [weitem, setweItem] = useState({ We: "", another: "another" });
    const [saitem, setsaItem] = useState({ Sa: "", another: "another" });

    const { Gr } = gritem;
    const { St } = stitem;
    const { Ty } = tyitem;
    const { We } = weitem;
    const { Sa } = saitem;

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
    const handleChangeSa = e => {
        e.persist();


        setsaItem(prevState => ({
            ...prevState,
            Sa: e.target.value
        }));
    };

    const Transfer = ()=>{
        Company.setSal(Number(Sa))
        Company.setStu(Number(St))
        Company.setGra(Number(Gr))
        Company.setWor(Number(We))
        Company.setTyp(Number(Ty))
        console.log('TEST FILTERLIST','Sal:',Company.selectedSal,'Stu',Company.selectedStu,'Gra',Company.selectedGra,'Wor',Company.selectedWor,'Typ',Company.selectedTyp)
        //console.log('TEST FILTERLIST','Sal:',Sa,'Stu',St,'Gra',Gr,'Wor',We,'Typ',Ty)
    }
    const HandleSubmit = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={HandleSubmit}>
            <h4>Фильтры для поиска работы</h4>
            <h5 className="mt-5">Уровень дохода</h5>
            <Form.Control
                style={{width:"250px"}}
                className="mt-3"
                placeholder="введите желаемый доход"
                onChange={handleChangeSa}
            />
            <h5 className="mt-3">График работы</h5>
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
            <Button variant="outline-dark" type="submit" onClick={Transfer}>
                Подтвердить
            </Button>
        </form>
    );
};

export default Filterlist;