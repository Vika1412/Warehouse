// import React from "react";
// import * as ReactDOM from 'react-dom';
// import {FirstReactComponent} from "./component/FirstReactComponent";
// import './styles/SpecCourseStyles.css'
// //import {ReactComponentWithRestExample} from "./component/ReactComponentWithRestExample";
// //import {MyComponent} from "./component/MyComponent";
// import { Routes, Route, Link } from "react-router-dom";
// import { EquipmentList } from "./component/EquipmentList";
// import { NomenclatureList } from "./component/NomenclatureList";
// import { RequestsList } from "./component/RequestsList";
//
// console.log('hello from js world!');
//
// const NotFound = () => {
//     return <h2>Страница не найдена</h2>;
// };

// // const ReactApp = () => {
// //     return (
// //         <div>
// //             FirstReactComponent:
// //             <FirstReactComponent />
// //             <hr />
// //             ReactComponentWithRestExample:
// //             <ReactComponentWithRestExample />
// //             {/*MyComponent:*/}
// //             {/*<MyComponent></MyComponent>*/}
// //         </div>
// //     )
// // }
//
// const ReactApp = () => {
//     return (
//         <>
//             <header>
//                 FirstReactComponent:
//                 <FirstReactComponent />
//                 <hr />
//                 <Link to="/equipment">Equipment List</Link>
//                 <Link to="/nomenclature">Nomenclature List</Link>
//                 <Link to="/requests">Requests List</Link>
//             </header>
//
//             <Routes>
//                 <Route path="/equipment" element={<EquipmentList />} />
//                 <Route path="/nomenclature" element={<NomenclatureList />} />
//                 <Route path="/requests" element={<RequestsList />} />
//                 <Route path="*" element={<NotFound />} />
//             </Routes>
//         </>
//     );
// }
//
// ReactDOM.render(<ReactApp />, document.getElementById('root'));

// // import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import { EquipmentList } from "./EquipmentList";
// import { NomenclatureList } from "./NomenclatureList";
// import { RequestsList } from "./RequestsList";
//
// const NotFound = () => {
//     return <h2>Страница не найдена</h2>;
// };
//
// function App() {
//     return (
//         <>
//             <header>
//                 <Link to="/equipment">Equipment List</Link>
//                 <Link to="/nomenclature">Nomenclature List</Link>
//                 <Link to="/requests">Requests List</Link>
//             </header>
//
//             <Routes>
//                 <Route path="/equipment" element={<EquipmentList />} />
//                 <Route path="/nomenclature" element={<NomenclatureList />} />
//                 <Route path="/requests" element={<RequestsList />} />
//                 <Route path="*" element={<NotFound />} />
//             </Routes>
//         </>
//     );
// }
//
// export default App;

// import React from "react";
// //import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import * as ReactDOM from 'react-dom';
// import {FirstReactComponent} from "./component/FirstReactComponent";
// import {ReactComponentWithRestExample} from "./component/ReactComponentWithRestExample";
// // import {MyComponent} from "./component/MyComponent";
// // import { Routes, Route, Link } from "react-router-dom";
// import { EquipmentList } from "./component/EquipmentList";
// import { NomenclatureList } from "./component/NomenclatureList";
// import { RequestsList } from "./component/RequestsList";
// import './styles/SpecCourseStyles.css';
//
// console.log('hello from js world!');
//
// const ReactApp = () => {
//     return (
//         <Router>
//             <div>
//                 {/*<nav style={{ marginBottom: "20px" }}>*/}
//                 {/*    <Link to="/" style={{ marginRight: "10px" }}>Главная</Link>*/}
//                 {/*    <Link to="/first">FirstReactComponent</Link>*/}
//                 {/*    <Link to="/rest">RestExample</Link>*/}
//                 {/*    /!*<Link to="/my">MyComponent</Link>*!/*/}
//                 {/*    <Link to="/equipment">Оборудование</Link>*/}
//                 {/*    <Link to="/nomenclature">Номенклатура</Link>*/}
//                 {/*    <Link to="/requests">Заявки</Link>*/}
//                 {/*</nav>*/}
//
//                 <Switch>
//                     <Route path="/" element={<h2>Добро пожаловать!</h2>} />
//                     <Route path="/first" element={<FirstReactComponent />} />
//                     <Route path="/rest" element={<ReactComponentWithRestExample />} />
//                     {/*<Route path="/my" element={<MyComponent />} />*/}
//                     <Route path="/equipment" element={<EquipmentList />} />
//                     <Route path="/nomenclature" element={<NomenclatureList />} />
//                     <Route path="/requests" element={<RequestsList />} />
//                 </Switch>
//             </div>
//         </Router>
//     );
// };
//
// ReactDOM.render(<ReactApp />, document.getElementById('root'));





import React from "react";
//import {FirstReactComponent} from "./component/FirstReactComponent";
//import * as ReactDOM from 'react-dom';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Home } from "./component/Home";
import { EquipmentList } from "./component/EquipmentList";
import { NomenclatureList } from "./component/NomenclatureList";
import { RequestsList } from "./component/RequestsList";
import './styles/SpecCourseStyles.css';
//import {ReactComponentWithRestExample} from "./component/ReactComponentWithRestExample";

console.log('hello from js world!');

const NotFound = () => {
    return <h2>Страница не найдена</h2>;
};

const ReactApp = () => {
    return (
        <div>
            <h1>Я точно вижу это?</h1>

            <nav className="top-nav">
                <NavLink exact to="/">Главная</NavLink>
                <NavLink to="/equipment">Оборудование</NavLink>
                <NavLink to="/nomenclature">Номенклатура</NavLink>
                <NavLink to="/requests">Заявки</NavLink>
            </nav>


            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/equipment" component={EquipmentList} />
                <Route path="/nomenclature" component={NomenclatureList} />
                <Route path="/requests" component={RequestsList} />
                <Route component={NotFound} />
            </Switch>
            {/*EquipmentList:*/}
            {/*<EquipmentList />*/}
            {/*<hr />*/}
            {/*NomenclatureList:*/}
            {/*<NomenclatureList />*/}
            {/*<hr />*/}
            {/*RequestsList:*/}
            {/*<RequestsList />*/}
        </div>
    );
}

export default ReactApp;
//ReactDOM.render(<ReactApp />, document.getElementById('root'));