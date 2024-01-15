import MessageService from "./MessageService"

interface Props{
    userId: string, 
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
}


export default function NewMessage({userId, setLoading} : Props){

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const text = (event.target as HTMLFormElement).text.value
        if (text.trim()){

            MessageService.create( userId, text)
            setLoading(true)
        }
       
        }

        // setTimeout(() => void getCards(), 200)


    return (
        <form className="newMessage" onSubmit={onSubmit}>
            <textarea className="newMessage__input" id="text"></textarea>
            <button className="newMessage__btn">🡒</button>
        </form>
    )
}