import {Fragment} from "react";
import {makeStyles} from "@material-ui/core";
import useMbox from "./hooks/useMbox";
import useMessageSelected from "./hooks/useMessageSelected";
const useStyles = makeStyles({
    detailsHeader: {
        '& table': {
            width: '100%',
            '& th, td': {
                padding: '0.3rem',
                borderBottom: '1px solid #e1e1e1',
                textAlign: 'left',
            },
            '& th': {
                textAlign: 'right'
            }
        }
    },
    detailsBody: {},
});

const ViewMessage = () => {
    const classes = useStyles();
    const {mbox} = useMbox();
    const {messageSelected}= useMessageSelected();

    const getFullMessage = (findMessage) => {
        return mbox[findMessage.directory].find(message => message.id === findMessage.id);
    }

    if (messageSelected.id) {
        const fullMessage = getFullMessage(messageSelected);
        if (fullMessage) {
            return <Fragment>
                <h1>Viewer</h1>
                <header className={classes.detailsHeader}>
                    <table>
                        <tbody>
                        <tr>
                            <th>
                                From:
                            </th>
                            <td>
                                {fullMessage.from}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                To:
                            </th>
                            <td>
                                {fullMessage.to}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Subject:
                            </th>
                            <td>
                                {fullMessage.subject}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </header>

                <article className={classes.detailsBody}>
                    <div dangerouslySetInnerHTML={{__html: fullMessage.body}}/>
                </article>

            </Fragment>
        }
    }
    return <Fragment/>;
}
export default ViewMessage;

