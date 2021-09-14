import {Fragment} from "react";
import useMbox from "./hooks/useMbox";

const ViewMessage = ({selectedMessage}) => {
    const {mbox} = useMbox();

    const getFullMessage = (findMessage) => {
        return mbox[findMessage.directory].find(message => message.id === findMessage.id);
    }

    if (selectedMessage.id) {
        const fullMessage = getFullMessage(selectedMessage)
        return <Fragment>
            <h1>Viewer</h1>
            id:{fullMessage.id}<br/>
            date:{fullMessage.datetime}<br/>
            to:{fullMessage.to}<br/>
            from:{fullMessage.from}<br/>
            subject:{fullMessage.subject}<br/>
            <h3>Body:</h3>
            <div dangerouslySetInnerHTML={{__html: fullMessage.body}}/>
        </Fragment>
    }
    return <Fragment/>;
}
export default ViewMessage;

