
import Home from './components/Home'
import Services from './components/services'
import About from './components/about'
import './App.css';
import Gallery from './components/gallery'
import Contact from './components/contact'
import Banner from './components/banner'


function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <About/>
      <Banner/>
      <Gallery/>
      <Contact/>

    </div>
  );
}

export default App;
