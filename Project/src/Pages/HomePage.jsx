import React from "react";
import Slider from "react-slick";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import Images from "./Images";
import SquareImage from "./SquareImage";
import MultipleItems from "./Slider";
import Editorial from "./Editorial";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <img className="img" src="EOSS_mobile_UK.jpg" alt="" />
        <video loop autoPlay>
          <source src="video-home.mp4" type="video/mp4"></source>
        </video>
        <div className="overlay-text">
          <h1 className="text-one">UP TO 60% OFF</h1>
          <h1 className="text-two">Shirts from €29.95</h1>
          <Link to='/product'><button className="btn">SHOP SALE SHIRTS</button></Link>
          <button className="btn">SHOP ALL SALE</button>
        </div>
      </div>
      
        {/* <MultipleItems></MultipleItems> */}
        <div className="carousel" style={{justifyContent:"center"}}>
          <Images></Images>
          <Images></Images>
          <Images></Images>
          <Images></Images>
        </div>
        <div id="squareImage">
          <SquareImage></SquareImage>
          <SquareImage></SquareImage>
          <SquareImage></SquareImage>
          <SquareImage></SquareImage>
          <SquareImage></SquareImage>
          <SquareImage></SquareImage>
        </div>
        <div className="wedding">
          <img className="img-one" src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwf898eadf/merchAssets/SS24/Homepage/HP3/hp3-summer-wedding-desktop.jpg?sw=1440" alt=""  />
          <img className="img-two" src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw7896d021/merchAssets/SS24/Homepage/HP3/hp3-summer-wedding-mobile.jpg" alt="" />
          <div className="wedoverlay-text">
          <h1 className="wedtext-one">Summer Weddings</h1>
          <p className="wedtext-two">Dress up in timeless tailoring with contemporary flair - think pastel shirts and accessories, and suits in fresh colours beyond black.</p>
          <button className="button">EXPLORE MORE</button>
        </div>
        </div>
        <div className="editorial">
          <Editorial></Editorial>
          <Editorial></Editorial>
          <Editorial></Editorial>
          <Editorial></Editorial>
        </div>
      
    </>
  );
};

export default HomePage;
