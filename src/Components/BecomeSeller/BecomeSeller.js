import React, { useState, useContext, useEffect, useMemo } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import verificationenvelope from "../../Images/verificationenvelope.png";
import CloseIcon from "@mui/icons-material/Close";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import "../../Components/BecomeSeller/BecomeSeller.css";
import {
  addOrder,
  submitVerificationCode,
  resendVerificationCode,
} from "../../../src/rtk/features/order/AddOrderSlice";
import { useSelector, useDispatch } from "react-redux";
import FormData from "form-data";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const BecomeSeller = () => {
  const customId = "custom-id-yes";
  const ResponceFromAddOrder = useSelector((state) => state.AddOrder);
  console.log("selector Responce in BecomeSeller", ResponceFromAddOrder);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [verificationCode, setVerificationCode] = useState();
  const [isVerificationDialogOpen, setisVerificationDialogOpen] =
    useState(false);

  const handleChangeVerificationCode = (event) => {
    console.log("verificationCode", verificationCode);
    setVerificationCode(event.target.value);
  };

  const handleOpenVerificationDialog = () => {
    setisVerificationDialogOpen(true);
  };
  const handleCloseVerificationDialog = () => {
    setisVerificationDialogOpen(false);
  };

  const handleResend = () => {
    console.log("click on the handleResend");
    const payload = {
      userId: ResponceFromAddOrder.order.userId,
      type: "resend",
    };
    console.log("check in resend what we send in payload", payload);
    dispatch(resendVerificationCode(payload));
  };

  const onSubmitOtp = () => {
    console.log("click on the onSubmitOtp");
    const payload = {
      userId: ResponceFromAddOrder.order.userId,
      code: parseInt(verificationCode),
      type: "submit",
    };
    console.log("check in submit what we send in payload", payload);

    dispatch(submitVerificationCode(payload));
    navigate("/combonew");
  };

  const initialValue = {
    firstName: "",
    lastName: "",
    userName: "",
    storeName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    phoneNumberStore: "",
    roleType: "",
    shortDescription: "",
    email: "",
    password: "",
    confirmpassword: "",
    country: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const isPasswordMatch = formValue.password === formValue.confirmpassword;

  console.log("formValue", formValue);
  const navigatetoHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    if (ResponceFromAddOrder?.order?.status === 200) {
      console.log("1st response in if case");
      handleOpenVerificationDialog();
    } else if (ResponceFromAddOrder?.order?.status === "200") {
      console.log("2nd response in if case");
      handleOpenVerificationDialog();
    }
  }, [ResponceFromAddOrder?.order?.status]);

  useEffect(() => {
    if (
      ResponceFromAddOrder?.data?.message ===
      "Verification Code Is successfully Verified."
    ) {
      console.log("11st response in if case");
      navigate("/combonew");
    } else if (
      ResponceFromAddOrder?.data?.message ===
      "Verification Code Is successfully Verified"
    ) {
      console.log("12nd response in if case");
      navigate("/combonew");
    }
  }, [
    ResponceFromAddOrder?.data?.message ===
      "Verification Code Is successfully Verified.",
  ]);

  const dispatch = useDispatch();
  const addVendorInputHandle = ({ target: { name, value } }) => {
    if (["postcode", "phoneNumberStore"].includes(name)) {
      setFormValue({
        ...formValue,
        [name]: !isNaN(value) ? value : "",
      });
    } else {
      setFormValue({ ...formValue, [name]: value });
    }
  };

  const requiredFields = [
    "userName",
    "email",
    "storeName",
    "address1",
    "country",
    "postcode",
    "phoneNumberStore",
    "roleType",
    "shortDescription",
    "password",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmptyFields = requiredFields.some(
      (fieldName) => !formValue[fieldName]
    );

    if (hasEmptyFields) {
      toast.error("Please fill all the required fields", {
        toastId: customId,
      });
      return;
    }

    const formFields = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      userName: formValue.userName,
      storeName: formValue.storeName,
      address1: formValue.address1,
      address2: formValue.address2,
      city: formValue.city,
      state: formValue.state,
      postcode: formValue.postcode,
      phoneNumberStore: formValue.phoneNumberStore,
      roleType: formValue.roleType,
      shortDescription: formValue.shortDescription,
      email: formValue.email,
      password: formValue.password,
      country: formValue.country,
    };

    const form = new FormData();

    Object.entries(formFields).forEach(([name, value]) => {
      form.append(name, value);
    });

    dispatch(addOrder(formValue))
      .then(() => {
        if (ResponceFromAddOrder.order.status === "200") {
          console.log("response in if case");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const [sellerType, setSellerType] = React.useState("");
  const handleChange = (event) => {
    setSellerType(event.target.value);
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic1"
                  label="First Name"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={addVendorInputHandle}
                  value={formValue.firstName}
                  name="firstName"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic2"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                  name="lastName"
                  color="warning"
                  onChange={addVendorInputHandle}
                  value={formValue.lastName}
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic3"
                  label="Email"
                  onChange={addVendorInputHandle}
                  value={formValue.email}
                  variant="outlined"
                  name="email"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic4"
                  label="Mobile Number"
                  onChange={addVendorInputHandle}
                  value={formValue.phoneNumberStore}
                  variant="outlined"
                  name="phoneNumberStore"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                {/* <TextField
                  id="outlined-basic"
                  label="Verification Code"
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                /> */}
              </Box>
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="hyperlinkin_becomeseller">
                  <span className="text-end resendhyperlink">
                    <a href="/resend-code" className="td--ul tc--lg">
                      Resend
                    </a>
                  </span>
                </div>
              </Box>
            </Box> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic5"
                  label="Username"
                  name="userName"
                  onChange={addVendorInputHandle}
                  value={formValue.userName}
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic6"
                  label="Shop Description"
                  onChange={addVendorInputHandle}
                  value={formValue.shortDescription}
                  name="shortDescription"
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic7"
                  label="Password"
                  variant="outlined"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  size="small"
                  color="warning"
                  onChange={addVendorInputHandle}
                  value={formValue.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? (
                            <VisibilityOff style={{ fontSize: "18px" }} />
                          ) : (
                            <Visibility style={{ fontSize: "18px" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic8"
                  name="confirmpassword"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? (
                            <VisibilityOff style={{ fontSize: "18px" }} />
                          ) : (
                            <Visibility style={{ fontSize: "18px" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  color={isPasswordMatch ? "warning" : "error"}
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                  error={!isPasswordMatch}
                  helperText={!isPasswordMatch && "Passwords do not match"}
                  onChange={addVendorInputHandle}
                  value={formValue.confirmpassword}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <FormControl sx={{ width: "32rem" }} className="ms-2">
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                      height: "2.5rem",
                      fontSize: "14px",
                      color: "#9b9691",
                    }} style={{top:"not-set"}}
                  >
                    Seller Type
                  </InputLabel>
                  <Select
                    sx={{ height: "2.5rem" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Country"
                    onChange={addVendorInputHandle}
                    value={formValue.roleType}
                    defaultValue={"Contractor"}
                    name="roleType"
                  >
                    <MenuItem value="Individual Seller">
                      Individual Seller
                    </MenuItem>
                    <MenuItem value="Contractor">Contractor</MenuItem>
                    <MenuItem value="Distributtor">Distributtor</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic9"
                  label="Store Name"
                  name="storeName"
                  onChange={addVendorInputHandle}
                  value={formValue.storeName}
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic10"
                  label="Address1"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={addVendorInputHandle}
                  value={formValue.address1}
                  name="address1"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic11"
                  label="Address2"
                  variant="outlined"
                  onChange={addVendorInputHandle}
                  value={formValue.address2}
                  name="address2"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic12"
                  label="City/Town"
                  onChange={addVendorInputHandle}
                  value={formValue.city}
                  name="city"
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic13"
                  label="State"
                  onChange={addVendorInputHandle}
                  value={formValue.state}
                  name="state"
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic14"
                  label="Postal Code"
                  variant="outlined"
                  onChange={addVendorInputHandle}
                  value={formValue.postcode}
                  name="postcode"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />

                <TextField
                  id="outlined-basic15"
                  label="Country"
                  name="country"
                  onChange={addVendorInputHandle}
                  value={formValue.country}
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>

            <div className="btncntinbecomesellerpage my-4">
              <Button
                variant="outlined"
                className="w-25  cancel_btn"
                style={{ marginLeft: "10.5rem" }}
                onClick={navigatetoHomePage}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
                className="w-25 register_btn"
                style={{ marginLeft: "1.3rem" }}
              >
                Register
              </Button>
            </div>
          </form>
        </div>
        <Dialog
          open={isVerificationDialogOpen}
          onClose={handleCloseVerificationDialog}
          className="custom-dialog"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "600px",
            height: "90vh",
            marginLeft: "30%",
            marginTop: "2rem",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseVerificationDialog}
            sx={{
              position: "absolute",
              right: "8px",
              top: "8px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={verificationenvelope}
            alt="envelope"
            style={{
              marginTop: "3rem",
              marginLeft: "2.5rem",
              width: "64px",
              height: "64px",
            }}
          />
          <DialogTitle
            className="mb-2"
            style={{
              textAlign: "left",
              lineHeight: "28px",
              fontWeight: "700",
              fontSize: "1.5rem",
            }}
          >
            Verify Your Email Address
          </DialogTitle>
          <DialogContent style={{ height: "400px" }}>
            <p
              style={{
                textAlign: "left",
                fontSize: "14px",
                marginBottom: "24px",
              }}
            >
              Please enter the verification code we have sent to your email
              address. This ensures we have the right email in case we need to
              contact you.
            </p>
            <TextField
              fullWidth
              id="verificationCode"
              type="number"
              onChange={handleChangeVerificationCode}
              value={verificationCode}
              variant="standard"
              required
              autoComplete="off"
              size="small"
              label="Verification Code"
              className="w-25"
            />
            <DialogActions
              style={{ justifyContent: "flex-start" }}
              className="my-4"
            >
              <Button
                variant="outlined"
                color="primary"
                className="mt-2"
                type="submit"
                onClick={handleResend}
              >
                Resend
              </Button>
              <Button
                variant="contained"
                className="mt-2 ms-4 register_btn"
                onClick={onSubmitOtp}
                type="submit"
              >
                Submit
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BecomeSeller;
