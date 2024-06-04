import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ROFL from "./components/NavBar";
import {observer} from "mobx-react-lite";

const App = observer(()=>{
    return (
        <BrowserRouter>
            <ROFL/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
