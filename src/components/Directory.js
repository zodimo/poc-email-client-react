import useMbox from "./hooks/useMbox";
import useMessageSelected from "./hooks/useMessageSelected";
import {Fragment, useEffect} from "react";

const Directory = ({name}) => {
    const {mbox, deleteMessageFromDirectory} = useMbox();
    const {setMessageSelected} = useMessageSelected();
    const handleSelect = (message_id) => {
        setMessageSelected({
            id: message_id,
            directory: name
        })
    }

    const handleDelete = (message_id) => {
        setMessageSelected({});
        deleteMessageFromDirectory(name, message_id);
    }

    useEffect(() => {
        //unset the selected message when the directory changes.
        setMessageSelected({});
    }, [name])

    const messages = mbox[name];
    return messages.length > 0 ? <Fragment>
        <table>
            <tr>
                <td>Id</td>
                <td>Date</td>
                <td>From</td>
                <td>Subject</td>
                <td>Action</td>
            </tr>
            {messages.map(message => {
                return <tr key={name + "." + message.id}>
                    <td>{message.id}</td>
                    <td>{message.datetime}</td>
                    <td>{message.from}</td>
                    <td>{message.subject}</td>
                    <td>
                        <button onClick={() => handleSelect(message.id)}>Select</button>
                        {name !== "deleted" && <button onClick={() => handleDelete(message.id)}>Delete</button>}
                    </td>
                </tr>
            })}
        </table>
    </Fragment> : <Fragment>no Messages in directory</Fragment>
}
export default Directory
