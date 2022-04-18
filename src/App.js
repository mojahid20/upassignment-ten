
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Sheard/Header/Header';
import Footer from './Pages/Sheard/Footer/Footer';
import Blogs from './Pages/Bloge/Blogs';
import Datiles from './Pages/Datiles/Datiles';

import Notfound from './Pages/Sheard/Notfound/Notfound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequirAuth from './Pages/Login/RequirAuth/RequirAuth';
import Checkout from './Pages/Checkout/Checkout/Checkout';

function App() {
  return (
    <div className="App">
         
         <Header />
         <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/home' element={<Home />}></Route>
           <Route path='/service/:serviceId' element={<Datiles />}></Route>
           <Route path='/blogs' element={<Blogs />}></Route>
           <Route path='/about' element={<About />}></Route>
           <Route path='/login' element={<Login />}></Route>
           <Route path='/register' element={<Register />}></Route>
           <Route path='/checkou' element={
             <RequirAuth>
               <Checkout></Checkout>
             </RequirAuth>
           }></Route>
           <Route path='*' element={<Notfound />}></Route>
         </Routes>
         <Footer />
    </div>
  );
}

export default App;
