import './App.css';
import homeMain from "./assets/homeMain.jpg";
import Header from './components/Header';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <>
      <Header />
      <PageHeader image={homeMain} title='Luxurious Rooms' message='Deluxe Rooms Starting At $299' buttonTitle='Our Rooms'/>
    </>
  );
}

export default App;
