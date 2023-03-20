import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import CardsDetails from './Components/CardsDetails';
import Cards from './Components/Cards';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />}></Route>
        <Route path='/cart' element={<CardsDetails />}></Route>
      </Routes>

    </>
  );
}

export default App;
