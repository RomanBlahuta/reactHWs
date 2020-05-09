import React from 'react';

import NGLogINPage from "./pages/ng-login-page";
import NGHomePage from "./pages/ng-home-page";
import NGTestPreviewPage from "./pages/ng-test-preview-page";
import NGTestQuestionPage from "./pages/ng-test-question-page";
import NGIndexPage from "./pages/ng-index-page";
import NGHelpPage from "./pages/ng-help-page";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// IMPLEMENTED PAGES
/* ---------------------------------------------------------- *
*
* <NGLogINPage name="Log In">  </NGLogINPage>
* <NGLogINPage name="Sign Up">  </NGLogINPage>
*
* <NGHomePage>  </NGHomePage>
*
* <NGTestPreviewPage name="Katakana 1" subject="katakana" goto="https://en.wikipedia.org/wiki/Katakana">  </NGTestPreviewPage>
* <NGTestQuestionPage question="Choose the correct option:">  </NGTestQuestionPage>
*
* ---------------------------------------------------------- */


function App() {
    return (
        <BrowserRouter>

            <Switch>
                <Route exact path="/login" render={(props) => <NGLogINPage {...props} name="Log In" />}></Route>
                <Route exact path="/signup" render={(props) => <NGLogINPage {...props} name="Sign Up" />}></Route>
                <Route exact path="/home" component={NGHomePage} ></Route>
                <Route exact path="/help" component={NGHelpPage} ></Route>
                <Route exact path="/question" render={(props) => <NGTestQuestionPage {...props} question={"Choose correct option!"}/>}></Route>
                <Route exact path="/" component={NGIndexPage} ></Route>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
