import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from './views/HomePage'
import Header from "./components/Header";
import News from "./views/News";
import NewsDetails from "./views/NewsDitails";

const App = () => {
    return (
        <Router>
            <Header />
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/news"><News /></Route>
            <Route path="/news/:id"><NewsDetails /></Route>
            {/*<Route path='/login'><LogIn/></Route>*/}
            {/*<Route path='/signUp'><SignUp/></Route>*/}
            {/*<Route path='*'><NotFound/></Route>*/}
        </Router>


    );
};

export default App;
