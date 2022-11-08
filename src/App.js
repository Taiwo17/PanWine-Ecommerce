import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmptyCart from './components/EmptyCart'
import Cart from './pages/Cart/Cart'
import Homepage from './pages/Home/Homepage'
import { store } from './redux/store'
import CartDisplay from './pages/Cart/CartDisplay'
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<Homepage />} path='/' />
          <Route element={<Cart />} path='/cart' />
          <Route element={<EmptyCart />} path='/empty' />
          <Route element={<CartDisplay />} path='/cart-display' />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
