import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CompanyItem from "./CompanyItem";

const CompanyList = observer(() => {
    const {Company} = useContext(Context)
    return (
        <Row>
            {Company.Comp.map(company =>
                <CompanyItem key={company.id} company={company}/>
            )}
        </Row>
    );
});

export default CompanyList;