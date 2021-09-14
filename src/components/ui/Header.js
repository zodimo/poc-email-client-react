import {AppBar, Tab, Tabs, Toolbar} from "@material-ui/core";
import {Fragment, useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();
    const handleChange = (e, value) => {
        setValue(value);
    }

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setValue(0);
                break;
            case "/inbox":
                setValue(1);
                break;
            case "/sent":
                setValue(2);
                break;
            case "/deleted":
                setValue(3);
                break;
            default :
                setValue(false);
        }
    }, [location])

    return <Fragment>
        <AppBar position="fixed">
            <Toolbar>
                Mailbox
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Home" component={Link} to="/"/>
                    <Tab label="Inbox" component={Link} to="/inbox"/>
                    <Tab label="Sent" component={Link} to="/sent"/>
                    <Tab label="Deleted" component={Link} to="/deleted"/>
                </Tabs>
            </Toolbar>
        </AppBar>
        {/*Second Toolbar is push the content out under the appbar*/}
        <Toolbar/>
    </Fragment>
}

export default Header;