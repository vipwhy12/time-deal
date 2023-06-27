import './App.css';
import Brand from './routes/Brand'
import Home from './routes/Home';

import Menu from './components/Menu';

import { Routes, Route, Link } from 'react-router-dom'



function App() {

  return (
    <div className='App'>
        <div className='menu'><Menu/></div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/brand' element={<Brand/>}/>
          <Route path='*' element= {<div> 없는 페이지입니다. </div>}></Route>
        </Routes>
    </div>
  );
}

export default App;
