import './App.css'
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './components/Layout'
import Characters from './pages/Characters'
import NotFound from './pages/NotFound';


function App() {

  return (
  
    <Routes>
      <Route path='/' element={ <Layout/>}>
        <Route index element={ <Home/>}/>
        <Route path='character/*' element={<Characters/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>     
  
  )
}

export default App
