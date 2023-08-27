import './css/App.css';
import Home from './pages/Home';
import Brands from './pages/brand/Brands';
import Products from './pages/product/Products';
import Category from './pages/category/Category';
import Brand from './pages/brand/Brand';
import Product from './pages/product/Product';
import NotFound from './pages/NotFound';
import Sales from './pages/Sale/Sales';
import Sale from './pages/Sale/Sale';
import Signup from './pages/Signup/Signup';

import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Categories from './pages/category/Categories';

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavigationBar />
      </nav>

      <MainContainer className="main-screen">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:id" element={<Brand />} />

          <Route path="/category" element={<Categories />} />
          <Route path="/category/:id" element={<Category />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />

          <Route path="/sales" element={<Sales />} />
          <Route path="/sales/:id" element={<Sale />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.main`
  padding: 35px 180px;
`;
