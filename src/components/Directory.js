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

        '& .details': {
            borderBottom: '1px solid #cccccc',
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            textAlign: 'left',
            '& .from': {},
            '& .subject': {
                fontSize: 'smaller',
                color: '#999999',
            }
        },
        '&.active': {
            background: 'red',
        },
        '& .time': {},
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
    }, [setMessageSelected, name])

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
                        <div className='details'>
                            <div className='from'>
                                {message.from}
                            </div>
                            <div className='subject'>
                                {message.subject}
                            </div>
                        </div>
                        <div className='time'>{message.datetime}</div>
                        {name !== "deleted" &&
                        <div className={classes.deleteButton}
                             onClick={(e) => handleDelete(e, name, message.id)}>Delete</div>}
                    </article>

                })}
            </div>
        </div> : <Fragment>No items found</Fragment>
}
export default Directory
