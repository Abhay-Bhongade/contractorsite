import Navigation from "../Components/Navigation/Navigation";
import React, { useState, useRef, useEffect } from "react";
// import Navigation3 from "../Navigation3/Navigation3";
import Footer from "../Components/Footer/Footer";
// import four from "../../Images/New Construction productsNew/4.png";
// import one from "../../Images/New Construction productsNew/1.png";
// import two from "../../Images/New Construction productsNew/2.png";
// import three from "../../Images/New Construction productsNew/3.png";
// import four from "../../Images/New Construction productsNew/4.png";
// import five from "../../Images/New Construction productsNew/5.png";
// import six from "../../Images/New Construction productsNew/6.png";
// import seven from "../../Images/New Construction productsNew/7.png";
// import eight from "../../Images/New Construction productsNew/8.png";
// import card1 from "../../Images/New Construction productsNew/grande-card.svg";
// import card2 from "../../Images/New Construction productsNew/grander-card-2.svg";
// import card3 from "../../Images/New Construction productsNew/grander-card-3.svg";
// import card4 from "../../Images/New Construction productsNew/grander-card-4.svg";
import "../../src/Create-Listing/create-listing.css";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Avatar from "@mui/material/Avatar";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
// import NavigationViewProduct from "../Navigation-view-product/Navigation-view-product";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

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

const CreateListing = () => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  //
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*,video/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  //

  const [color, setColor] = useState("");
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const selectFiles = () => {
    fileInputRef.current.click();
  };
  const onFileSelect = (e) => {
    const files = e.target.files;
    console.log("lkjlkj:", files);
    if (files.lenght === 0) return;
    for (let i = 0; i < files.lenght; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };
  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    console.log(index);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
  };
  const uploadImages = () => {
    console.log("images:", images);
  };
  console.log("imageshkhjk:", images);

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row my-2">
          <div className="heading mt-4 mb-4">
            <p>Create Listing</p>
          </div>
          <div className="col-md-12 upload-img-listing-top border-top">
            <div className="row mt-4">
              <div className="right-side-img-text col-md-4 ">
                <div className="mid-text-listing">
                  <div className="top-heading-img mt-3">
                    <p>PHOTOS & VIDEO</p>
                  </div>
                  <div className="buttom-img-text mt-3">
                    <p>
                      Add up to 10 photos and 1 video to show the angles and
                      details of your item.
                    </p>
                  </div>
                </div>
              </div>
              <div className="left-side-img-area col-md-8">
                {/* <div className="card-main">
                  <div className="top">
                    <p>Drag & Drop Image uploading</p>
                  </div>
                  <div
                    className="drag-area"
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                  >
                    {isDragging ? (
                      <span className="select">Drop Image Here</span>
                    ) : (
                      <>
                        Drag & Drop image here or{" "}
                        <span
                          className="select"
                          role="button"
                          onClick={selectFiles}
                        >
                          Browse
                        </span>
                      </>
                    )}

                    <input
                      name="file"
                      type="file"
                      className="file"
                      multiple
                      ref={fileInputRef}
                      onChange={onFileSelect}
                    />
                  </div>
                  <div className="container-img">
                    {images.map((image, index) => (
                      <div className="image" key={index}>
                        <span
                          className="delete"
                          onClick={() => deleteImage(index)}
                        >
                          &times;
                        </span>
                        <img src={image.url} alt={image.name} />
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={uploadImages}>
                    Uplaod
                  </button>
                </div> */}
                <div className="card-main">
                  <section className="container">
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <p className="react-drop">
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                    <aside style={thumbsContainer}>{thumbs}</aside>
                  </section>
                  <button type="button" onClick={uploadImages}>
                    Uplaod
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 title-area mt-3 border-top">
            <div className="row mt-4">
              <div className="col-md-4 title-text-area">
                <div className="title-heading">
                  <p>Title</p>
                </div>
                <div className="title-paragraph mt-3">
                  <p>Share key details like Brand, Size, and Color.</p>
                </div>
              </div>
              <div className="col-md-8 input-listing">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What are you selling? (required)"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 description-area mt-3 border-top">
            <div className="row mt-4">
              <div className="col-md-4 description-text-area">
                <div className="description-heading">
                  <p>Description</p>
                </div>
                <div className="description-paragraph mt-3">
                  <p>
                    Tell shoppers about your listing by describing the Brand,
                    Size, Color, Condition, Material, and any other noteworthy
                    details.
                  </p>
                </div>
              </div>
              <div className="col-md-8 textarea-bb">
                <textarea
                  className="form-control"
                  id="textAreaExample1"
                  rows="4"
                  placeholder="Describe it! (required)"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-12 category-area mt-3 border-top">
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="heading-category">
                  <p>Category</p>
                </div>
                <div className="category-paragraph mt-3">
                  <p>Add details to help your buyers find your item quickly.</p>
                </div>
              </div>
              <div className="col-md-8 select-area">
                <div className="select-input-top">
                  <div className="select-category">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Category</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="select-sub-category">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Subcategory</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 quantity-area mt-3 border-top">
            <div className="row w-100 mt-4">
              <div className="col-md-4">
                <div className="quantity-heading">
                  <p>Quantity</p>
                </div>
                <div className="quantity-paraghraph mt-3">
                  <p>Please enter your quantity</p>
                </div>
              </div>
              <div
                className="col-md-8 quantity-input-main"
                style={{ paddingLeft: "20px" }}
              >
                <div className="mid-quantity-area" style={{ width: "60%" }}>
                  <div className="d-flex justify-content-between quantity-mid-div">
                    <div>
                      <p className="text-dark">Add Quantity</p>
                    </div>
                    <div className="input-group w-auto justify-content-end align-items-center">
                      <input
                        type="button"
                        value="-"
                        className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                        data-field="quantity"
                        onClick={handleDecrement}
                      />
                      <input
                        type="number"
                        step="1"
                        max="10"
                        value={counter}
                        name="quantity"
                        className="quantity-field border-0 text-center w-25"
                      />
                      <input
                        type="button"
                        value="+"
                        className="button-plus border rounded-circle icon-shape icon-sm "
                        data-field="quantity"
                        onClick={handleIncrement}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 product-dimensions-area mt-3 border-top">
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="product-dimensions-heading">
                  <p>Product Dimensions</p>
                </div>
                <div className="product-dim-paragraph mt-3">
                  <p>
                    Here you have to put the height, width, length of your
                    product.
                  </p>
                </div>
              </div>
              <div className="col-md-8 my-auto">
                <div className="mid-div-inputs">
                  <div className="col-sx-3 h-w-l-input">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter height"
                    />
                  </div>
                  <div className="col-sx-3 h-w-l-input">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter width"
                    />
                  </div>
                  <div className="col-sx-3 h-w-l-input">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter length"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 measurment-area mt-3 border-top">
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="measur-heading">
                  <p>Measurement</p>
                </div>
                <div className="measur-paraghrap mt-3">
                  <p>Please specify the measurement of your product</p>
                </div>
              </div>
              <div className="col-md-8 my-auto">
                <div
                  className="input-group mb-3 aaa"
                  style={{ height: "50px", width: "50%" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    kg
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 color-area mt-3 border-top">
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="color-heading">
                  <p>Color</p>
                </div>
                <div className="color-paragraph mt-3">
                  <p>Select your product color</p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="main-color-field">
                  <div className="color-name-field">
                    <p>
                      {color
                        ? "Your Color Code Name is :-  " + color
                        : "Select your Field"}
                    </p>
                  </div>
                  <div className="color-input-field">
                    <input
                      type="color"
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 brand-area mt-3 border-top">
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="brand-heading">
                  <p>Brand</p>
                </div>
                <div className="barnd-paragraph mt-3">
                  <p>Add details to help your buyers find your item quickly.</p>
                </div>
              </div>
              <div className="col-md-8 nnn">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Brand/Designer"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 price-listing-area mt-3 border-top">
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="price-listing-heading">
                  <p>Price</p>
                </div>
                <div className="price-listing-paragraph mt-3">
                  <p>View Poshmark’s</p>
                  <p>
                    <a href="" className="border-bottom">
                      seller fee policy
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="mb-3 price-input-main">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Original Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Required"
                  />
                  {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                </div>
                <div className="mb-3 price-input-main">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Listing Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Required"
                  />
                  <div id="emailHelp" className="form-text">
                    <strong>Suggested Price:</strong> Title, category, and
                    original price required.
                  </div>
                </div>
                <div className="mb-3 price-input-main">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Discounted Shipping
                  </label>
                  <div className="select-category avalib">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Optional</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                </div>
                <div className="mb-3 price-input-main erning">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Your Earnings (when sold)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    // placeholder="Required"
                  />
                  {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 availability-area mt-3 border-top">
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="availability-heading">
                  <p>Availability</p>
                </div>
                <div className="availability-paragraph mt-3">
                  <p>Questions?</p>
                  <p>
                    <a href="" className="border-bottom">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="select-category avalib">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>For Sale</option>
                    <option value="1">For Not Sale</option>
                    {/* <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 btn-listing-area mt-3 border-top">
            <div className="mid-btn-listing mt-4">
              <div className="cancel-btn-listin">Cancel</div>
              <div className="next-btn-listing">Next</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateListing;
