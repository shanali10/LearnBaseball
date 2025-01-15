import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Rules from './Components/Rules';
import ScrollTop from './Components/ScrollTop';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ScrollTop/>
     <Slider/>
    <Rules/>
    </div>
  );
}

export default App;
