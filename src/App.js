
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Sheard/Header/Header';
import Footer from './Pages/Sheard/Footer/Footer';

function App() {
  return (
    <div className="App">
         
         <Header />
         <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/about' element={<About />}></Route>
         </Routes>
         <Footer />
    </div>
  );
}

export default App;
