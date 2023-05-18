import './App.css';
import HomeProduct from './components/homeProduct/HomeProduct';
import Layout from './components/layout/Layout';
import { Routes, Route } from "react-router-dom"
import ProductDetail from './components/productDetail/ProductDetail';
import { Provider } from 'react-redux';
import store from './Redux/store'
import LayoutManagement from './components/layoutManagement/LayoutManagement'

function App() {
  return (

    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<HomeProduct />} />
          <Route path="/detail/:seoName" element={<ProductDetail />} />
        </Route>
        <Route path="/admin" element={<LayoutManagement />} >
        </Route>
      </Routes>
    </ Provider>         
  );
}

export default App;
