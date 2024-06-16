import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Main from './Component/pages/Main/Main'
import Footer from './Component/Footer'
import Price from './Component/pages/Pricing/Price'
import About from './Component/pages/About/About'
import Privacy from './Component/pages/privacy/Privacy'
import Contact from './Component/pages/contact/Contact'
import Submit from './Component/pages/Submit/Submit'

function App() {
  

  return (
    <>
      <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/price' element={<Price/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/pri' element={<Privacy/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Submit' element={<Submit/>} />
        
        
      </Routes>
      <Footer/>
      </div>
        
    </>
  )
}

export default App
