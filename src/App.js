import './css/App.css'
import Home from './routes/Home';
import Brand from './routes/Brand'
import Product from './routes/Product'
import Category from './routes/Category';
import BrandDetail from './routes/BrandDetail'

import Menu from './components/Menu';

import { Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <div className='App'>
        <div className='menu'><Menu/></div>
        <div className='main-screen'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/brands' element={<Brand/>}/>
          <Route path='/brands/:id' element= {<BrandDetail/>}/>
          <Route path='/category' element={<></>}/>
          <Route path='/category/:id' element={<Category></Category>}/>



          <Route path='/products' element={<Product/>}/>     
          <Route path='/chart' element={<div></div>}/>
          <Route path='*' element= {<div> 없는 페이지입니다. </div>}></Route>
        </Routes>
        </div>
    </div>
  );
}


