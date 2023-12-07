import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Inc/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
