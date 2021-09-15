import useMbox from "./hooks/useMbox";
import useMessageSelected from "./hooks/useMessageSelected";
import {Fragment, useEffect} from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    messageList: {
        background: '#e1e1e1',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100vh',
        height: '100%'
    },
    messageListInner: {
        flexBasis: '100%',
        flexGrow: 1,
        overflow: 'auto'
    },
    listItem: {
        borderBottom: '1px solid #cccccc',
        display: 'flex',
        '&.active': {
            background: 'red',
        }
    },
    listItemTime: {},
    listItemDetails: {
        borderBottom: '1px solid #cccccc',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        textAlign: 'left'
    },
    listItemDetailsFrom: {},
    listItemDetailsSubject: {
        fontSize: 'smaller',
        color: '#999999',
    },
    deleteButton: {
        marginLeft: 10,
        '&:hover': {
            background: 'blue',
        }
    }

});

const Directory = ({name}) => {
    const classes = useStyles();
    const {mbox, deleteMessageFromDirectory} = useMbox();
    const {messageSelected, setMessageSelected} = useMessageSelected();
    const handleSelect = (directory, message_id) => {
        setMessageSelected({
            id: message_id,
            directory: directory
        })
    }
    const handleDelete = (e, directory, message_id) => {
        e.stopPropagation();
        deleteMessageFromDirectory(directory, message_id);
    }

    const messages = mbox[name];

    useEffect(() => {
        setMessageSelected({});
    }, [name, setMessageSelected])

    const isMessageSelectedInDirectory = (name, message) => {
        return name === messageSelected.directory && message.id === messageSelected.id
    }

    return messages.length > 0 ?
        <div className={classes.messageList}>
            <h1>
                {name}
            </h1>
            <div className={classes.messageListInner}>
                {messages.map(message => {
                    return <article key={message.id}
                                    className={`${classes.listItem} ${isMessageSelectedInDirectory(name, message) && "active"}`}
                                    onClick={() => handleSelect(name, message.id)}>
                        <div className={classes.listItemDetails}>
                            <div className={classes.listItemDetailsFrom}>
                                {message.from}
                            </div>
                            <div className={classes.listItemDetailsSubject}>
                                {message.subject}
                            </div>
                        </div>
                        <div className={classes.listItemTime}>{message.datetime}</div>
                        {name !== "deleted" &&
                        <div className={classes.deleteButton}
                             onClick={(e) => handleDelete(e, name, message.id)}>Delete</div>}
                    </article>

                })}
            </div>
        </div> : <Fragment>No items found</Fragment>
}
export default Directory
