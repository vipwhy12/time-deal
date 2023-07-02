import './css/App.css'
import Home from './pages/Home';
import Brand from './pages/Brand'
import Product from './pages/Product'
import Rank  from './pages/Rank';
import Category from './pages/Category';
import BrandDetail from './pages/BrandDetail'
import ProductDetail from './pages/ProductDetail'
import BrandCreate from './pages/BrandCreate'

import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import NotFound from './pages/NotFound';


export default function App() {
  return (
    <div className='App'>
      <nav>
        <NavigationBar/>
      </nav>

        <div className='main-screen'>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/brands' element={<Brand/>}/>
          <Route path='/brands/:id' element= {<BrandDetail/>}/>
          <Route path='/brands/create' element={<BrandCreate/>}/>

          <Route path='/category' element={<></>}/>
          <Route path='/category/:id' element={<Category/>}/>

          <Route path='/products' element={<Product/>}/>     
          <Route path='/products/:id' element={<ProductDetail/>}/>
          
          <Route path='/rank' element={<Rank/>}/>
          <Route path='*' element= {<NotFound/>}></Route>
        </Routes>
        </div>
    </div>
  );
}


