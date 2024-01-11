import React from 'react';
import './App.css';
import Header from './components/Header';
function App(){   //react fragment to run two componenets by wrapping/we can also write it as <></>
 return(
   <React.Fragment>
    <Header />
  <div class="abc">hello</div>
  </React.Fragment>

 )
}
export default App;