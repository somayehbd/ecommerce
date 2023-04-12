import './App.css';
import HomeProduct from './components/homeproduct/HomeProduct';
import Layout from './components/layout/Layout';
import { Routes, Route } from "react-router-dom"
import DetailProduct from './components/detailproduct/DetailProduct';
import { Provider } from 'react-redux';
import store from './Redux/store'

function App() {
  return (

    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<HomeProduct />} />
          <Route path="/detail/:seoName" element={<DetailProduct />} />
        </Route>
      </Routes>
         </ Provider>
         
  );
}

export default App;
