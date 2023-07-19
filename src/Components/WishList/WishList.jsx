import React, { useState } from "react";
import "../WishList/wish-list.css"
import "../Navigation2/Navigation2.css";
import "../Navigation3/Navigation3.css";
import Navigation from "../Navigation/Navigation";
import "../NavSubCategory/NavSubCategory.css";
import one from "../../Images/New Construction productsNew/4.png";
import two from "../../Images/New Construction productsNew/6.png";
import three from "../../Images/New Construction productsNew/5.png";
import four from "../../Images/New Construction productsNew/7.png";
import five from "../../Images/New Construction productsNew/8.png";
import six from "../../Images/New Construction productsNew/3.png";
import seven from "../../Images/New Construction productsNew/2.png";
import eight from "../../Images/New Construction productsNew/9.png";
import nine from "../../Images/New Construction productsNew/10.png";
import ten from "../../Images/New Construction productsNew/11.png";
import eleven from "../../Images/New Construction productsNew/12.png";
import twelve from "../../Images/New Construction productsNew/14.png";
import SearchIcon from "@mui/icons-material/Search";
import bestconstructionpartner from "../../Images/bestconstructionpartner.png";
import bannerImg from '../../Images/Construction section/banner-abc.png'
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Footer from "../Footer/Footer";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDropzone } from "react-dropzone";


const WishList = () => {
  const [Position, setPosition] = React.useState("");

  const handleChange = (event) => {
    setPosition(event.target.value);
  };

  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [rating, setRating] = useState("");

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  return (
    <>
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 pt-3 bg-light ">
            {/* <div >
            {" "}
            <hr />
          </div> */}
            <div
              className="col-md-2 card pb-0 mb-0 "
              style={{ backgroundColor: "#f7f7f7" }}
            >
              <h1
                className="my-3 headinginproduct headinginproductinnewlisting"
                style={{ marginLeft: "-13rem" }}
              >
                Filters
              </h1>
              <div className=" filter-sectioncnt">
                <div className="filter-section">
                  <h4 className="filtersectionheading my-3">Price</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="priceRange"
                      id="priceRange1"
                      value="under100"
                      checked={priceRange === "under100"}
                      onChange={handlePriceRangeChange}
                    />
                    <label className="form-check-label" htmlFor="priceRange1">
                      Under $100
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="priceRange"
                      id="priceRange2"
                      value="under200"
                      checked={priceRange === "under200"}
                      onChange={handlePriceRangeChange}
                    />
                    <label className="form-check-label" htmlFor="priceRange2">
                      Under $200
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="priceRange"
                      id="priceRange2"
                      value="under200"
                      checked={priceRange === "under200"}
                      onChange={handlePriceRangeChange}
                    />
                    <label className="form-check-label" htmlFor="priceRange2">
                      Under $300
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="priceRange"
                      id="priceRange2"
                      value="under200"
                      checked={priceRange === "under200"}
                      onChange={handlePriceRangeChange}
                    />
                    <label className="form-check-label" htmlFor="priceRange2">
                      Under $400
                    </label>
                  </div>{" "}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="priceRange"
                      id="priceRange2"
                      value="under200"
                      checked={priceRange === "under200"}
                      onChange={handlePriceRangeChange}
                    />
                    <label className="form-check-label" htmlFor="priceRange2">
                      Under $500
                    </label>
                  </div>
                  <h4 className="filtersectionheading mb-3 mt-4">Sort By</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sortBy"
                      id="sortBy1"
                      value="popularity"
                      checked={sortBy === "popularity"}
                      onChange={handleSortByChange}
                    />
                    <label className="form-check-label" htmlFor="sortBy1">
                      Popularity
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sortBy"
                      id="sortBy2"
                      value="priceHighToLow"
                      checked={sortBy === "priceHighToLow"}
                      onChange={handleSortByChange}
                    />
                    <label className="form-check-label" htmlFor="sortBy2">
                      Price High to Low
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sortBy"
                      id="sortBy3"
                      value="priceLowToHigh"
                      checked={sortBy === "priceLowToHigh"}
                      onChange={handleSortByChange}
                    />
                    <label className="form-check-label" htmlFor="sortBy3">
                      Price Low to High
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sortBy"
                      id="sortBy4"
                      value="newestFirst"
                      checked={sortBy === "newestFirst"}
                      onChange={handleSortByChange}
                    />
                    <label className="form-check-label" htmlFor="sortBy4">
                      Newest First
                    </label>
                  </div>
                  <h4 className="filtersectionheading  mb-3 mt-4">Rating</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rating"
                      id="rating1"
                      value="4starAbove"
                      checked={rating === "4starAbove"}
                      onChange={handleRatingChange}
                    />
                    <label className="form-check-label" htmlFor="rating1">
                      4★ &amp; above
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rating"
                      id="rating2"
                      value="3starAbove"
                      checked={rating === "3starAbove"}
                      onChange={handleRatingChange}
                    />
                    <label className="form-check-label" htmlFor="rating2">
                      3★ &amp; above
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rating"
                      id="rating3"
                      value="2starAbove"
                      checked={rating === "2starAbove"}
                      onChange={handleRatingChange}
                    />
                    <label className="form-check-label" htmlFor="rating3">
                      2★ &amp; above
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rating"
                      id="rating4"
                      value="1starAbove"
                      checked={rating === "1starAbove"}
                      onChange={handleRatingChange}
                    />
                    <label className="form-check-label" htmlFor="rating4">
                      1★ &amp; above
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9  m-0 bg-white p-0">
            {/* <div className="imgcntinNavigationPage">
            <img
              className="card-img-top bnimginsubcategory"
              src={bannerImg}
              alt="Card image cap"
            />
          </div> */}

            <div className="container py-4">
              <div className="row">
                <div className="col-12">
                  <div className="cntforthreediv">
                    <div className="div">
                      <h2 className="handtoolsheading">My Likes</h2>
                    </div>

                    <div className="div">
                      {/* <div className="search-container">
                      <input
                        type="text"
                        className="search-input ps-3"
                        placeholder="Search"
                      />
                      <span className="search-icon">
                        <SearchIcon />
                      </span>
                    </div> */}
                    </div>

                    <div className="div">
                      <div className="sort-container">
                        <span className="sortbytext me-2">Sort by</span>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel
                              id="demo-simple-select-label"
                              style={{ top: "unset", bottom: "24px" }}
                            >
                              Select
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={Position}
                              label="sort by"
                              onChange={handleChange}
                              defaultValue={Position}
                            >
                              <MenuItem value={"listed"}>listed</MenuItem>
                              <MenuItem value={"old-listed"}>
                                Old listed
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container my-5">
              <div className="row">
                <div className="col-lg-3 my-2">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory wishlist-card-img"
                      src={one}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                        {/* <div className="socialiconsinsubcategory">
                          <span className="" title="Give feedback">
                            <i className="fa-regular fa-message"></i>
                          </span>
                          <span title="Add to wishlist" className="">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <span title="Quick View" className="">
                            <i className="fa fa-eye"></i>
                          </span>
                        </div> */}
                      </div>

                      <div className="mt-1">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                      <div className="mt-1">
                        <div className="bottom-icons-area">
                          <div className="right-hard-icon">
                            <FavoriteIcon className="heart" />
                          </div>
                          <div className="left-cmt-area">
                            <ChatBubbleOutlineOutlinedIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 my-2">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory wishlist-card-img"
                      src={two}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                        {/* <div className="socialiconsinsubcategory">
                          <span className="" title="Give feedback">
                            <i className="fa-regular fa-message"></i>
                          </span>
                          <span title="Add to wishlist" className="">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <span title="Quick View" className="">
                            <i className="fa fa-eye"></i>
                          </span>
                        </div> */}
                      </div>

                      <div className="mt-1">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                      <div className="mt-1">
                        <div className="bottom-icons-area">
                          <div className="right-hard-icon">
                            <FavoriteIcon className="heart" />
                          </div>
                          <div className="left-cmt-area">
                            <ChatBubbleOutlineOutlinedIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 my-2">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory wishlist-card-img"
                      src={three}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                        {/* <div className="socialiconsinsubcategory">
                          <span className="" title="Give feedback">
                            <i className="fa-regular fa-message"></i>
                          </span>
                          <span title="Add to wishlist" className="">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <span title="Quick View" className="">
                            <i className="fa fa-eye"></i>
                          </span>
                        </div> */}
                      </div>

                      <div className="mt-1">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                      <div className="mt-1">
                        <div className="bottom-icons-area">
                          <div className="right-hard-icon">
                            <FavoriteIcon className="heart" />
                          </div>
                          <div className="left-cmt-area">
                            <ChatBubbleOutlineOutlinedIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 my-2">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory wishlist-card-img"
                      src={four}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                        {/* <div className="socialiconsinsubcategory">
                          <span className="" title="Give feedback">
                            <i className="fa-regular fa-message"></i>
                          </span>
                          <span title="Add to wishlist" className="">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <span title="Quick View" className="">
                            <i className="fa fa-eye"></i>
                          </span>
                        </div> */}
                      </div>

                      <div className="mt-1">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                      <div className="mt-1">
                        <div className="bottom-icons-area">
                          <div className="right-hard-icon">
                            <FavoriteIcon className="heart" />
                          </div>
                          <div className="left-cmt-area">
                            <ChatBubbleOutlineOutlinedIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 my-2">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory wishlist-card-img"
                      src={one}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                        {/* <div className="socialiconsinsubcategory">
                          <span className="" title="Give feedback">
                            <i className="fa-regular fa-message"></i>
                          </span>
                          <span title="Add to wishlist" className="">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <span title="Quick View" className="">
                            <i className="fa fa-eye"></i>
                          </span>
                        </div> */}
                      </div>

                      <div className="mt-1">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                      <div className="mt-1">
                        <div className="bottom-icons-area">
                          <div className="right-hard-icon">
                            <FavoriteIcon className="heart" />
                          </div>
                          <div className="left-cmt-area">
                            <ChatBubbleOutlineOutlinedIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 my-2">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory wishlist-card-img"
                      src={two}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                        {/* <div className="socialiconsinsubcategory">
                          <span className="" title="Give feedback">
                            <i className="fa-regular fa-message"></i>
                          </span>
                          <span title="Add to wishlist" className="">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <span title="Quick View" className="">
                            <i className="fa fa-eye"></i>
                          </span>
                        </div> */}
                      </div>

                      <div className="mt-1">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                      <div className="mt-1">
                        <div className="bottom-icons-area">
                          <div className="right-hard-icon">
                            <FavoriteIcon className="heart" />
                          </div>
                          <div className="left-cmt-area">
                            <ChatBubbleOutlineOutlinedIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 my-2">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory wishlist-card-img"
                      src={three}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                        {/* <div className="socialiconsinsubcategory">
                          <span className="" title="Give feedback">
                            <i className="fa-regular fa-message"></i>
                          </span>
                          <span title="Add to wishlist" className="">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <span title="Quick View" className="">
                            <i className="fa fa-eye"></i>
                          </span>
                        </div> */}
                      </div>

                      <div className="mt-1">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                      <div className="mt-1">
                        <div className="bottom-icons-area">
                          <div className="right-hard-icon">
                            <FavoriteIcon className="heart" />
                          </div>
                          <div className="left-cmt-area">
                            <ChatBubbleOutlineOutlinedIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 my-2">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory wishlist-card-img"
                      src={four}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                        {/* <div className="socialiconsinsubcategory">
                          <span className="" title="Give feedback">
                            <i className="fa-regular fa-message"></i>
                          </span>
                          <span title="Add to wishlist" className="">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <span title="Quick View" className="">
                            <i className="fa fa-eye"></i>
                          </span>
                        </div> */}
                      </div>

                      <div className="mt-1">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                      <div className="mt-1">
                        <div className="bottom-icons-area">
                          <div className="right-hard-icon">
                            <FavoriteIcon className="heart" />
                          </div>
                          <div className="left-cmt-area">
                            <ChatBubbleOutlineOutlinedIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row my-3">
                <div className="col-lg-3">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory"
                      src={five}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory"
                      src={six}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory"
                      src={seven}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory"
                      src={eight}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="row">
                <div className="col-lg-3">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory"
                      src={nine}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory"
                      src={ten}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory"
                      src={eleven}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card bg-white">
                    <img
                      className="img img-fluid imginsubcategory"
                      src={twelve}
                      alt="Soft Chair"
                    />
                    <div className="card-body cardbodyinsubcategory">
                      <div className="scbtinsubcategory">
                        <div className="mt-1">
                          <h3 className="card-title cardtitleinsubcategory">
                            Grande
                          </h3>
                          <span className="text-muted cardparainsubcategory">
                            Blossom Pouch
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h3 className="card-title m-0 p-0  cardtitleinsubcategory">
                          $39.49
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row my-4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                  }}
                >
                  <nav aria-label="...">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <span className="page-link">
                          2<span className="sr-only">(current)</span>
                        </span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WishList;
