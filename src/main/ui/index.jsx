import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ReactApp from './ReactEntry';

// const App = () => {
//     return (
//         <BrowserRouter>
//             <ReactApp />
//         </BrowserRouter>
//     )
// }

ReactDOM.render(
    <BrowserRouter>
        <ReactApp />
    </BrowserRouter>,
    document.getElementById('root')
);