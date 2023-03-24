import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <div className="bg-[#121212] min-h-screen">

      <BrowserRouter>

        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Todos los Productos"}></ItemListContainer>}></Route>
          <Route path='/category/:categoryId/' element={<ItemListContainer greeting={"Productos filtrados por Categoria"}></ItemListContainer>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        </Routes>


      </BrowserRouter>

    </div>

  )
}

export default App
