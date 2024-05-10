import React from 'react';
import Navbar from './GalleryComponents/NavbarGallery';
import '../css/shop_styles.css';
import Header from './GalleryComponents/HeaderGallery';
import ShoppingGallery from './GalleryComponents/ShoppingGallery';

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <Header />
      <ShoppingGallery />
    </div>
  )
}