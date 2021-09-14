import React from 'react';
import {RecoilRoot} from "recoil";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './components/App';


ReactDOM.render(
    <RecoilRoot>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </RecoilRoot>,
    document.getElementById('root')
);
