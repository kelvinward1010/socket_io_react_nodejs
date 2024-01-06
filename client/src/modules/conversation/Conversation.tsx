import { useRecoilValue } from "recoil";
import styles from "./style.module.scss";
import { roomValue } from "../../state/state";
import { useEffect, useState } from "react";
import { socket } from "../../constant/socket_io";


export function Conversation() {

    const data_room = useRecoilValue<any>(roomValue);
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState<any[]>([])

    const handleSendMessage = async () => {
        if(currentMessage !== ""){
            const messageData = {
                room: data_room?.room,
                author: data_room?.username,
                message: currentMessage,
                time: 
                    new Date(Date.now()).getHours() + 
                    ":" + 
                    new Date(Date.now()).getMinutes(),
            }

            await socket.emit("send_message", messageData);
            setMessageList((list: any) => [...list, messageData])
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list: any) => [...list, data])
        });
    },[socket])

    return (
        <div className={styles.container}>
            live chat
            <div>{data_room?.username}</div>
            <div>
                {messageList?.map((message, idx) => (
                    <p key={idx}>{message?.message}</p>
                ))}
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Type a message..."
                    onChange={(e) => setCurrentMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    )
}