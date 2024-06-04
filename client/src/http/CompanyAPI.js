import {$authHost, $host} from "./index";


export const createCompany = async (company) => {
    const {data} = await $authHost.post('api/company', company)
    return data
}

export const fetchCompany = async (page,limit=3,salary_w,study_w,graph_w,work_e_w,type_w_w) => {
    const {data} = await $host.get('api/company',{params:{
            page,limit,salary_w,study_w,graph_w,work_e_w,type_w_w
        }})
    return data
}

export const fetchUserCompany = async (email) => {
    const {data} = await $host.get('api/company/cu',{params:{email}})
    return data
}

export const fetchOneCompany = async (id) => {
    const {data} = await $host.get('api/company/' + id)
    return data
}