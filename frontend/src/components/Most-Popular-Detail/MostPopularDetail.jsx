import React, { useEffect, useState } from "react";
import "../Most-Popular-Detail/DetailPage.css";
import goa from "../MostPopularTour/goa.jpg";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Slider from "react-slick";
import axios from "axios";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import toast from "react-hot-toast";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MostPopularDetail = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});
  const [days, setDays] = useState([]);
  const [packageData, setPackageData] = useState({
    packageCity: data.packageheading,
    name: "",
    email: "",
    phone: "",
    address: "",
    amount: "",
  });

  const getApiData = async () => {
    try {
      let res = await axios.get("https://api.mrandmrsperfecttrips.in/api/package/" + _id);
      const fetchedData = res.data.data;
      setData(fetchedData);
      const dayDetails = [];
      for (let i = 1; i <= 10; i++) {
        if (fetchedData[`day${i}`]) {
          dayDetails.push({ day: `Day ${i}`, detail: fetchedData[`day${i}`] });
        }
      }
      setDays(dayDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const getInputdata = (e) => {
    const { name, value } = e.target;
    setPackageData({ ...packageData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    try {
      const userResponse = await axios.post(
        "https://api.mrandmrsperfecttrips.in/api/package-inquery",
        packageData
      );

      if (userResponse.status === 200) {
        toast.success("Your query has been sent successfully. Redirecting to payment...");

        const paymentResponse = await axios.post(
          "https://api.hoodapay.com/initiate-payment",
          {
            amount: packageData.amount,
            currency: "INR",
            customer: {
              name: packageData.name,
              email: packageData.email,
              phone: packageData.phone,
            },
            purpose: `Payment for ${packageData.packageCity}`,
            redirect_url: "http://your-frontend-url.com/payment-status",
          },
          {
            headers: { Authorization: `Bearer ${process.env.HOODAPAY_API_TOKEN}` },
          }
        );

        const { paymentUrl } = paymentResponse.data;

        if (paymentUrl) {
          window.location.href = paymentUrl;
        } else {
          toast.error("Failed to initiate payment. Please try again.");
        }
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };




  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    getApiData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (data.packageheading) {
      setPackageData((prev) => ({
        ...prev,
        packageCity: data.packageheading,
        amount: data.packagefinal, // Ensure amount is updated
      }));
    }
  }, [data]);


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="tripcard">
      <div className="heading">
        <h2>
          {data.packagehighlight}
        </h2>
      </div>
      <Container>
        <Grid container style={{ borderRadius: "1rem", overflow: "hidden" }}>
          <Grid item md={3}>
            <img src={goa} width={"100%"} style={{ height: "100%" }} alt="" />
          </Grid>
          <Grid item md={6} style={{ backgroundColor: "white" }}>
            <Typography
              className="card_center_content"
              style={{ lineHeight: "50px" }}
            >
              <Typography
                variant="h6"
                style={{ color: "rgb(197, 115, 8)", fontWeight: "600" }}
              >
                {data.packageheading}
              </Typography>
              <p>⭐⭐⭐⭐(63 User Rating)</p>
              <div className="destination">
                <p><strong>Destinations :</strong> {data.packagedestination}</p>
              </div>
              <div className=''>
                <p><strong>Highlights :</strong> {data.packagedescription}</p>
              </div>
              <div>
                <p><strong>Package Include :</strong> {data.packageinclude}</p>
              </div>
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            style={{ backgroundColor: "rgb(21 98 56 / 15%)" }}
            className="lastCard"
          >
            <div>
              <Typography variant="h6">Package Price</Typography>
            </div>
            <div className="price">
              <p style={{ fontWeight: "600", fontSize: "24px" }}>{data.packagefinal}</p>
              <p>
                <del
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "gray",
                  }}
                >
                  {data.packageprice}
                </del>
              </p>
            </div>
            <div className="off">{data.packagedis}% Off</div>
            <Typography style={{ margin: "6px" }}>
              Per Person (Taxes extra)
            </Typography>
            <Typography>
              <button onClick={handleOpen} className="enquiry">Book Now</button>
            </Typography>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Enter Your Detail
                  <hr />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <form onSubmit={postData}>
                    <TextField id="outlined-basic" style={{ marginBottom: '1rem' }} fullWidth label="Name" variant="outlined" name="name" value={packageData.name} onChange={getInputdata} />
                    <TextField id="outlined-basic" style={{ marginBottom: '1rem' }} fullWidth label="Email" variant="outlined" name="email" value={packageData.email} onChange={getInputdata} />
                    <TextField id="outlined-basic" style={{ marginBottom: '1rem' }} fullWidth label="Phone Number" variant="outlined" name="phone" value={packageData.phone} onChange={getInputdata} />
                    <TextField id="outlined-basic" style={{ marginBottom: '1rem' }} fullWidth label="Address" variant="outlined" name="address" value={packageData.address} onChange={getInputdata} />
                    <TextField id="outlined-basic" style={{ marginBottom: '1rem' }} fullWidth label="Amount" variant="outlined" name="amount" value={packageData.amount} onChange={getInputdata} disabled />
                    <Button
                      style={{ background: "green", marginTop: "1rem" }}
                      fullWidth
                      variant="contained"
                      type="submit"
                    >
                      Pay Now
                    </Button>
                  </form>
                </Typography>
              </Box>
            </Modal>
            <Typography>
              <button className="whatsapp"><a href="https://wa.me/9699862917" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
              </button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <div className="heading">
          <span>{days.length} Days Travel & Tour Services</span>
        </div>
        <Grid container spacing={4}>
          {
            days.map((item, index) =>
              <Grid item md={6} xs={12} key={index}>
                <div
                  style={{
                    padding: "2rem",
                    border: "1px solid #222",
                    borderBottom: "10px solid #222",
                    borderRadius: "2rem",
                  }}
                >
                  <b>Day 0{index + 1}:</b> {item.detail}
                </div>
              </Grid>
            )
          }
        </Grid>
      </Container>
      <Container style={{ padding: "1rem", marginTop: "50px" }}>
        <div className="sliderMain" style={{ margin: "0" }}>
          <Slider {...settings}>
            {data.slideimage &&
              data.slideimage.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`slide ${index}`}
                    style={{ width: "250px", height: "200px", objectFit: "cover" }}  // Fixed width and height
                  />
                </div>
              ))}
          </Slider>
        </div>
      </Container>

    </div>
  );
};

export default MostPopularDetail;
