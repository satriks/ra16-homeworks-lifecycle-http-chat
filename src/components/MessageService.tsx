import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance= axios.create({
    baseURL:"http://localhost:7070"
})

export default class MessageService {
    static async getMessages(id : string = "0"): Promise<[]>{
        const res = await instance.get(`/messages?from=${id}`)
        return res.data 
    }

    static async create(userId: string , content: string){
         instance.post("/messages", {id:"", userId, content })
    }


  
}