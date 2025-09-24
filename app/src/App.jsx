import EnemigoGet from './EnemigoGet.jsx'
import EnemigoPost from './EnemigoPost.jsx'
import Home from './Home.jsx'
import ActualizarEnemigo from './ActualizarEnemigo.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import NivelGet from './Nivelget.jsx'
import NivelPost from './NivelPost.jsx'
import ActualizarNivel from './ActualizarNivel.jsx'
import NivelEnemigoGet from './NivelEnemigoGet.jsx' 
import NivelEnemigoPost from './NivelEnemigoPost.jsx'
import ActualizarNivelEnemigo from './NIvelEnemigoAtualizar.jsx'

function App() {
  

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/enemigo' element={<EnemigoGet/>}/>
        <Route path='/crear-enemigo' element={<EnemigoPost/>}/>
        <Route path='/actualizar/:id' element={<ActualizarEnemigo/>}/>
        <Route path='/nivel' element={<NivelGet/>}/>
        <Route path='/crear-nivel' element={<NivelPost/>}/>
        <Route path='/actualizarNivel/:id' element={<ActualizarNivel/>}/>
        <Route path='/nivel-enemigo' element={<NivelEnemigoGet/>}/>
        <Route path='/crear-nivel-enemigo' element={<NivelEnemigoPost/>}/>
        <Route path='/actualizarNivelEnemigo/:id' element={<ActualizarNivelEnemigo/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
