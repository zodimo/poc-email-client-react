import {Fragment, useEffect} from "react";
import {Link, Route, Switch} from "react-router-dom";
import useMessageSelected from "./hooks/useMessageSelected";
import Directory from "./Directory";
import ViewMessage from "./ViewMessage";

const App = () => {
    const {messageSelected} = useMessageSelected();
    return (
        <Fragment>
            <table>
                <tr>
                    <td><Link to={"/"}>Home</Link></td>
                    <td><Link to={"/inbox"}>Inbox</Link></td>
                    <td><Link to={"/sent"}>Sent</Link></td>
                    <td><Link to={"/deleted"}>Deleted</Link></td>
                </tr>
            </table>

            <Switch>
                <Route exact path="/" component={() => <div>Home</div>}
                />
                <Route exact path="/inbox"><Directory name="inbox"/></Route>
                <Route exact path="/sent"><Directory name="sent"/></Route>
                <Route exact path="/deleted"><Directory name="deleted"/></Route>
            </Switch>
            <hr/>
            <ViewMessage selectedMessage={messageSelected}/>
        </Fragment>
    );
}

export default App;
