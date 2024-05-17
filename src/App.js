import React, { Suspense, lazy } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./components/services'));
const About = lazy(() => import('./components/about'));
const Contact = lazy(() => import('./components/contact'));
const Banner = lazy(() => import('./components/banner'));
const Album = lazy(() => import('./components/album'));
const Faq = lazy(() => import('./components/faq'));
const Comments = lazy(() => import('./components/comments'));
// const Gallery = lazy(() => import('./components/gallery'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <Services />
        <About />
        <Banner />
        {/* <Gallery /> */}
        <Album />
        <Contact />
        <Comments />
        <Faq />
      </Suspense>
    </div>
  );
}

export default App;
