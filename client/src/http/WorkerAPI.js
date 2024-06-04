import {$authHost, $host} from "./index";

export const fetchWorker = async (page,limit,salary_w,gender_w,grad_w,work_e_w,type_w_w, status_f_w) => {
    const {data} = await $host.get('api/worker',{params:{
            page,limit,salary_w,gender_w,grad_w,work_e_w,type_w_w, status_f_w
        }})
    return data
}
export const createWorker = async (worker) => {
    const {data} = await $authHost.post('api/worker', worker)
    return data
}
export const fetchUserWorker = async (email) => {
    const {data} = await $host.get('api/worker/wu',{params:{email}})
    return data
}

export const fetchOneWorker = async (id) => {
    const {data} = await $host.get('api/worker/'+ id)
    return data
}