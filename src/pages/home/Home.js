import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";
import BannerSlider from "../../components/banner_slider/BannerSlider";
import ProductList from '../../components/product_list/ProductList';


const Home = () => {
    return (
        <div className="container-home">
        <Navbar />
        <marquee>
          <h1>ন দীর্ঘ ঈ কার এ আপনাকে স্বাগতম</h1>
        </marquee>
        <div className="home-page-content">
          <BannerSlider />
          <ProductList />
        </div>
      </div>
    );
};

export default Home;