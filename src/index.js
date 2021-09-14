import React from 'react';
import {RecoilRoot} from "recoil";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import App from './components/App';
import theme from './components/ui/Theme';

ReactDOM.render(
    <RecoilRoot>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
            <App/>
            </ThemeProvider>
        </BrowserRouter>
    </RecoilRoot>,
    document.getElementById('root')
);
