
import './App.css';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Services from './services/services';
import Experience from './experience/Experience';
import Portfolio from './portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='experience' element={<Experience/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
    
      
      </Routes>
     
      </BrowserRouter>
     
    
      
    </div>
  );
}

export default App;
