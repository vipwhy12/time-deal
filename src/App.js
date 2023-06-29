import './App.css';
import Home from './routes/Home';
import Brand from './routes/Brand'
import BrandDetail from './routes/BrandDetail'
import Product from './routes/Product'

import Menu from './components/Menu';

import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios';
import { Component, useState } from 'react';




function App() {
  return (
    <div className='App'>
        <div className='menu'><Menu/></div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/brands' element={<Brand/>}/>
          <Route path='/brands/:id' element= {<BrandDetail/>}/>


          {/* TODO : 가장 많이 판매된 상위 3개 브랜드명, 판매수량 */}
          <Route path='/chart' element={<div></div>}/>

          {/* TODO : 가방, 신발, 패션 상품 전체와 같이 특정 종류의 상품 목록과 상품 수를 조회하고 싶다 */}
          <Route path='/products' element={<Product/>}>     
            {/* <Route path='/fassion' element={<div>카테고리중에 패션을 보여줄 곳이에요</div>}/> */}
            {/* <Route path='/phonecase' element={<div>아이폰/안드로이드 그리고 모델별로 몇대씩 판매</div>}/> */}
          </Route>

          <Route path='*' element= {<div> 없는 페이지입니다. </div>}></Route>
        </Routes>
    </div>
  );
}

export default App;
