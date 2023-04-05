import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/detail/Detail';
import HomeProduct from './components/homeproduct/HomeProduct';
import Layout from './components/layout/Layout';
// import Layout from './components/layout/Layout';

function App() {
  return (
    // <Layout/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeProduct />} />
        <Route path="product" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
