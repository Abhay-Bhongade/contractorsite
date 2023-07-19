import React, { useState } from "react";
import "../Navigation2/Navigation2.css";
import "../Navigation3/Navigation3.css";
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
import bannerImg from "../../Images/Construction section/banner-abc.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
const NavSubCategory = () => {
  const Navigate = useNavigate();
  const navigateToViewCard = () => {
    Navigate('/viewCard');
  };
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 pt-3 bg-light ">
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 1: Site Construction
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  02050 Basic Site Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02100 Site Remediation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02200 Site Preparation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02300 Earthwork
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2400 Tunneling, Boring and Jacking
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02450 Foundation and Load-bearing Elements
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02500 Utility Services
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02600 Drainage and Containment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02700 Bases, Ballasts, Pavements and Appurtenances
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02800 Site Improvements and Amenities
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02950 Site Restoration and Rehabilitation
                </a>
              </li>
            </div>
          </div>

          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 2: Concrete
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  03050 Basic Concrete Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03100 Concrete Forms and Accessories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03200 Concrete Reinforcement
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03300 Cast-in-Place Concrete
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03400 Precast Concrete
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03500 Cementitious Decks and Underlayment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03600 Grouts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Grouts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03700 Mass Concrete
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03900 Concrete Restoration and Cleaning
                </a>
              </li>
            </div>
          </div>

          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 3: Masonry{" "}
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  04050 Basic Masonry Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04200 Masonry Units
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04400 Stone
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04500 Refractories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04600 Corrosion-Resistant Masonry
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04700 Simulated Masonry
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04800 Masonry Assemblies
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04900 Masonry Restoration and Cleaning
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 4: Metals
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  05050 Basic Metal Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05100 Structural Metal Framing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05200 Metal Joists
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05300 Metal Deck
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05400 Cold-Formed Metal Framing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05500 Metal Fabrications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05600 Hydraulic Fabrications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05650 Railroad Track and Accessories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05700 Ornamental Metal
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05800 Expansion Control
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05900 Metal Restoration and Cleaning
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 5: Wood and Plastics
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  06050 Basic Wood and Plastic Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06100 Rough Carpentry
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06200 Finish Carpentry
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05200 Metal Joists
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06400 Architectural Woodwork
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06500 Structural Plastics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06600 Plastic Fabrications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06900 Wood and Plastic Restoration and Cleaning
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 6: Thermal & Moisture Protection
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  07050 Basic Thermal and Moisture Protection Materials and
                  Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07100 Dampproofing and Waterproofing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07200 Thermal Protection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07300 Shingles, Roof Tiles, and Roof Coverings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07400 Roofing and Siding Panels
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07500 Membrane Roofing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07600 Flashing and Sheet Metal
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07700 Roof Specialties and Accessories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07800 Fire and Smoke Protection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07900 Joint Sealants
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 7: Doors and Windows
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  08050 Basic Door and Window Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08100 Metal Doors and Frames
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08200 Wood and Plastic Doors
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08300 Specialty Doors
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08400 Entrances and Storefronts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08500 Windows
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08600 Skylights
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08700 Hardware
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08800 Glazing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08900 Glazed Curtain Wall
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 8: Finishes
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  09050 Basic Finish Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09100 Metal Support Assemblies
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09200 Plaster and Gypsum Board
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09300 Tile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09400 Terrazzo
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09500 Ceilings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09600 Flooring
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09700 Wall Finishes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09800 Acoustical Treatment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09900 Paints and Coatings
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 9: Specialties
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  10150 Compartments and Cubicles
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10200 Louvers and Vents
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10240 Grilles and Screens
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10250 Service Walls
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10260 Wall and Corner Guards
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10270 Access Flooring
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10340 Manufactured Exterior Specialties
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10600 Partitions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10670 Storage Shelving
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10700 Exterior Protection
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 10: Equipment
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  11000 Maintenance Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11120 Vending Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11130 Audio-Visual Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11150 Parking Control Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11160 Loading Dock Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11170 Solid Waste Handling Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11200 Water Supply and Treatment Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11280 Hydraulic Gates and Valves
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11480 Athletic, Recreational, and Therapeutic Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11500 Industrial and Process Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11680 Office Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11700 Medical Equipment
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 11: Furnishings{" "}
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              {" "}
              <li>
                <a className="dropdown-item" href="#">
                  12300 Manufactured Casework
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  12400 Furnishings and Accessories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  12500 Furniture
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  12600 Multiple Seating
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  12700 Systems Furniture
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  12800 Interior Plants and Planters
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 12: Special Construction
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  13080 Sound, Vibration, and Seismic Control
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13100 Lightning Protection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13110 Cathodic Protection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13150 Swimming Pools
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13200 Storage Tanks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13220 Filter Underdrains and Media
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13260 Sludge Conditioning Systems
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13280 Hazardous Material Remediation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13550 Transportation Control Instrumentation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13600 Solar and Wind Energy Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13850 Detection and Alarm
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13900 Fire Suppression
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 13: Conveying Systems
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  14100 Dumbwaiters
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14200 Elevators
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14300 Escalators and Moving Walks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14400 Lifts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14500 Material Handling
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14600 Hoists and Cranes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14700 Turntables
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14800 Scaffolding
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14900 Transportation
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 14: Mechanical
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  15050 Basic Mechanical Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15100 Building Services Piping
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15200 Process Piping
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15300 Fire Protection Piping
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15400 Plumbing Fixtures and Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15500 Heat-Generation Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15600 Refrigeration Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15700 Heating, Ventilating, and Air Conditioning Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15800 Air Distribution
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15900 HVAC Instrumentation and Controls
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15000 Misc Mechanical
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 15: Electrical
            </button>
            <div
              className="dropdown-menu dropdown-menu-end navsubcategory"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  16050 Basic Electrical Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  16100 Wiring Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  16200 Electrical Power
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  116300 Transmission and Distribution
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  16400 Low-Voltage Distribution
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  16500 Lighting
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  16700 Communications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  1600 Misc Electrical
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Miscellaneous Items
            </button>
          </div>
          <div style={{ marginTop: "4.2rem" }}>
            {" "}
            <hr />
          </div>
          <div
            className="col-md-2 card pb-0 mb-0 "
            style={{ backgroundColor: "#f7f7f7", marginTop: "7rem" }}
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
          <div className="imgcntinNavigationPage">
            <img
              className="card-img-top bnimginsubcategory"
              src={bannerImg}
              alt="Card image cap"
            />
          </div>

          <div className="container py-4">
            <div className="row">
              <div className="col-12">
                <div className="cntforthreediv">
                  <div className="div">
                    <h2 className="handtoolsheading">HandTools</h2>
                  </div>

                  <div className="div">
                    <div className="search-container">
                      <input
                        type="text"
                        className="search-input ps-3"
                        placeholder="Search"
                      />
                      <span className="search-icon">
                        <SearchIcon />
                      </span>
                    </div>
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
                            <MenuItem value={"Date"}>Date</MenuItem>
                            <MenuItem value={"Popularity"}>Popularity</MenuItem>
                            <MenuItem value={"Position"}>Position</MenuItem>
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
              <div className="col-lg-3" onClick={navigateToViewCard}>
                <div className="card bg-white">
                  <img
                    className="img img-fluid imginsubcategory"
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
            </div>
            <div className="row my-3">
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
            </div>
            <div className="row">
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
                      <div className="socialiconsinsubcategory">
                        <span className="" title="Give feedback">
                          <i className="fa-regular fa-message"></i>
                        </span>
                        <span title="Add to wishlist" className="">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <span title="Quick View" className="">
                          <i className="fa fa-eye"></i>
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
            </div>
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
  );
};

export default NavSubCategory;
