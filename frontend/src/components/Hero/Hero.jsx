// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { Container } from 'postcss';
// import { Select } from '@mui/material';


// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// export default function BasicTabs() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <>
//             <div className='container mx-auto'>
//                 <Box sx={{ width: '100%', padding: '3rem', borderRadius: '2rem', position: 'relative', zIndex: '1', boxShadow: '0rem 0rem 3rem 0rem gray', background: 'white', margin: 'auto' }}>
//                     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                             <Tab style={{ textTransform: 'capitalize', fontSize: '20px', color: '#7B3226', letterSpacing: '1px', fontWeight: '600' }} label="One Way" {...a11yProps(0)} />
//                             <Tab style={{ textTransform: 'capitalize', fontSize: '20px', color: '#7B3226', letterSpacing: '1px', fontWeight: '600' }} label="Round-Trip" {...a11yProps(1)} />
//                             <Tab style={{ textTransform: 'capitalize', fontSize: '20px', color: '#7B3226', letterSpacing: '1px', fontWeight: '600' }} label="Multi-City" {...a11yProps(2)} />
//                         </Tabs>
//                     </Box>
//                     <CustomTabPanel value={value} index={0}>
//                         <Box>

//                         </Box>
//                     </CustomTabPanel>
//                     <CustomTabPanel value={value} index={1}>
//                         Round-Trip
//                     </CustomTabPanel>
//                     <CustomTabPanel value={value} index={2}>
//                         Multi-City
//                     </CustomTabPanel>
//                 </Box>
//             </div>
//         </>
//     );
// }




// import React, { useState } from 'react';
// import flight from './travelling.png';
// import Hotel from './hotel.png';
// import './hero.css';

// const Hero = () => {
//     const [flightData, setFlightData] = useState({
//         from: '',
//         to: '',
//         departure: '',
//         return: '',
//         way: '',
//         adults: 1,
//         children: 0,
//         infants: 0,
//         whichClass: '',
//         Routing: '',
//         name: '',
//         phone: '',
//         email: ''
//     });
//     const [hoteldata, setHoteldata] = useState({
//         city: '',
//         checkInDate: '',
//         checkOutDate: '',
//         HowManyRoom: 1,
//         adults: 1,
//         children: 0,
//         RoomType: '',
//         name: '',
//         phone: '',
//         email: ''
//     })
//     const [showFromList, setShowFromList] = useState(false);
//     const [showToList, setShowToList] = useState(false);
//     const [activeTabs, setActiveTabs] = useState('Flight')
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFlightData(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//     };
//     const handleHottelInput = (e) => {
//         const { name, value } = e.target;
//         setHoteldata(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const handleListToggle = (listName) => {
//         if (listName === 'from') {
//             setShowFromList(!showFromList);
//             setShowToList(false);
//         } else if (listName === 'to') {
//             setShowToList(!showToList);
//             setShowFromList(false);
//         }
//     };

//     const handleSelectItem = (value, name) => {
//         setFlightData(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//         setShowFromList(false);
//         setShowToList(false);
//     };

//     const handleCounterChange = (type, value) => {
//         setFlightData(prevData => ({
//             ...prevData,
//             [type]: Math.max(prevData[type] + value, 0)
//         }));
//     };
//     const handleHottelCounterChange = (type, value) => {
//         setHoteldata(prevData => ({
//             ...prevData,
//             [type]: Math.max(prevData[type] + value, 0)
//         }));
//     };

//     const handleSubmit = () => {
//         console.log('Flight Details:', flightData);
//     };
//     return (
//         // <div className={`w-full max-w-[1920px] m-auto ${activeTabs === 'Flight' ? 'bg' : activeTabs === 'Hotel' ? 'bg1' : ''}`}>
//         //     <div className='max-w-7xl grid grid-cols-1 gap-2 space-x-2  mx-auto h-full'>
//         //         <div className='bookings relative mt-10 '>
//         //             <div className="tabs transition-all duration-150 ease-linear flex items-center gap-3 px-2 py-3 w-full  space-x-3">

//         //                 <div className={`flex rounded transition-all duration-150 ease-linear text-center justify-around py-1 bg-[#C5733C] linear-color-hotel w-[48%] ${activeTabs === 'Flight' ? 'active' : ''
//         //                     } items-center`}
//         //                     onClick={() => setActiveTabs('Flight')}>
//         //                     <img src={flight} className='w-10' alt="" />
//         //                     <button className='flight font-bold text-xl md:text-2xl text-white rounded-[50%] w-14 h-14'>Flight</button>
//         //                 </div>
//         //                 <div className={`flex rounded transition-all duration-150 ease-linear text-center justify-around bg-[#7B3226] py-1 linear-color-flight w-[48%] ${activeTabs === 'Hotel' ? 'active ' : ''
//         //                     } items-center`}
//         //                     onClick={() => setActiveTabs('Hotel')}>
//         //                     <img src={Hotel} className='w-10' alt="" />
//         //                     <button className='hotels  font-bold text-xl md:text-2xl text-white rounded-[50%] w-14 h-14'>Hotels</button>
//         //                 </div>

//         //             </div>
//         //             Flight Bookings
//         //             {activeTabs === 'Flight' && (
//         //                 <div className="flight-container">
//         //                     <form className="left">
//         //                         <div className="field-row">
//         //                             <div className="same-field">
//         //                                 <label htmlFor="from">From</label>
//         //                                 <input type="text" name='from' placeholder='Enter Departure Airport' />
//         //                             </div>
//         //                             <div className="same-field">
//         //                                 <label htmlFor="to">To</label>
//         //                                 <input type="text" name='to' placeholder='Enter Destination Airport' />
//         //                             </div>
//         //                             <div className="same-field">
//         //                                 <label htmlFor="class">Select Class</label>
//         //                                 <input type="text" name='class' placeholder='Select Class' />
//         //                             </div>
//         //                         </div>

//         //                         <div className="field-row">
//         //                             <div className="same-field">

//         //                             </div>
//         //                         </div>
//         //                     </form>

//         //                     <div className="right">

//         //                     </div>
//         //                 </div>

//                         // <form onSubmit={''} className='bookings-flight transition-all duration-150 ease-linear grid mt-15 grid-cols-1 md:grid-cols-2  p-4'>
//                         //     <div className='w-full  p-2'>
//                         //         <div className="w-full gap-4 flex">
//                         //             <div className="w-1/2">
//                         //                 <label htmlFor="from" className="block text-sm font-medium text-black">From</label>
//                         //                 <input
//                         //                     type="text"
//                         //                     id="from"
//                         //                     name="from"
//                         //                     className="block  px-2 relative  w-full py-2 mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         //                     value={flightData.from}
//                         //                     onChange={handleInputChange}
//                         //                     onClick={() => handleListToggle('from')}
//                         //                     placeholder="Enter Departure airport"
//                         //                 />
//                         //             </div>
//                         //             <div className="w-1/2">
//                         //                 <label htmlFor="to" className="block text-sm font-medium text-black">To</label>
//                         //                 <input
//                         //                     type="text"
//                         //                     id="to"
//                         //                     name="to"
//                         //                     className="block px-2  w-full py-2 mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 relative focus:border-indigo-500 sm:text-sm"
//                         //                     value={flightData.to}
//                         //                     onChange={handleInputChange}
//                         //                     onClick={() => handleListToggle('to')}
//                         //                     placeholder="Enter Destination airport"
//                         //                 />
//                         //             </div>
//                         //         </div>
//                         //         <div className='dates w-full mt-2 flex gap-4'>
//                         //             <div className='w-1/2'>
//                         //                 <label htmlFor="departure" className="block text-sm font-medium text-black mb-1">Departure</label>
//                         //                 <input
//                         //                     type="date"
//                         //                     id="departure"
//                         //                     name="departure"
//                         //                     className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         //                     value={flightData.departure}
//                         //                     onChange={handleInputChange}
//                         //                     placeholder="Enter Departure date"
//                         //                 />
//                         //             </div>
//                         //             <div className='w-1/2'>
//                         //                 <label htmlFor="return" className="block text-sm font-medium text-black mb-1">Return</label>
//                         //                 <input
//                         //                     type="date"
//                         //                     id="return"
//                         //                     name="return"
//                         //                     className="block px-2  py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         //                     value={flightData.return}
//                         //                     onChange={handleInputChange}
//                         //                     placeholder="Enter return date"
//                         //                 />
//                         //             </div>
//                         //         </div>
//                         //         <div className='flex flex-wrap items-center justify-between'>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="adults" className="block text-lg font-medium text-black mt-4 mr-2">Adults</label>
//                         //                 <div className="flex items-center mb-2 w-full">

//                         //                     <div className="flex items-center w-full">
//                         //                         <input type="text" className='"block  px-2 relative  w-full py-2 mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
//                         //                     </div>
//                         //                 </div>
//                         //                 {/* Similar structure for children and infants */}
//                         //             </div>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="Infants" className="block text-lg font-medium text-black mt-4 mr-2">Infants</label>
//                         //                 <div className="flex items-center mb-2 w-full">

//                         //                     <div className="flex items-center w-full">
//                         //                         <input type="text" className='"block  px-2 relative  w-full py-2 mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
//                         //                     </div>
//                         //                 </div>

//                         //             </div>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="children" className="block text-lg font-medium text-black mt-4 mr-2">children</label>
//                         //                 <div className="flex items-center mb-2 w-full">

//                         //                     <div className="flex items-center w-full">

//                         //                         <input type="text" className='block  px-2 relative  w-full py-2 mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
//                         //                     </div>
//                         //                 </div>
//                         //                 {/* Similar structure for children and infants */}
//                         //             </div>
//                         //         </div>
//                         //         <div className='flex items-center gap-2 justify-around'>
//                         //             <div className='w-1/2'>
//                         //                 <label htmlFor="Select-Class" className="block text-lg font-semibold text-black">Select Class</label>
//                         //                 <select name="whichClass" id="class" value={flightData.whichClass} className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleInputChange}>
//                         //                     <option className='py-2' value="Economy">Select Class</option>
//                         //                     <option className='py-2' value="Economy">Economy</option>
//                         //                     <option className='py-2' value="Refundable">Refundable</option>
//                         //                     <option className='py-2' value="Business">Business</option>
//                         //                     <option className='py-2' value="General Economy">General Economy</option>
//                         //                     <option className='py-2' value="Full Economy">Full Economy</option>
//                         //                     <option className='py-2' value="Premium">Premium</option>
//                         //                     <option className='py-2' value="Others">Others</option>
//                         //                 </select>
//                         //             </div>
//                         //             <div className='w-1/2 dropdown'>
//                         //                 <label htmlFor="Select-Routing" className="block text-lg font-semibold text-black">Select Routing</label>
//                         //                 <select name="Routing" id="Routing" value={flightData.Routing} className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleInputChange}>
//                         //                     <option className='py-2' value="">Select Route</option>
//                         //                     <option className='py-2' value="Direct">Direct</option>
//                         //                     <option className='py-2' value="In-Direct Flight">In-Direct Flight</option>
//                         //                 </select>
//                         //             </div>
//                         //         </div>
//                         //         {/* <div className='flex items-center gap-2 justify-around'>
//                         //             <div className='w-1/2'>
//                         //                 <label htmlFor="Select-Class" className="block text-lg font-semibold text-black">Flight Class</label>
//                         //                 <input name="whichClass" id="class" value={flightData.whichClass} className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='Select Class' onChange={handleInputChange}>

//                         //                 </input>
//                         //             </div>
//                         //             <div className='w-1/2 dropdown'>
//                         //                 <label htmlFor="Select-Routing" className="block text-lg font-semibold text-black">Select Routing</label>
//                         //                 <input name="Routing" id="Routing" value={flightData.Routing} className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleInputChange} placeholder='Select Route'>

//                         //                 </input>
//                         //             </div>
//                         //         </div> */}

//                         //         <div className='flex items-center gap-2 justify-between'>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="name" className="block text-lg font-medium text-black mt-4 mr-2">Name:</label>
//                         //                 <input name="name" id="name" value={flightData.name} className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='Name' onChange={handleInputChange} />
//                         //             </div>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="email" className="block text-lg font-medium text-black mt-4 mr-2">Email:</label>
//                         //                 <input name="email" id="email" value={flightData.email} className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='Email' onChange={handleInputChange} />
//                         //             </div>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="phone" className="block text-lg font-medium text-black mt-4 mr-2">Phone No:</label>
//                         //                 <input name="phone" id="phone" value={flightData.phone} className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='Phone No.' onChange={handleInputChange} />
//                         //             </div>
//                         //         </div>


//                         //         <div className="btn-group mt-10 w-full">
//                         //             <button onClick={handleSubmit} className='btn w-full hovers text-center flex items-center justify-center gap-2 text-white bg-[#C5733C] px-[4rem] py-2 '>Submit <img src={flight} className='w-6 rotate-[15deg] ' alt="" /> </button>
//                         //         </div>
//                         //     </div>
//                         //     <div className='slider hidden md:block w-full h-full px-9 mt-4 py-5'>
//                         //         <div className='w-full'>
//                         //             <img src="https://img.freepik.com/free-photo/jumbo-jet-flying-sky_23-2150895675.jpg" className='object-cover h-full object-center w-full' alt="" />
//                         //         </div>
//                         //     </div>

//                         // </form>
//                     // )}

//                     // {activeTabs === 'Hotel' && (
//                     //     Hotel Bookings content
//                     //     <div>
//                     //         <h2>hotel</h2>
//                     //     </div>
//                         // <div className='bookings-flight transition-all duration-150 ease-linear grid mt-15 grid-cols-1 md:grid-cols-2  p-4'>
//                         //     <div className='slider hidden md:block w-full h-full px-9 mt-4 py-5'>
//                         //         <div className='w-full'>
//                         //             <img src="https://img.freepik.com/premium-photo/beautifully-illuminated-building-night-with-numerous-windows_822108-14543.jpg?w=900" className='object-cover h-full object-center w-full' alt="" />
//                         //         </div>
//                         //     </div>
//                         //     <div className='w-full  p-2'>
//                         //         <div className="w-full gap-4 flex">
//                         //             <div className="w-1/2">
//                         //                 <label htmlFor="city" className="block text-sm font-medium text-black">City</label>
//                         //                 <input
//                         //                     type="text"
//                         //                     id="city"
//                         //                     name="city"
//                         //                     className="block  px-2  w-full py-2 mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         //                     value={hoteldata.city}
//                         //                     onChange={handleHottelInput}
//                         //                     placeholder="Enter city"
//                         //                 />
//                         //             </div>
//                         //             <div className="w-1/2">
//                         //                 <label htmlFor="HowManyRoom" className="block text-sm font-medium text-black">How Many Rooms</label>
//                         //                 <input
//                         //                     type="number"
//                         //                     id="HowManyRoom"
//                         //                     name="HowManyRoom"
//                         //                     className="block  px-2  w-full py-2 mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         //                     value={hoteldata.HowManyRoom}
//                         //                     onChange={handleHottelInput}
//                         //                     placeholder="Enter number of rooms"
//                         //                 />
//                         //             </div>
//                         //         </div>
//                         //         <div className='dates w-full mt-2 flex gap-4'>
//                         //             <div className='w-1/2'>
//                         //                 <label htmlFor="checkInDate" className="block text-sm font-medium text-black mb-1">Check-In Date</label>
//                         //                 <input
//                         //                     type="date"
//                         //                     id="checkInDate"
//                         //                     name="checkInDate"
//                         //                     className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         //                     value={hoteldata.checkInDate}
//                         //                     onChange={handleHottelInput}
//                         //                     placeholder="Select check-in date"
//                         //                 />
//                         //             </div>
//                         //             <div className='w-1/2'>
//                         //                 <label htmlFor="checkInDate" className="block text-sm font-medium text-black mb-1">Check-Out Date</label>
//                         //                 <input
//                         //                     type="date"
//                         //                     id="checkOutDate"
//                         //                     name="checkOutDate"
//                         //                     className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         //                     value={hoteldata.checkOutDate}
//                         //                     onChange={handleHottelInput}
//                         //                     placeholder="Select check-out date"
//                         //                 />
//                         //             </div>
//                         //             {/* Include check-out date input field similarly */}
//                         //         </div>
//                         //         <div className='flex flex-wrap items-center justify-between'>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="adults" className="block text-lg font-medium text-black mt-4 mr-2">Adults</label>
//                         //                 <div className="flex items-center w-full">

//                         //                     <input type="text" name='adults' onChange={handleHottelInput} value={hoteldata.adults} className='block  px-2 relative  w-full py-2 mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
//                         //                 </div>
//                         //             </div>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="children" className="block text-lg font-medium text-black mt-4 mr-2">Children</label>
//                         //                 <div className="flex items-center mb-2 w-full">
//                         //                     <div className="flex items-center w-full">

//                         //                         <input type="text" onChange={handleHottelInput} name='children' value={hoteldata.children} className='block  px-2 relative  w-full py-2 mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
//                         //                     </div>
//                         //                 </div>
//                         //             </div>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="RoomType" className="block text-lg font-medium text-black mt-4 mr-2">Room Type</label>
//                         //                 <input
//                         //                     name="RoomType"
//                         //                     id="RoomType"
//                         //                     value={hoteldata.RoomType}
//                         //                     onChange={handleHottelInput}
//                         //                     className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         //                 >

//                         //                 </input>
//                         //             </div>
//                         //         </div>
//                         //         <div className='flex items-center gap-2 justify-between'>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="name" className="block text-lg font-medium text-black mt-4 mr-2">Name:</label>
//                         //                 <input name="name" id="class" value={hoteldata.name} onChange={handleHottelInput} className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='Name' ></input>
//                         //             </div>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="email" className="block text-lg font-medium text-black mt-4 mr-2">Email:</label>
//                         //                 <input name="email" id="class" value={hoteldata.email} onChange={handleHottelInput} className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='Email' ></input>
//                         //             </div>
//                         //             <div className='passenger-count'>
//                         //                 <label htmlFor="phone" className="block text-lg font-medium text-black mt-4 mr-2">Phone No:</label>
//                         //                 <input name="phone" id="class" value={hoteldata.phone} onChange={handleHottelInput} className="block px-2 py-2 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='Phone No.' ></input>
//                         //             </div>
//                         //         </div>
//                         //         <div className="btn-group mt-10 w-full">
//                         //             <button onClick={handleSubmit} className='btn w-full hovers text-center flex items-center justify-center gap-2 text-white bg-[#C5733C] px-[4rem] py-2 '>Submit <img src={Hotel} className='w-6 rotate-[15deg] ' alt="" /> </button>
//                         //         </div>
//                         //     </div>
//                         // </div>
// //                     )}
// //                 </div>
// //                 <div>

// //                 </div>

// //             </div>
// //         </div>
// //     )
// // }
//     )}

// export default Hero