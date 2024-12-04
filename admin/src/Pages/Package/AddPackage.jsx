import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPackage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [cityData, setCityData] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    const getcitydata = async () => {
        try {
            let res = await axios.get("https://api.trip.digiindiasolutions.com/api/city");
            if (res.status === 200) setCityData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [data, setData] = useState({
        packagetours: "",
        packagecity: "",
        packageheading: "",
        packagedestination: "",
        packagedescription: "",
        packageprice: "",
        packagedis: "",
        packagefinal: "",
        packageinclude: "",
        packagehighlight: "",
        pic: "",
        slideimage: [],
        days: []
    });

    useEffect(() => {
        if (data.packageprice && data.packagedis) {
            const finalPrice = data.packageprice - (data.packageprice * data.packagedis / 100);
            setData(prevData => ({ ...prevData, packagefinal: finalPrice.toFixed(2) }));
        }
    }, [data.packageprice, data.packagedis]);

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        // Update filtered cities based on tour selection
        if (name === "packagetours") {
            const filtered = cityData.filter(city =>
                city.domesinternal === value // Assuming `city.type` contains "DOMESTIC TOUR" or "INTERNATIONAL TOUR"
            );
            setFilteredCities(filtered);
            setData(prev => ({ ...prev, packagecity: "" })); // Reset city selection
        }
    };

    const getFileData = (e) => {
        const { name, files } = e.target;
        if (name === "slideimage") {
            setData({ ...data, [name]: [...files] });
        } else {
            setData({ ...data, [name]: files[0] });
        }
    };

    const addDay = () => {
        setData({ ...data, days: [...data.days, ""] });
    };

    const removeDay = (index) => {
        const newDays = [...data.days];
        newDays.splice(index, 1);
        setData({ ...data, days: newDays });
    };

    const handleDayChange = (e, index) => {
        const newDays = [...data.days];
        newDays[index] = e.target.value;
        setData({ ...data, days: newDays });
    };

    const postData = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("packagecity", data.packagecity);
            formData.append("packageheading", data.packageheading);
            formData.append("packagedestination", data.packagedestination);
            formData.append("packagehighlight", data.packagehighlight);
            formData.append("packagedescription", data.packagedescription)
            formData.append("packageprice", data.packageprice);
            formData.append("packagedis", data.packagedis);
            formData.append("packagefinal", data.packagefinal);
            formData.append("packageinclude", data.packageinclude);
            formData.append("pic", data.pic);
            data.slideimage.forEach(file => {
                formData.append("slideimage", file);
            });
            data.days.forEach((day, index) => {
                formData.append(`day${index + 1}`, day);
            });

            const res = await axios.post("https://api.trip.digiindiasolutions.com/api/package", formData);
            console.log(res)
            if (res.status === 200) {
                toast.success("New Package Added successfully");
                navigate("/all-package");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getcitydata();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Package</h4>
                </div>
                <div className="links">
                    <Link to="/all-package" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={postData}>

                    <div className="col-md-3 mt-3">
                        <label htmlFor="">Select Tours</label>
                        <select name="packagetours" id="" className='form-control' onChange={getInputData}>
                            <option value="" disabled selected>Please Select</option>
                            <option value="DOMESTIC TOUR">DOMESTIC TOUR</option>
                            <option value="INTERNATIONAL TOUR">INTERNATIONAL TOUR</option>
                        </select>
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="">Select City/State</label>
                        <select name="packagecity" id="" className='form-control' value={data.packagecity} onChange={getInputData} disabled={!filteredCities.length}>
                            <option value="" disabled>Select city</option>
                            {
                                filteredCities.map((item, index) =>
                                    <option key={index} value={item.cityname}>{item.cityname}</option>
                                )
                            }
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="packageHeading" className="form-label">Package Description</label>
                        <input type='text' name='packagedescription' className="form-control" id="packageHeading" value={data.packagedescription} onChange={getInputData} required />
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="packageHeading" className="form-label">Package Heading</label>
                        <input type='text' name='packageheading' className="form-control" id="packageHeading" value={data.packageheading} onChange={getInputData} required />
                    </div>

                    <div className="col-md-7">
                        <label className="form-label">Package Destination</label>
                        <input type="text" name='packagedestination' className="form-control me-2" value={data.packagedestination} onChange={getInputData} required />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="packageHighlight" className='form-label'>Package Highlights</label>
                        <input type="text" className="form-control me-2" name='packagehighlight' value={data.packagehighlight} onChange={getInputData} required />
                    </div>

                    <div className="col-md-3">
                        <label htmlFor="packagePrice" className="form-label">Package Price</label>
                        <input type="number" name='packageprice' className="form-control" id="packagePrice" value={data.packageprice} onChange={getInputData} required />
                    </div>

                    <div className="col-md-3">
                        <label htmlFor="packageDis" className="form-label">Package Discount</label>
                        <input type="number" name='packagedis' className="form-control" id="packageDis" value={data.packagedis} onChange={getInputData} required />
                    </div>

                    <div className="col-md-3">
                        <label htmlFor="packageFinal" className="form-label">Final Price</label>
                        <input type="number" name='packagefinal' className="form-control" id="packageFinal" value={data.packagefinal} readOnly />
                    </div>

                    <div className="col-md-3">
                        <label htmlFor="packageInclude" className="form-label">Package Include</label>
                        <input type="text" name='packageinclude' className="form-control" id="packageInclude" value={data.packageinclude} onChange={getInputData} required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="mainImage" className="form-label">Main Image</label>
                        <input type="file" name='pic' className="form-control" id="mainImage" onChange={getFileData} required />
                    </div>

                    <div className="col-md-8">
                        <label htmlFor="sliderImages" className="form-label">Slider Images</label>
                        <input type="file" name='slideimage' className="form-control" id="sliderImages" onChange={getFileData} required multiple />
                    </div>

                    {data.days.map((day, index) => (
                        <div className="col-md-4" key={index}>
                            <label htmlFor={`day${index + 1}`} className="form-label">{`Day ${index + 1}`}</label>
                            <textarea type="text" placeholder='Please share day by day schedule' name={`day${index + 1}`} className="form-control" value={day} onChange={(e) => handleDayChange(e, index)} />
                            <button type="button" className="btn btn-danger mt-2" onClick={() => removeDay(index)}>Remove Day</button>
                        </div>
                    ))}
                    <div className="col-12">
                        <button type="button" className="btn btn-primary" onClick={addDay}>Add Day</button>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className={`btn btn-primary ${isLoading ? 'disabled' : ''}`}>
                            {isLoading ? "Please Wait..." : "Add Package"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddPackage;
