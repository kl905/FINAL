import React, {useContext, useEffect} from 'react';
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {FINDJOB_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {registration, login, fetchOneUser} from "../http/userAPI";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";





const Auth = observer(() => {
    const {User} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ID, setID]=useState()

    const click = async ()=>{
        try{
            let data;
            if(isLogin){
                const data = await login(email, password);
            } else{
                const data = await registration(email,password);
            }

            User.setUser(email)
            User.setIsAuth(true)
            fetchOneUser(email).then(data => {
                User.setUserid(data.id)
            })
            navigate(FINDJOB_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }





    return (
        <Container className="d-flex justify-content-center align-items-center"
         style = {{height:window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button variant="outline-dark" className="mb-2 ml-2" onClick={click}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>

                    </Row>
                </Form>
            </Card>

            <Outlet/>
        </Container>
    );
});

export default Auth;