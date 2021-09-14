import {atom} from "recoil";

export const messageSelected = new atom({
    key: 'messageSelected',
    default: {
        directory: '',
        id: null
    }
});

