import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Firstpage from './Firstpage';
import Mainpage from './Mainpage';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/"
        element={<Firstpage />}></Route>
        <Route exact path="/Mainpage"
        element={<Mainpage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
