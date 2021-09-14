import {useRecoilState} from "recoil";
import {messageSelected as messageSelectedAtom} from "../atoms/messageSelected";

const useMessageSelected = () => {
    const [messageSelected, setMessageSelected] = useRecoilState(messageSelectedAtom);

    return {
        messageSelected,
        setMessageSelected
    }
}
export default useMessageSelected;