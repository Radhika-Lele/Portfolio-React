import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';

export default function router(){
    return(
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}