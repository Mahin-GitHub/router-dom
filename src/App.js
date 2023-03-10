import React from 'react';
import './App.css'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NoMatch from './Components/NoMatch/NoMatch';




const App = () => {
  return (
    <div className='App'>
      <h1>App Component</h1>
      
      <Router>
      <Routes>
          <Route exact path="/" element={<Home></Home>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<NoMatch/>}/>
          
      </Routes>
   
   
   </Router>
 
    </div>
  
      


    
      
  );
};

export default App;