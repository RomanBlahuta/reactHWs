import React from 'react';
import './App.css';


import NGLogINPage from "./pages/ng-login-page";
import NGHomePage from "./pages/ng-home-page";
import NGTestPreviewPage from "./pages/ng-test-preview-page";
import NGTestQuestionPage from "./pages/ng-test-question-page";


// IMPLEMENTED PAGES
/* ---------------------------------------------------------- *
*
* <NGLogINPage name="Log In">  </NGLogINPage>
* <NGLogINPage name="Sign Up">  </NGLogINPage>
*
* <NGHomePage>  </NGHomePage>
*
* <NGTestPreviewPage name="Katakana 1" subject="katakana" goto="https://en.wikipedia.org/wiki/Katakana">  </NGTestPreviewPage>
* <NGTestQuestionPage>  </NGTestQuestionPage>
*
* ---------------------------------------------------------- */


function App() {
    return (
        <div>
            <NGTestQuestionPage question="Choose the correct option:">  </NGTestQuestionPage>
        </div>
    );
}

export default App;
