import Navigation from "../Navigation/Navigation";
import React, { useState } from "react";
import Navigation3 from "../Navigation3/Navigation3";
import Footer from "../Footer/Footer";
// import four from "../../Images/New Construction productsNew/4.png";
import one from "../../Images/New Construction productsNew/1.png";
import two from "../../Images/New Construction productsNew/2.png";
import three from "../../Images/New Construction productsNew/3.png";
import four from "../../Images/New Construction productsNew/4.png";
import five from "../../Images/New Construction productsNew/5.png";
import six from "../../Images/New Construction productsNew/6.png";
import seven from "../../Images/New Construction productsNew/7.png";
import eight from "../../Images/New Construction productsNew/8.png";
import card1 from "../../Images/New Construction productsNew/grande-card.svg";
import card2 from "../../Images/New Construction productsNew/grander-card-2.svg";
import card3 from "../../Images/New Construction productsNew/grander-card-3.svg";
import card4 from "../../Images/New Construction productsNew/grander-card-4.svg";
import "../ViewProduct/view-product.css";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import NavigationViewProduct from "../Navigation-view-product/Navigation-view-product";
import profile1 from '../../Images/Construction section/1.png';
import profile2 from "../../Images/Construction section/2.png";
import profile3 from "../../Images/Construction section/3.png";
import profile4 from "../../Images/Construction section/4.png";
import { Link } from "react-router-dom";
var settings = {
  dots: false, // Set dots to false
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: false, // Enable autoplay

  infinite: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false, // Set dots to false
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false, // Set dots to false
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false, // Set dots to false
      },
    },
  ],
};

const ViewProduct = () => {
  const imgs = [
    { id: 0, value: four },
    { id: 1, value: three },
    { id: 2, value: two },
    { id: 3, value: four },
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 view-img-area my-3 mx-auto">
            <div
              id="carouselHero"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselHero"
                  className="active"
                  aria-current="true"
                  data-bs-slide-to="0"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselHero"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={sliderData.value}
                    className="d-block w-100"
                    alt="Image Description"
                  />
                </div>
                <div className="carousel-item">
                  <img src={three} className="d-block w-100" alt="POW Logo" />
                </div>
                <div className="carousel-item">
                  <img src={two} className="d-block w-100" alt="POW Logo" />
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselHero"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselHero"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="visually-hidden"
                    onClick={(i) => handleClick(i)}
                  >
                    Next
                  </span>
                </button>
              </div>
            </div>
            <div className="flex_roww">
              {imgs.map((data, i) => (
                <div className="thumbnail mx-2">
                  <img
                    className={sliderData.id == i ? "clicked" : "hhh"}
                    key={data.id}
                    src={data.value}
                    onClick={() => handleClick(i)}
                    height="70"
                    width="100"
                  />
                </div>
              ))}
            </div>
            <div className="right-side-btn-area">
              <div className="right-side-mid">
                <div className="right-side-icon">
                  <FavoriteBorderOutlinedIcon className="icon" />
                </div>
                <div className="right-side-text">
                  <p>Like</p>
                </div>
              </div>
              <div className="right-side-mid">
                <div className="right-side-icon">
                  <ModeCommentOutlinedIcon className="icon" />
                </div>
                <div className="right-side-text">Comment</div>
              </div>
              <div className="right-side-mid">
                <div className="right-side-icon">
                  <IosShareOutlinedIcon className="icon" />
                </div>
                <div className="right-side-text">Share</div>
              </div>
            </div>
            <div className="right-side-cmt-area mt-3">
              <div className="top-containt-cmt-area">
                <div className="cmt-img-area">
                  <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src={profile1} />
                    <Avatar alt="Travis Howard" src={profile2} />
                    <Avatar alt="Cindy Baker" src={profile3} />
                    <Avatar alt="Agnes Walker" src={profile4} />
                    <Avatar alt="Trevor Henderson" src={four} />
                  </AvatarGroup>
                </div>
                <div className="cmt-text-area">
                  <p>
                    <strong className="yellow-text">Lexyy819 </strong>and{" "}
                    <strong className="yellow-text">4 other </strong>like this
                  </p>
                </div>
              </div>
              <div className="cmt-input-area mt-4">
                <div className="cmt-input-profile">
                  <Avatar alt="Remy Sharp" src={profile1} />
                </div>
                <div className="cmt-input">
                  <input type="text" placeholder="Add your comment..." />
                </div>
              </div>
              <div className="btn-cmt-area mt-2">
                <div className="btn-cmt">
                  <p>Send</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 view-containt-area">
            <div className="container">
              <div className="heading-view-product mt-2">
                <h4>Grande</h4>
                <p>Blossom Pouch</p>
              </div>
              <div className="reading-container mt-2">
                <div className="reting-star-area">
                  {/* <Stack spacing={1}> */}
                  <Rating name="half-rating" defaultValue={4} precision={0.5} />
                  {/* </Stack> */}
                </div>
                <div className="reting-text-area">
                  <p>(43) Ratings</p>
                </div>
              </div>
              <div className="price-area mt-2 pb-3 ">
                <div className="price-left">
                  <p>$39.49</p>
                </div>
                <div className="price-right">
                  <p>$78.66</p>
                </div>
              </div>
              <div className="quantity-area mt-3">
                <div className="text-quantity">
                  <p>Quantity</p>
                </div>
                <div className="quantity-counter">
                  <div className="quantity">
                    <a href="#" className="quantity__minus">
                      <span>-</span>
                    </a>
                    <input
                      name="quantity"
                      type="text"
                      className="quantity__input"
                      value="1"
                    />
                    <a href="#" className="quantity__plus">
                      <span>+</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="buttom-area mt-3">
                <div className="buy-now-btn">
                  <div className="icon-area-btn">
                    <LocalMallOutlinedIcon />
                  </div>
                  <div className="text-area-btn">
                  <Link to="/checkout">  <p>Buy Now</p> </Link>
                  </div>
                </div>
                <div className="add-wishlist-btn">
                  <div className="icon-area-btn">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="text-area-btn2">
                    <p>Add To Wishlist</p>
                  </div>
                </div>
              </div>
              <div className="delivery-details-area pb-3 mt-3">
                <div className="delivery-details-top">
                  <p>Delivery Details</p>
                </div>
                <div className="delivery-details-bottom">
                  <p>Check estimated delivery date/pickup option.</p>
                </div>
              </div>
              <div className="about-seller-area mt-3">
                <div className="heading-about-seller mb-1">
                  <p>About the seller</p>
                </div>
                <div className="profile-sellet-area">
                  <div className="profile-area">
                    <Avatar alt="Remy Sharp" src="" />
                  </div>
                  <div className="seller-text-area mb-1">
                    <div className="seller-name">
                      <p>@Jhon.w</p>
                    </div>
                    <div className="address-area-seller mt-1">
                      <div className="seen-time">
                        <div className="seller-time-icon">
                          <AccessTimeOutlinedIcon />
                        </div>
                        <div className="text-seller-time">
                          <p>Last Active:1m ago</p>
                        </div>
                      </div>
                      <div className="address-seller mt-1">
                        <div className="address-icon-seller">
                          <LocationOnOutlinedIcon />
                        </div>
                        <div className="address-seller-text">
                          <p>Canada</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttom-listing-area mt-3 pt-3 pb-3">
                <div className="buttom-mid-area">
                  <div className="top-buttom-text">
                    <p>855</p>
                  </div>
                  <div className="buttom-b-text">
                    <p>Listings</p>
                  </div>
                </div>
                <div className="buttom-mid-area">
                  <div className="top-buttom-text">
                    <p>400+</p>
                  </div>
                  <div className="buttom-b-text">
                    <p>Sold Listings</p>
                  </div>
                </div>{" "}
                <div className="buttom-mid-area">
                  <div className="top-buttom-text">
                    <p>1 day</p>
                  </div>
                  <div className="buttom-b-text">
                    <p>Avg. Ship time</p>
                  </div>
                </div>{" "}
                <div className="buttom-mid-area">
                  <div className="top-buttom-text">
                    <p>40</p>
                  </div>
                  <div className="buttom-b-text">
                    <p>Love Notes</p>
                  </div>
                </div>
              </div>
              <div className="product-discription-area mt-4">
                <div className="product-dis-heading ">
                  <p>Product Description</p>
                </div>
                <div className="product-dis-paraghraph mt-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting.
                     {/* remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        {/* <div className="row my-5 mx-auto">
          <div className="col-md-12 other-top-heading">
            <p>Other Products You May Like</p>
          </div>
          <div className="col mx-auto card-other-main">
            <div className="card" style={{ width: "13rem", borderRadius: "16px" }}>
              <div className="img-lyear">
                <img src={card1} className="card-img-top" />
              </div>
              <div className="card-body other-products">
                <div className="text-card-left">
                  <div className="heading-right">
                    <p>Grande</p>
                  </div>
                  <div className="buttom-heading-right">
                    <p>Blossom Pouch</p>
                  </div>
                  <div className="right-reting-area">
                    <div className="right-reting">
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </div>
                    <div className="right-reting-text">
                      <p>43 Ratings</p>
                    </div>
                  </div>
                  <div className="right-price-area">
                    <div className="main-right-price">
                      <p>$39.49</p>
                    </div>
                    <div className="cut-right-price">
                      <p>$78.66</p>
                    </div>
                  </div>
                </div>
                <div className="icons-card-right">
                  <div className="fev-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="cmd-icon">
                    <TextsmsOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-auto card-other-main">
            <div className="card" style={{ width: "13rem", borderRadius: "16px" }}>
              <div className="img-lyear">
                <img src={card2} className="card-img-top" />
              </div>
              <div className="card-body other-products">
                <div className="text-card-left">
                  <div className="heading-right">
                    <p>Grande</p>
                  </div>
                  <div className="buttom-heading-right">
                    <p>Blossom Pouch</p>
                  </div>
                  <div className="right-reting-area">
                    <div className="right-reting">
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </div>
                    <div className="right-reting-text">
                      <p>43 Ratings</p>
                    </div>
                  </div>
                  <div className="right-price-area">
                    <div className="main-right-price">
                      <p>$39.49</p>
                    </div>
                    <div className="cut-right-price">
                      <p>$78.66</p>
                    </div>
                  </div>
                </div>
                <div className="icons-card-right">
                  <div className="fev-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="cmd-icon">
                    <TextsmsOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-auto card-other-main">
            <div className="card" style={{ width: "13rem", borderRadius: "16px" }}>
              <div className="img-lyear">
                <img src={card3} className="card-img-top" />
              </div>
              <div className="card-body other-products">
                <div className="text-card-left">
                  <div className="heading-right">
                    <p>Grande</p>
                  </div>
                  <div className="buttom-heading-right">
                    <p>Blossom Pouch</p>
                  </div>
                  <div className="right-reting-area">
                    <div className="right-reting">
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </div>
                    <div className="right-reting-text">
                      <p>43 Ratings</p>
                    </div>
                  </div>
                  <div className="right-price-area">
                    <div className="main-right-price">
                      <p>$39.49</p>
                    </div>
                    <div className="cut-right-price">
                      <p>$78.66</p>
                    </div>
                  </div>
                </div>
                <div className="icons-card-right">
                  <div className="fev-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="cmd-icon">
                    <TextsmsOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-auto card-other-main">
            <div className="card" style={{ width: "13rem", borderRadius: "16px" }}>
              <div className="img-lyear">
                <img src={card4} className="card-img-top" />
              </div>
              <div className="card-body other-products">
                <div className="text-card-left">
                  <div className="heading-right">
                    <p>Grande</p>
                  </div>
                  <div className="buttom-heading-right">
                    <p>Blossom Pouch</p>
                  </div>
                  <div className="right-reting-area">
                    <div className="right-reting">
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </div>
                    <div className="right-reting-text">
                      <p>43 Ratings</p>
                    </div>
                  </div>
                  <div className="right-price-area">
                    <div className="main-right-price">
                      <p>$39.49</p>
                    </div>
                    <div className="cut-right-price">
                      <p>$78.66</p>
                    </div>
                  </div>
                </div>
                <div className="icons-card-right">
                  <div className="fev-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="cmd-icon">
                    <TextsmsOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-auto card-other-main">
            <div className="card" style={{ width: "13rem", borderRadius: "16px" }}>
              <div className="img-lyear">
                <img src={card2} className="card-img-top" />
              </div>
              <div className="card-body other-products">
                <div className="text-card-left">
                  <div className="heading-right">
                    <p>Grande</p>
                  </div>
                  <div className="buttom-heading-right">
                    <p>Blossom Pouch</p>
                  </div>
                  <div className="right-reting-area">
                    <div className="right-reting">
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </div>
                    <div className="right-reting-text">
                      <p>43 Ratings</p>
                    </div>
                  </div>
                  <div className="right-price-area">
                    <div className="main-right-price">
                      <p>$39.49</p>
                    </div>
                    <div className="cut-right-price">
                      <p>$78.66</p>
                    </div>
                  </div>
                </div>
                <div className="icons-card-right">
                  <div className="fev-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="cmd-icon">
                    <TextsmsOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row my-5 mx-auto">
          <div className="col-md-12 other-top-heading">
            <p>Trending Now</p>
          </div>
          <div className="col mx-auto card-other-main">
            <div
              className="card"
              style={{ width: "13rem", borderRadius: "16px" }}
            >
              <div className="img-lyear">
                <img src={card1} className="card-img-top" />
              </div>
              <div className="card-body other-products">
                <div className="text-card-left">
                  <div className="heading-right">
                    <p>Grande</p>
                  </div>
                  <div className="buttom-heading-right">
                    <p>Blossom Pouch</p>
                  </div>
                  <div className="right-reting-area">
                    <div className="right-reting">
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </div>
                    <div className="right-reting-text">
                      <p>43 Ratings</p>
                    </div>
                  </div>
                  <div className="right-price-area">
                    <div className="main-right-price">
                      <p>$39.49</p>
                    </div>
                    <div className="cut-right-price">
                      <p>$78.66</p>
                    </div>
                  </div>
                </div>
                <div className="icons-card-right">
                  <div className="fev-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="cmd-icon">
                    <TextsmsOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-auto card-other-main">
            <div
              className="card"
              style={{ width: "13rem", borderRadius: "16px" }}
            >
              <div className="img-lyear">
                <img src={card2} className="card-img-top" />
              </div>
              <div className="card-body other-products">
                <div className="text-card-left">
                  <div className="heading-right">
                    <p>Grande</p>
                  </div>
                  <div className="buttom-heading-right">
                    <p>Blossom Pouch</p>
                  </div>
                  <div className="right-reting-area">
                    <div className="right-reting">
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </div>
                    <div className="right-reting-text">
                      <p>43 Ratings</p>
                    </div>
                  </div>
                  <div className="right-price-area">
                    <div className="main-right-price">
                      <p>$39.49</p>
                    </div>
                    <div className="cut-right-price">
                      <p>$78.66</p>
                    </div>
                  </div>
                </div>
                <div className="icons-card-right">
                  <div className="fev-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="cmd-icon">
                    <TextsmsOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-auto card-other-main">
            <div
              className="card"
              style={{ width: "13rem", borderRadius: "16px" }}
            >
              <div className="img-lyear">
                <img src={card3} className="card-img-top" />
              </div>
              <div className="card-body other-products">
                <div className="text-card-left">
                  <div className="heading-right">
                    <p>Grande</p>
                  </div>
                  <div className="buttom-heading-right">
                    <p>Blossom Pouch</p>
                  </div>
                  <div className="right-reting-area">
                    <div className="right-reting">
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </div>
                    <div className="right-reting-text">
                      <p>43 Ratings</p>
                    </div>
                  </div>
                  <div className="right-price-area">
                    <div className="main-right-price">
                      <p>$39.49</p>
                    </div>
                    <div className="cut-right-price">
                      <p>$78.66</p>
                    </div>
                  </div>
                </div>
                <div className="icons-card-right">
                  <div className="fev-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="cmd-icon">
                    <TextsmsOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-auto card-other-main">
            <div
              className="card"
              style={{ width: "13rem", borderRadius: "16px" }}
            >
              <div className="img-lyear">
                <img src={card4} className="card-img-top" />
              </div>
              <div className="card-body other-products">
                <div className="text-card-left">
                  <div className="heading-right">
                    <p>Grande</p>
                  </div>
                  <div className="buttom-heading-right">
                    <p>Blossom Pouch</p>
                  </div>
                  <div className="right-reting-area">
                    <div className="right-reting">
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </div>
                    <div className="right-reting-text">
                      <p>43 Ratings</p>
                    </div>
                  </div>
                  <div className="right-price-area">
                    <div className="main-right-price">
                      <p>$39.49</p>
                    </div>
                    <div className="cut-right-price">
                      <p>$78.66</p>
                    </div>
                  </div>
                </div>
                <div className="icons-card-right">
                  <div className="fev-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="cmd-icon">
                    <TextsmsOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-auto card-other-main">
            <div
              className="card"
              style={{ width: "13rem", borderRadius: "16px" }}
            >
              <div className="img-lyear">
                <img src={card2} className="card-img-top" />
              </div>
              <div className="card-body other-products">
                <div className="text-card-left">
                  <div className="heading-right">
                    <p>Grande</p>
                  </div>
                  <div className="buttom-heading-right">
                    <p>Blossom Pouch</p>
                  </div>
                  <div className="right-reting-area">
                    <div className="right-reting">
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                      />
                    </div>
                    <div className="right-reting-text">
                      <p>43 Ratings</p>
                    </div>
                  </div>
                  <div className="right-price-area">
                    <div className="main-right-price">
                      <p>$39.49</p>
                    </div>
                    <div className="cut-right-price">
                      <p>$78.66</p>
                    </div>
                  </div>
                </div>
                <div className="icons-card-right">
                  <div className="fev-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className="cmd-icon">
                    <TextsmsOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewProduct;
