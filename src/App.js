// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.js"
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import store from './State/store';
import Products from './Components/Products';
import About from './Components/About';

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
