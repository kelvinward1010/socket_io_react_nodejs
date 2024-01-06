import { useState } from "react";
import styles from "./style.module.scss";
import { socket } from "../../constant/socket_io";
import { useRecoilState } from "recoil";
import { roomState } from "../../state/atom";
import { useNavigate } from "react-router-dom";

export function SetupRoom() {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [, setRecoilRoom] = useRecoilState(roomState);

    const dataconfig = {
        username: username,
        room: room,
    }

    const handleJoinRoom = () => {
        if(username !== "" && room !== ""){
            socket.emit("join_room", room);
            setRecoilRoom(dataconfig);
            navigate(`/conversation/${room}`);
        }
    }

    return (
        <div className={styles.container}>
            <input 
                type="text" 
                name="name"
                placeholder="Name" 
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="text" 
                name="room" 
                placeholder="Room ID..." 
                onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={handleJoinRoom}>Join Room</button>
        </div>
    )
}
