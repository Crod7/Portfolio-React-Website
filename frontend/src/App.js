import {BrowserRouter, Routes, Route} from 'react-router-dom'


//pages and componenets
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects';



function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
          <div className='pages'>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/projects" element={<Projects />}/>

            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
