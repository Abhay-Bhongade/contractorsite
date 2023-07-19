import '../Checkout/checkout.css'
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
import Footer from "../Footer/Footer";
import LinaerStepper from './stepper-checkout';
import StepperFrom from './stepper';

const steps = ["Shipping", "Payment", "Review"];


const Checkout = () => {

    
  return (
    <>
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 pt-5 bg-light ">
            {/* <div >
            {" "}
            <hr />
          </div> */}
            <div
              className="col-md-2 card pb-0 mb-0 "
              style={{ backgroundColor: "#FFF" , marginTop:"150px"}}
            >
              <div className="container card-container-checkout">
                <div className="row">
                  <div className="col-md-4 my-2">
                    <div className="card-product-checkout-img">
                      <img src={one} alt="" />
                    </div>
                  </div>
                  <div className="col-md-8 my-2">
                    <div className="text-card-checkout">
                      <div className="product-name-card">
                        <p>Grande</p>
                      </div>
                      <div className="product-para-card">
                        <p>Blossom Pouch</p>
                      </div>
                      <div className="product-price-card">
                        <p>$39.49</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 my-3 border-top ">
                    <div className="main-checkout-price-are mt-2">
                      <div className="main-checkout-price-left">
                        <p>Price</p>
                      </div>
                      <div className="main-checkout-price-right">
                        <p>$13.00</p>
                      </div>
                    </div>
                    <div className="main-checkout-price-are mt-2">
                      <div className="main-checkout-price-left">
                        <p>Shipping</p>
                      </div>
                      <div className="main-checkout-price-right">
                        <p>$7.97</p>
                      </div>
                    </div>
                    <div className="main-checkout-price-are mt-2">
                      <div className="main-checkout-price-left">
                        <p>Tax</p>
                      </div>
                      <div className="main-checkout-price-right">
                        <p>--</p>
                      </div>
                    </div>
                    <div className="main-checkout-price-are mt-2">
                      <div className="main-checkout-price-left">
                        <p>Total</p>
                      </div>
                      <div className="main-checkout-price-right">
                        <p>$20.97</p>
                      </div>
                    </div>
                    <div className="main-checkout-price-are mt-2">
                      <div className="main-checkout-price-left-main">
                        <p>Net Charged</p>
                      </div>
                      <div className="main-checkout-price-right-main">
                        <p>$20.97</p>
                      </div>
                    </div>
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

            <div className="container py-3">
              <div className="row">
                <div className="col-12">
                  <div className="cntforthreediv">
                    <div className="div">
                      <h2 className="handtoolsheading">Secure Checkout</h2>
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
                        {/* <span className="sortbytext me-2">Sort by</span>
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
                        </Box> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container ">
              <div className="row">
                <div className="col-md-12" style={{paddingRight:"9rem" , paddingLeft:"9rem" }}>
                  {/* <LinaerStepper/> */}
                  <StepperFrom/>
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

export default Checkout;
