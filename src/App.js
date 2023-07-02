import './css/App.css'
import Home from './routes/Home';
import Brand from './routes/Brand'
import Product from './routes/Product'
import Rank  from './routes/Rank';
import Category from './routes/Category';
import BrandDetail from './routes/BrandDetail'
import ProductDetail from './routes/ProductDetail'

import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';


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
          {/* <Route path='/brand/'/> */}

          <Route path='/category' element={<></>}/>
          <Route path='/category/:id' element={<Category/>}/>

          <Route path='/products' element={<Product/>}/>     
          <Route path='/products/:id' element={<ProductDetail/>}/>
          
          <Route path='/rank' element={<Rank/>}/>
          <Route path='*' element= {<div> 없는 페이지입니다. </div>}></Route>
        </Routes>
        </div>
    </div>
  );
}


