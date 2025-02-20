import React from "react";
import {FirstReactComponent} from "./component/FirstReactComponent";
import * as ReactDOM from 'react-dom';
import './styles/SpecCourseStyles.css'

console.log('hello from js world!');

const ReactApp = () => {
    return (
        <div>
            <FirstReactComponent />
        </div>
    )
}

ReactDOM.render(<ReactApp />, document.getElementById('root'));