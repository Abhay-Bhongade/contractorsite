import React from 'react'
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import { Button } from '@mui/material';

const ReviewDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3">
          <div className="heading-stepper">
            <h5>SHIPPING ADDRESS</h5>
          </div>
        </div>
        <div className="col-md-12 border-bottom mt-3"></div>
        <div className="col-md-12 mt-3 addres-final-area">
          <div className="right-side-final">
            <div className="payment-name-area">
              <p>Piyush Vyas</p>
            </div>
            <div className="payment-address-area">
              <p>15205 N KIERLAND BLVD STE 100</p>
              <p>NORTH KIERLAND BLVD SUITE</p>
              <p>SCOTTSDALE, AZ 85254</p>
              <p>United States</p>
            </div>
          </div>
          <div className="left-side-final-btn">
            <Button className="btn-chnage" variant="contained">
              Change
            </Button>
          </div>
        </div>
        <div className="col-md-12 border-bottom mt-3"></div>
        <div className="col-md-12 mt-3">
          <div className="heading-stepper">
            <h5>PAYMENT</h5>
          </div>
        </div>
        <div className="col-md-12 border-bottom mt-3"></div>
        <div className="col-md-12 mt-3 billing-final-area">
          <div className="right-side-final-payment">
            <div className="icon-payment">
              <PriceCheckOutlinedIcon />
            </div>
            <div className="text-payment">
              <p>You Paid by Debit Card</p>
            </div>
          </div>
          <div className="left-side-final-btn">
            <Button className="btn-chnage" variant="contained">
              Change
            </Button>
          </div>
        </div>
        <div className="col-md-12 border-bottom mt-3"></div>
      </div>
    </div>
  );
}

export default ReviewDetails