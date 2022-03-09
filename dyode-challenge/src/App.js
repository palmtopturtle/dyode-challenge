import React from 'react';
import './App.scss';
import TopCta from './components/topcta/TopCta';
import Header from './components/header/Header';
import MainCarousel from './components/maincarousel/MainCarousel';
import CollectionTiles from './components/collectiontiles/CollectionTiles';
import ProductCarousel from './components/productcarousel/ProductCarousel';
import FullImage from './components/fullimage/FullImage';
import NewsletterSignup from './components/newslettersignup/NewsletterSignup';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <TopCta />
      <Header />
      <MainCarousel />
      <CollectionTiles />
      <ProductCarousel />
      <FullImage />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
