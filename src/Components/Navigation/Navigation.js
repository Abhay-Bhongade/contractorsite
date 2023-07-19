import React from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import Navigation2 from "../Navigation2/Navigation2";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";
import NavigationViewProduct from "../Navigation-view-product/Navigation-view-product";

const Navigation = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand ps-5 me-auto"
            href="#"
            onClick={navigateHome}
          >
            <img src={logo} height={60} width={233} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto pe-5" role="search">
              <div className="search-form m-0 p-0">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Products....."
                  aria-label="Search"
                />
                <button
                  className="btn btn-primary searchbtninNavigation"
                  type="submit"
                >
                  Search
                </button>
              </div>
              <div className="icon ms-5">
                <Badge
                  badgeContent={10}
                  color="primary"
                  classes={{ badge: "custom-badge" }}
                >
                  <FavoriteBorderIcon sx={{ fontSize: 25 }} />
                </Badge>
              </div>
              <div className="icon">
                <AccountCircleIcon sx={{ fontSize: 25 }} />
              </div>
              <div className="icon">
                <Badge
                  badgeContent={10}
                  color="primary"
                  classes={{ badge: "custom-badge" }}
                >
                  <ShoppingBagIcon sx={{ fontSize: 25 }} />
                </Badge>
              </div>
            </form>
          </div>
        </div>
      </nav>
      {/* <Navigation2 /> */}
      <NavigationViewProduct/>
    </>
  );
};

export default Navigation;
