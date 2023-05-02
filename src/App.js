import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Room from './components/Room';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<Room />} path="/Rooms" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
