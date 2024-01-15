import { useEffect, useRef } from "react";

interface Props{
    messages: {id:string, userId:string, content: string}[], 
    userId : string, 
    isLoading : boolean
}

export default function Messages({messages, userId, isLoading} : Props){

    const endOfChat = useRef<HTMLDivElement>(null)

    useEffect(() =>{

        const ref = endOfChat.current
        if (ref) { 
            endOfChat.current.scrollTop = endOfChat.current.scrollHeight
        }
}
         , [isLoading])


    return (
        <div className="chat" ref={endOfChat}>
            {messages.map(message => {
                return (
                    <div className={userId === message.userId? "message my__message" : "message"}>{message.content}</div>
                )
            })}
            {isLoading ? <span className="loading" >Loading ...</span> : ""}
        </div>
    )
}