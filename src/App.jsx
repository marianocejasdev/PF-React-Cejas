import React from 'react'

import { Notification, NotificationProvider } from './notification/NotificationService';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Error from './components/Error/Error';


const App = () => {
  return (

    <div className="flex flex-col min-h-screen bg-[#121212]">
      <NotificationProvider>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>

              <NavBar></NavBar>

              <Routes>
                <Route path='/' element={<ItemListContainer greeting={"Todos los Productos"}></ItemListContainer>}></Route>
                <Route path='/category/:categoryId/' element={<ItemListContainer greeting={"Productos filtrados por Categoria"}></ItemListContainer>}></Route>
                <Route path='/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/cart' element={<Cart></Cart>} />
                <Route path='/checkout' element={<Checkout></Checkout>} />
                <Route path='*' element={<Error></Error>} />

              </Routes>

            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  )
}

export default App