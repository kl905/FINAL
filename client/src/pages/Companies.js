import React, {useContext, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import CompanyList from "../components/CompanyList";
import Filterlist from "../components/filterlist";
import '../compstyles/SCFilter.css'
import {Context} from "../index";
import {fetchCompany} from "../http/CompanyAPI";
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";



const Companies = observer(() => {
    const{Company}=useContext(Context)
    useEffect(() => {
        fetchCompany(Company.page,4,Company.selectedSal, Company.selectedStu, Company.selectedGra, Company.selectedWor, Company.selectedTyp).then(data => {
            Company.setComp(data.rows)
            Company.setTotalCount(data.count)
        })
    }, [Company.selectedSal, Company.selectedStu, Company.selectedGra, Company.selectedWor,Company.selectedTyp,Company.page])

    return (

            <div className="MainContent">
                <div className="Filtwrapper">
                    <Filterlist/>
                </div>
                <div className="Cont">
                    <CompanyList/>
                    <Pages/>
                </div>
                <Outlet/>
            </div>


    );
});

export default Companies;