import React from 'react';

import NGLogINPage from "./pages/ng-login-page";
import NGHomePage from "./pages/ng-home-page";
import NGTestPreviewPage from "./pages/ng-test-preview-page";
import NGTestQuestionPage from "./pages/ng-test-question-page";
import NGIndexPage from "./pages/ng-index-page";
import NGLearnPage from "./pages/ng-learn-page";
import NGVocabPage from "./pages/ng-vocab-page";
import NGHelpPage from "./pages/ng-help-page";
import NGTestCatalogPage from "./pages/ng-test-catalog-page";


import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
    return (
        <BrowserRouter>

            <Switch>
                <Route exact path="/login" render={(props) => <NGLogINPage {...props} name="Log In" />}></Route>
                <Route exact path="/signup" render={(props) => <NGLogINPage {...props} name="Sign Up" />}></Route>
                <Route exact path="/home" component={NGHomePage} ></Route>
                <Route exact path="/help" component={NGHelpPage} ></Route>
                <Route exact path="/learn" component={NGLearnPage} ></Route>
                <Route exact path="/home/test" component={NGTestCatalogPage} ></Route>
                <Route exact path="/home/test/quiz" render={(props) => <NGTestQuestionPage {...props} maxqnum={4} questions={["First question", "Second question", "Next question", "Another question"]}/>}></Route>
                <Route exact path="/home/test/preview" render={(props) => <NGTestPreviewPage name="[Test Title]" subject="[test subject]" goto="https://en.wikipedia.org/wiki/Japan">  </NGTestPreviewPage>}></Route>
                <Route exact path="/" component={NGIndexPage} ></Route>
                <Route exact path="/home/vocab" component={NGVocabPage} ></Route>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
