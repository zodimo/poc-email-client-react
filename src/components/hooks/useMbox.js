import {useRecoilState} from "recoil";
import {mbox as mboxAtom} from "../atoms/mbox";

const useMbox = () => {
    const [mbox, setMbox] = useRecoilState(mboxAtom);

    const deleteMessageFromDirectory = (directory, message_id) => {
        //get  message from folder and add to deleted
        const fromDirMessages = mbox[directory];
        const deletedMessage = fromDirMessages.find(message => message.id === message_id);
        let deletedMessages=[];
        if (deletedMessage) {
            deletedMessages = [...mbox.deleted,deletedMessage];
        }

        const newMbox = {
            ...mbox,
            [directory]: mbox[directory].filter((message) => message.id !== message_id),
            deleted: deletedMessages
        }
        setMbox(newMbox);
    }

    return {
        mbox,
        deleteMessageFromDirectory
    }
}
export default useMbox;