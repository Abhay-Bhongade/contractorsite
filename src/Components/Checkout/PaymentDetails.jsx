import React from "react";

const PaymentDetails = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mt-3">
            <div className="heading-stepper">
              <h5>PAYMENT</h5>
            </div>
          </div>
          <div className="mt-3">
            <div class="wrapper-inner payment-swich">
              <div class="form-group">
                <div class="radio">
                  <label>
                    <input
                      type="radio"
                      name="radio-input"
                      checked="checked"
                      className="custom-control-input"
                      id="checkbox"
                    />{" "}
                    Debit Card
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="radio">
                  <label>
                    <input type="radio" name="radio-input" className="m-0" />{" "}
                    Credit Card
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="radio">
                  <label>
                    <input type="radio" name="radio-input" className="m-0" />{" "}
                    Online
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <label className="form-label">Card Number</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6 mt-3">
            <label className="form-label">Expiration</label>
            <input type="text" className="form-control" placeholder="MM / YY" />
          </div>
          <div className="col-md-6 mt-3">
            <label className="form-label">CVV</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-12 border-bottom mt-3"></div>
          <div className="co-md-12 mt-3 billing-address-main">
            <div className="billing-addres-area">
              <p>BILLING ADDRESS</p>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                checked
              />
              <label class="form-check-label" for="exampleCheck1">
                Same as shipping address
              </label>
            </div>
          </div>
          <div className="col-md-12 mt-3">
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
          <div className="col-md-12 border-bottom mt-3"></div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
