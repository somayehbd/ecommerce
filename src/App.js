import './App.css';
import HomeProduct from './components/homeproduct/HomeProduct';
import Layout from './components/layout/Layout';
import { Routes, Route} from "react-router-dom"
import Map from './components/map/Map';
import DetailProduct from './components/detailproduct/DetailProduct';

function App() {
  return (

    <Routes>
    <Route path="/" element={ <Layout/> } >
      <Route path="/" element={ <HomeProduct/>} />
      <Route path="/detail" element={ <DetailProduct/>} />
    </Route>
  </Routes>

  );
}

export default App;
