import {$host} from "./index";


export const fetchQe = async (cid) => {
    const {data} = await $host.get('api/qe',{params:{cid}})
    return data
}

export const postqe = async (qe) => {
    const {data} = await $host.post('api/qe/',qe)
    return data
}