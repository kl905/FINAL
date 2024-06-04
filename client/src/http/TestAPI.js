import {$host} from "./index";


export const fetchTest = async (id) => {
    const {data} = await $host.get('api/test',{params:{
            id
        }})
    return data
}

export const fetchOneTest = async (id) => {
    const {data} = await $host.get('api/test/' + id)
    return data
}