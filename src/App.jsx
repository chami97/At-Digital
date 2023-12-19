import './App.css';
import NavBar from './component/NavBar';
import HeroComponent from './component/HeroComponent';
import MobiApp from './component/MobiApp';
import Degital from './component/Digital';
import Footer from './component/Footer';

const App =()=> {
  return (
  <div>
    <NavBar />
    <HeroComponent/>
    <MobiApp/>
    <Degital/>
    <Footer/>
  </div>
  )
}

export default App;
