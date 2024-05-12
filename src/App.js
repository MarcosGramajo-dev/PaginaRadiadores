
import Home from './pages/Home'
import Services from './components/services'
import About from './components/about'
import './App.css';
// import Gallery from './components/gallery'
import Contact from './components/contact'
import Banner from './components/banner'
import Album from './components/album'
import Faq from './components/faq'
import Comments from './components/comments';

function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <About/>
      <Banner/>
      {/* <Gallery/> */}
      <Album/>
      <Contact/>
      <Comments/>
      <Faq/>

    </div>
  );
}

export default App;
