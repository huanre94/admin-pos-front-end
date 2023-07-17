import Login from './components/Login'
import Promotion from './components/Promotion'
import Product from './components/Product'
import UserForm from './components/User'
import Home from './components/Home'
import ErrorPage from './components/Error'
import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom'
import User from './components/User'
import PromotionCreate from './components/Promotion/PromotionModal'
import Payrole from './components/Payrole'
import Companies from './components/Companies'
import Invoices from './components/Invoices'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/users' >Usuario</Link>
        {/* <Link to='/promotions' >Promociones</Link> */}
        <Link to='/products' >Productos</Link>
      </nav>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/promotions' element={<Promotion />} />
        <Route path='/payrole' element={<Payrole />} />
        <Route path='/products' element={<Product />} />
        <Route path='/users' element={<User />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/new' element={<PromotionCreate />} />
        <Route path='/invoices' element={<Invoices />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;