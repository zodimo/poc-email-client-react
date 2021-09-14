import {Fragment} from "react";
import {Route, Switch} from "react-router-dom";
import useMessageSelected from "./hooks/useMessageSelected";
import Directory from "./Directory";
import ViewMessage from "./ViewMessage";
import Header from "./ui/Header";

const App = () => {
    const {messageSelected} = useMessageSelected();
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route exact path="/" component={() => <div>Home</div>}/>
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
