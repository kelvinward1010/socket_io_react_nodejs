import { selector } from "recoil";
import { roomState } from "./atom";



export const roomValue: any = selector({
    key: "roomValue",
    get: ({ get }) => {
        const roomvalue = get(roomState);
        return roomvalue;
    },
});