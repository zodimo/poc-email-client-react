import {atom} from "recoil";

import initialMbox from "../../mbox";


export const mbox = new atom({
    key: "mbox",
    default: initialMbox
});