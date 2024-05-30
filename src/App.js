import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Register from './Register.js';
import Fruit from './Fruit.js';
import Buynow from './Buynow.js';
import { CartProvider } from './CartContext';

function App(){
    return(
       <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<Register/>} />
                        <Route path="/fruit" element={<Fruit/>} />
                        <Route path="/buynow" element={<Buynow/>} />
                    </Routes>
                </BrowserRouter>
        </CartProvider>
    )
}

export default App;
