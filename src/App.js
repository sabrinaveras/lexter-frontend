import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

// components
import NavbarComponent from "./components/navbar/navbar.component";

// pages
import BookListPage from "./pages/book-list/book-list.page";
import BookInsertPage from "./pages/book-insert/book-insert.page";

function App() {
    return (
        <>
            <Router>
                <NavbarComponent/>

                <Switch>
                    <Route path={"/"} exact={true} component={BookListPage}/>
                    <Route path={"/new-book"} exact={true} component={BookInsertPage}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
