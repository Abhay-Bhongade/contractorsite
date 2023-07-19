import logo from "./logo.svg";
import "./App.css";
import Navigation from "../src/Components/Navigation/Navigation";
import Cards from "./Components/Cards/Cards";
import Services from "./Components/Services/Services";
import Products from "./Components/Products/Products";
import HomePage from "./Components/HomePage/HomePage";
import BannerPage from "./Components/BannerPage/BannerPage";
import Brands from "./Components/Brands/Brands";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import WasteManagment from "./Components/WasteManagment/WasteManagment";
import BuyerSeller from "./Components/BuyerSeller/BuyerSeller";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComboComponent from "./Components/ComboComponent";
import ComboNew from "./Components/ComboNew";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BecomeASeller from "./Components/BecomeASeller";
import SubCategories from "./Components/SubCategories/SubCategories";
import ViewProduct from "./Components/ViewProduct/ViewProduct";
import CreateListing from "./Create-Listing/create-listing";
import Previews from "./Create-Listing/drag-drop";
import WishList from "./Components/WishList/WishList";
import Checkout from "./Components/Checkout/checkout-form";
import Stepper from "../src/Components/Checkout/stepper";
function App() {
  return (
    <div>
      {/* <Navigation /> */}

      <Routes>
        <Route path="/" element={<ComboComponent />} />
        <Route path="/combonew" element={<ComboNew />} />
        <Route path="/becomeseller" element={<BecomeASeller />} />
        <Route path="/subcategory" element={<SubCategories />} />
        <Route path="/viewCard" element={<ViewProduct />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/stepper" element={<Stepper />} />

        {/* <Route path="/abc" element={<Previews/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
