import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Grid, Button, Container } from "@mui/material";
import { Label } from "@mui/icons-material";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function CustomTabPanel(props) {


  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '30px',
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);
  const [isactive, setIsActive] = React.useState("flight");
  const [open, setOpen] = React.useState(false);
  const onFlight = () => {
    setIsActive("flight");
  };

  const onHotel = () => {
    setIsActive("hotel");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [derpopen, setDropopen] = React.useState(false);
  const RoomGuest = () => {
    setDropopen(true);
    console.log("open");
  };

  const RoomGuestLeave = () => {
    setDropopen(false);
  };

  const [flightData, setFlightData] = useState({
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    totalPerson: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const getFlightInputdata = (e) => {
    const { name, value } = e.target
    setFlightData({ ...flightData, [name]: value })
  }

  const SubmitFlightdata = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("https://api.trip.digiindiasolutions.com/api/flight", flightData)
      if (res.status === 200) {
        toast.success("Your Inquery Send Successfully")
        setFlightData({
          from: "",
          to: "",
          departure: "",
          returnDate: "",
          totalPerson: "",
          name: "",
          email: "",
          phone: "",
          address: "",
        })
      }
    } catch (error) {
      console.log(error)
    }
  }


  const [hotelData, setHotelData] = useState({
    where: "",
    checkIn: "",
    checkOut: "",
    numberofroom: "",
    adults: "",
    children: "",
    hotelname: "",
    hotelemail: "",
    hotelphone: "",
    hoteladdress: "",
  })

  const getHotelInputdata = (e) => {
    const { name, value } = e.target
    setHotelData({ ...hotelData, [name]: value })
  }

  const SubmitHoteldata = async (e) => {
    e.preventDefault()
    console.log(hotelData)
    try {
      const res = await axios.post("https://api.trip.digiindiasolutions.com/api/hotel", hotelData)
      if (res.status === 200) {
        toast.success("Your Inquery Send Successfully")
        setHotelData({
          where: "",
          checkIn: "",
          checkOut: "",
          numberofroom: "",
          adults: "",
          children: "",
          hotelname: "",
          hotelemail: "",
          hotelphone: "",
          hoteladdress: "",
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Container>
        <div className="container">
          <Box
            sx={{
              padding: { xs: "0rem", md: "3rem", sm: "3rem" },
              marginTop: { xs: "0rem", sm: "-3rem", md: "-4rem" },
              borderRadius: { xs: "0", md: "2rem", sm: "2rem" },
              width: "100%",
              position: "relative",
              zIndex: "1",
              boxShadow: "0rem 0rem 3rem 0rem gray",
              background: "white",
            }}
          >
            <Typography
              sx={{
                paddingTop: { xs: "1rem", md: "0rem", sm: "0rem" },
                textAlign: { xs: "center", md: "start", sm: "start" },
              }}
              mb={2}
              pt={2}
            >
              <Button
                style={{ marginRight: "1rem", color: 'brown', border: '1px solid brown' }}
                onClick={onFlight}
                variant="outlined"
              >
                <b>
                  Package
                </b>
                {/* <ConnectingAirportsIcon style={{ color: 'brown' }} /> */}
              </Button>
              {/* <Button onClick={onHotel} variant="outlined" style={{ color: 'brown', border: '1px solid brown' }}>
                <b>
                  Hotel
                </b>
                <HomeWorkIcon style={{ color: 'brown' }} />
              </Button> */}
            </Typography>
            {isactive === "flight" ? (
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    style={{
                      textTransform: "capitalize",
                      fontSize: "18px",
                      color: "#7B3226",
                      letterSpacing: "1px",
                      fontWeight: "600",
                    }}
                    label="Package Details"
                    {...a11yProps(0)}
                  />
                  {/* <Tab
                    style={{
                      textTransform: "capitalize",
                      fontSize: "18px",
                      color: "#7B3226",
                      letterSpacing: "1px",
                      fontWeight: "600",
                    }}
                    label="Round-Trip"
                    {...a11yProps(1)}
                  /> */}
                  {/* <Tab
                    style={{
                      textTransform: "capitalize",
                      fontSize: "18px",
                      color: "#7B3226",
                      letterSpacing: "1px",
                      fontWeight: "600",
                    }}
                    label="Multi-City"
                    {...a11yProps(2)}
                  /> */}
                </Tabs>
                <CustomTabPanel value={value} index={0}>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <form action="">
                      <Grid container spacing={1}>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>From</b>
                          </label>
                          <TextField
                            style={{ width: "98%" }}
                            id="outlined-basic"
                            placeholder="Enter city or airport"
                            variant="outlined"
                            onChange={getFlightInputdata}
                            name="from"
                            value={flightData.from}
                          />
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>To</b>
                          </label>
                          <TextField
                            style={{ width: "98%" }}
                            id="outlined-basic"
                            placeholder="Enter city or airport"
                            variant="outlined"
                            onChange={getFlightInputdata}
                            name="to"
                            value={flightData.to}
                          />
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Departure</b>
                          </label>
                          <Box
                            style={{
                              padding: "15px",
                              borderRadius: "8px",
                              width: "98%",
                              border: '1px solid lightgray'
                            }}
                          >
                            <input
                              style={{ width: "100%" }}
                              type="date"
                              id="Departure"
                              name="departure"
                              onChange={getFlightInputdata}
                              value={flightData.departure}
                            />
                          </Box>
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Return</b>
                          </label>
                          <Box
                            style={{
                              padding: "15px",
                              border: "1px solid lightgray",
                              borderRadius: "8px",
                              width: "98%",
                            }}
                          >
                            <input style={{ width: "100%" }} type="date" id="return" name="returnDate" value={flightData.returnDate} onChange={getFlightInputdata} />
                          </Box>
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Total Person</b>
                          </label>
                          <Box
                            style={{
                              padding: "15px",
                              border: "1px solid lightgray",
                              borderRadius: "8px",
                              width: "100%",
                            }}
                          >
                            <input
                              style={{ width: "100%" }}
                              type="number"
                              placeholder="Select Person"
                              name="totalPerson"
                              id=""
                              onChange={getFlightInputdata}
                              value={flightData.totalPerson}
                            />
                          </Box>
                        </Grid>
                        <Grid style={{ display: 'flex', alignItems: 'center' }} item xs={12} md={2}>
                          <Button
                            onClick={handleOpen}
                            style={{
                              padding: "1rem",
                              marginTop: '1rem',
                              width: "100%",
                              background: "brown",
                            }}
                            variant="contained"
                          >
                            Next
                          </Button>
                          <div>
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                  Please Enter Your Details
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                  <Box>
                                    <Typography>

                                      <Label /> <label htmlFor="">Enter Your Full Name</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Full Name" variant="outlined" value={flightData.name} name="name" onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography style={{ marginTop: '1rem' }}>

                                      <Label /> <label htmlFor="">Enter Your Email</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Email" variant="outlined" value={flightData.email} name="email" onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography style={{ marginTop: '1rem' }}>

                                      <Label /> <label htmlFor="">Phone Number</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Number" type="number" variant="outlined" value={flightData.phone} name="phone" onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography style={{ marginTop: '1rem' }}>

                                      <Label /> <label htmlFor="">Address</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Number" variant="outlined" name="address" value={flightData.address} onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography mt={3} style={{ display: 'flex', justifyContent: 'center' }}>
                                      <Button style={{ background: 'brown' }} fullWidth variant="contained" onClick={SubmitFlightdata}>Submit</Button>
                                    </Typography>
                                  </Box>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                </CustomTabPanel>

                {/* <CustomTabPanel value={value} index={1}>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <form action="">
                      <Grid container spacing={1}>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>From</b>
                          </label>
                          <TextField
                            style={{ width: "98%" }}
                            id="outlined-basic"
                            placeholder="Enter city or airport"
                            variant="outlined"
                            onChange={getFlightInputdata}
                            name="from"
                            value={flightData.from}
                          />
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>To</b>
                          </label>
                          <TextField
                            style={{ width: "98%" }}
                            id="outlined-basic"
                            placeholder="Enter city or airport"
                            variant="outlined"
                            onChange={getFlightInputdata}
                            name="to"
                            value={flightData.to}
                          />
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Departure</b>
                          </label>
                          <Box
                            style={{
                              padding: "15px",
                              borderRadius: "8px",
                              width: "98%",
                              border: '1px solid lightgray'
                            }}
                          >
                            <input
                              style={{ width: "100%" }}
                              type="date"
                              id="Departure"
                              name="departure"
                              onChange={getFlightInputdata}
                              value={flightData.departure}
                            />
                          </Box>
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Return</b>
                          </label>
                          <Box
                            style={{
                              padding: "15px",
                              border: "1px solid lightgray",
                              borderRadius: "8px",
                              width: "98%",
                            }}
                          >
                            <input style={{ width: "100%" }} type="date" id="return" name="returnDate" value={flightData.returnDate} onChange={getFlightInputdata} />
                          </Box>
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Total Person</b>
                          </label>
                          <Box
                            style={{
                              padding: "15px",
                              border: "1px solid lightgray",
                              borderRadius: "8px",
                              width: "100%",
                            }}
                          >
                            <input
                              style={{ width: "100%" }}
                              type="number"
                              placeholder="Select Person"
                              name="totalPerson"
                              id=""
                              onChange={getFlightInputdata}
                              value={flightData.totalPerson}
                            />
                          </Box>
                        </Grid>
                        <Grid style={{ display: 'flex', alignItems: 'center' }} item xs={12} md={2}>
                          <Button
                            onClick={handleOpen}
                            style={{
                              padding: "1rem",
                              marginTop: '1rem',
                              width: "100%",
                              background: "brown",
                            }}
                            variant="contained"
                          >
                            Next
                          </Button>
                          <div>
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                  Please Enter Your Details
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                  <Box>
                                    <Typography>

                                      <Label /> <label htmlFor="">Enter Your Full Name</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Full Name" variant="outlined" value={flightData.name} name="name" onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography style={{ marginTop: '1rem' }}>

                                      <Label /> <label htmlFor="">Enter Your Email</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Email" variant="outlined" value={flightData.email} name="email" onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography style={{ marginTop: '1rem' }}>

                                      <Label /> <label htmlFor="">Phone Number</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Number" type="number" variant="outlined" value={flightData.phone} name="phone" onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography style={{ marginTop: '1rem' }}>

                                      <Label /> <label htmlFor="">Address</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Number" variant="outlined" name="address" value={flightData.address} onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography mt={3} style={{ display: 'flex', justifyContent: 'center' }}>
                                      <Button style={{ background: 'brown' }} fullWidth variant="contained" onClick={SubmitFlightdata}>Submit</Button>
                                    </Typography>
                                  </Box>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                </CustomTabPanel> */}

                {/* <CustomTabPanel value={value} index={2}>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <form action="">
                      <Grid container spacing={1}>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>From</b>
                          </label>
                          <TextField
                            style={{ width: "98%" }}
                            id="outlined-basic"
                            placeholder="Enter city or airport"
                            variant="outlined"
                            onChange={getFlightInputdata}
                            name="from"
                            value={flightData.from}
                          />
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>To</b>
                          </label>
                          <TextField
                            style={{ width: "98%" }}
                            id="outlined-basic"
                            placeholder="Enter city or airport"
                            variant="outlined"
                            onChange={getFlightInputdata}
                            name="to"
                            value={flightData.to}
                          />
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Departure</b>
                          </label>
                          <Box
                            style={{
                              padding: "15px",
                              borderRadius: "8px",
                              width: "98%",
                              border: '1px solid lightgray'
                            }}
                          >
                            <input
                              style={{ width: "100%" }}
                              type="date"
                              id="Departure"
                              name="departure"
                              onChange={getFlightInputdata}
                              value={flightData.departure}
                            />
                          </Box>
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Return</b>
                          </label>
                          <Box
                            style={{
                              padding: "15px",
                              border: "1px solid lightgray",
                              borderRadius: "8px",
                              width: "98%",
                            }}
                          >
                            <input style={{ width: "100%" }} type="date" id="return" name="returnDate" value={flightData.returnDate} onChange={getFlightInputdata} />
                          </Box>
                        </Grid>
                        <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Total Person</b>
                          </label>
                          <Box
                            style={{
                              padding: "15px",
                              border: "1px solid lightgray",
                              borderRadius: "8px",
                              width: "100%",
                            }}
                          >
                            <input
                              style={{ width: "100%" }}
                              type="number"
                              placeholder="Select Person"
                              name="totalPerson"
                              id=""
                              onChange={getFlightInputdata}
                              value={flightData.totalPerson}
                            />
                          </Box>
                        </Grid>
                        <Grid style={{ display: 'flex', alignItems: 'center' }} item xs={12} md={2}>
                          <Button
                            onClick={handleOpen}
                            style={{
                              padding: "1rem",
                              marginTop: '1rem',
                              width: "100%",
                              background: "brown",
                            }}
                            variant="contained"
                          >
                            Next
                          </Button>
                          <div>
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                  Please Enter Your Details
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                  <Box>
                                    <Typography>

                                      <Label /> <label htmlFor="">Enter Your Full Name</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Full Name" variant="outlined" value={flightData.name} name="name" onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography style={{ marginTop: '1rem' }}>

                                      <Label /> <label htmlFor="">Enter Your Email</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Email" variant="outlined" value={flightData.email} name="email" onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography style={{ marginTop: '1rem' }}>

                                      <Label /> <label htmlFor="">Phone Number</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Number" type="number" variant="outlined" value={flightData.phone} name="phone" onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography style={{ marginTop: '1rem' }}>

                                      <Label /> <label htmlFor="">Address</label>
                                      <TextField id="outlined-basic" fullWidth label="Enter Your Number" variant="outlined" name="address" value={flightData.address} onChange={getFlightInputdata} />
                                    </Typography>
                                    <Typography mt={3} style={{ display: 'flex', justifyContent: 'center' }}>
                                      <Button style={{ background: 'brown' }} fullWidth variant="contained" onClick={SubmitFlightdata}>Submit</Button>
                                    </Typography>
                                  </Box>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >

                  </Box>
                </CustomTabPanel> */}
              </Box>
            ) : isactive === "hotel" ? (
              <form action="">
                <Grid sx={{ padding: { xs: '1rem', sm: '1rem', md: '0rem' } }} container spacing={2}>
                  <Grid item xs={12} md={2}>
                    <label htmlFor="">
                      <b>Where</b>
                    </label>
                    <TextField
                      style={{ width: "98%" }}
                      id="outlined-basic"
                      placeholder="Enter city or airport"
                      variant="outlined"
                      name="where" value={hotelData.where}
                      onChange={getHotelInputdata}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <label htmlFor="">
                      <b>CheckIn</b>
                    </label>
                    <Box
                      style={{
                        padding: "15px",
                        border: "1px solid lightgray",
                        borderRadius: "8px",
                        width: "98%",
                      }}
                    >
                      <input
                        placeholder="Departure"
                        type="date"
                        id="Departure"
                        name="checkIn" value={hotelData.checkIn}
                        onChange={getHotelInputdata}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <label htmlFor="">
                      <b>CheckOut</b>
                    </label>
                    <Box
                      style={{
                        padding: "15px",
                        border: "1px solid lightgray",
                        borderRadius: "8px",
                        width: "98%",
                      }}
                    >
                      <input
                        placeholder="Departure"
                        type="date"
                        id="Departure"
                        name="checkOut" value={hotelData.checkOut}
                        onChange={getHotelInputdata}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <label htmlFor="">
                      <b>Room & Guest</b>
                    </label>
                    <Typography
                      style={{ border: "1px solid lightgray", padding: "1rem", borderRadius: '5px', cursor: 'pointer' }}
                      onClick={RoomGuest}
                    >
                      Room & Guest
                    </Typography>
                    {derpopen && (
                      <Box
                        sx={{ position: { xs: 'relative', sm: 'relative', md: 'absolute' } }}
                        onMouseLeave={RoomGuestLeave}
                        style={{
                          boxShadow: "0px 0px 14px 1px lightgray",
                          borderRadius: "1rem",
                          padding: "1rem",
                          background: "white",
                          zIndex: 1,
                        }}
                      >
                        <Typography style={{ marginBottom: "1rem" }}>
                          <label htmlFor="room-quantity">
                            <b>Room (Max 8)</b>
                          </label>
                          <input
                            style={{ border: "1px solid lightgray", width: "100%" }}
                            type="number"
                            id="room-quantity"
                            name="numberofroom" value={hotelData.numberofroom}
                            onChange={getHotelInputdata}
                            min="1"
                            max="8"
                          />
                        </Typography>
                        <Typography style={{ marginBottom: "1rem" }}>
                          <label htmlFor="adults-quantity">
                            <b>Adults (12 + Year)</b>
                          </label>
                          <input
                            style={{ border: "1px solid lightgray", width: "100%" }}
                            type="number"
                            id="adults-quantity"
                            name="adults" value={hotelData.adults}
                            onChange={getHotelInputdata}
                            min="12"
                            max="100"
                          />
                        </Typography>
                        <Typography style={{ marginBottom: "1rem" }}>
                          <label htmlFor="children-quantity">
                            <b>Children (0-12 Year)</b>
                          </label>
                          <input
                            style={{ border: "1px solid lightgray", width: "100%" }}
                            type="number"
                            id="children-quantity"
                            name="children" value={hotelData.children}
                            onChange={getHotelInputdata}
                            min="0"
                            max="12"
                          />
                        </Typography>
                        <Typography>
                          <Button variant="contained" onClick={handleClose}>Done</Button>
                        </Typography>
                      </Box>
                    )}
                  </Grid>
                  <Grid style={{ display: 'flex', alignItems: 'end' }} item xs={12} md={2}>
                    <Button
                      onClick={handleOpen}
                      style={{
                        padding: "1rem",
                        width: "100%",
                        background: "brown",
                      }}
                      variant="contained"
                    >
                      Next
                    </Button>
                    <div>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography id="modal-modal-title" variant="h6" component="h2">
                            Please Enter Your Details
                          </Typography>
                          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Box>
                              <Typography>

                                <Label /> <label htmlFor="">Enter Your Full Name</label>
                                <TextField id="outlined-basic" fullWidth label="Enter Your Full Name" onChange={getHotelInputdata} variant="outlined" name="hotelname" value={hotelData.hotelname} />
                              </Typography>
                              <Typography style={{ marginTop: '1rem' }}>

                                <Label /> <label htmlFor="">Enter Your Email</label>
                                <TextField id="outlined-basic" fullWidth label="Enter Your Email" onChange={getHotelInputdata} variant="outlined" name="hotelemail" value={hotelData.hotelemail} />
                              </Typography>
                              <Typography style={{ marginTop: '1rem' }}>

                                <Label /> <label htmlFor="">Phone Number</label>
                                <TextField id="outlined-basic" fullWidth label="Enter Your Number" onChange={getHotelInputdata} variant="outlined" name="hotelphone" value={hotelData.hotelphone} />
                              </Typography>
                              <Typography style={{ marginTop: '1rem' }}>

                                <Label /> <label htmlFor="">Address</label>
                                <TextField id="outlined-basic" fullWidth label="Enter Your Number" onChange={getHotelInputdata} variant="outlined" name="hoteladdress" value={hotelData.hoteladdress} />
                              </Typography>
                              <Typography mt={3} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button style={{ background: 'brown' }} fullWidth variant="contained" onClick={SubmitHoteldata}>Submit</Button>
                              </Typography>
                            </Box>
                          </Typography>
                        </Box>
                      </Modal>
                    </div>
                  </Grid>
                </Grid>
              </form>
            ) : (
              <p>no</p>
            )}
          </Box>
        </div>
      </Container>
    </>
  );
}
