import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './components/Home';
import About from './components/About';
import PokeList from './components/PokeList';
import Pokesingle from './components/Pokesingle';
import './App.css';

const RouterWrapper  = (props) => {
  const params = useParams();

  return <Pokesingle params={params} {...props} />

};


class App extends Component {
  render() {
    return (
      <div className='appContainer'>
          <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='pokelist' element={<PokeList />} />
              <Route path='pokelist/:pokesingle' element={<RouterWrapper />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
         </div>
      
    );
  }
}

export default App;
