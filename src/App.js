// import About from "./component/About";
// import Main from "./component/Main";
// import Navbar from "./component/Navbar";
// import {Routes,Route,BrowserRouter} from 'react-router-dom';

import ComA from "./component/contextComponent/ComA";
import ComC from "./component/contextComponent/ComC";


function App() {
  
  return (
    <>

    <ComA/>
    {/* <div className="App">
      <BrowserRouter>
      
      <Navbar heading='Navbar' home='home' about='about'/>
      <Routes>
        <Route path="/" element={<Main heading="Enter Your Text Below..!"/>}/>
        <Route path="/about" element={ <About/>} ></Route>
        <Route path="/user/asdasd" element={ <About/>} ></Route>

      </Routes>
     
     
      </BrowserRouter>
    </div> */}
    </>
  );
}

export default App;
