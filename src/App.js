// import './App.less';
import React from "react";
import FrontendAuth from "./router/FrontendAuth";
import {routerMap} from "./router/routerLogin";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
    return (
        <Router>
            {/*只匹配一个，匹配成功就不往下匹配，效率高*/}
                <FrontendAuth routerConfig={routerMap}/>
        </Router>
    );
}

export default App;

