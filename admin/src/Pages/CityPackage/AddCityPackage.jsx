import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCityPackage = () => {
    const [isLoading, setIsloding] = useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState({
        cityname: "",
        cityimage: "",
        domesinternal: ""
    })

    const getinputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const getfileData = (e) => {
        const { name, files } = e.target
        setData({ ...data, [name]: files[0] })
    }

    const formData = new FormData()
    formData.append("cityname", data.cityname)
    formData.append("cityimage", data.cityimage)
    formData.append("domesinternal", data.domesinternal)

    const postData = async (e) => {
        e.preventDefault()
        setIsloding(true)
        try {
            const res = await axios.post("http://localhost:8000/api/city", formData)
            if (res.status === 200) {
                setIsloding(false)
                toast.success("City created successfully")
                navigate("/all-city-package")
            }
        } catch (error) {
            toast.error(error.response.data.mess)
            setIsloding(false)
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add City Package</h4>
                </div>
                <div className="links">
                    <Link to="/all-city-package" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={postData}>
                    <div className="col-md-4">
                        <label htmlFor="categoryName" className="form-label">City Name<sup className='text-danger'>*</sup></label>
                        <input type="text" name='cityname' className="form-control" onChange={getinputData} id="categoryName" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="categoryName" className="form-label">
                            Type of tour<sup className='text-danger'>*</sup>
                        </label>
                        <select name="domesinternal" id="" className='form-control' onChange={getinputData}>
                            <option value="" disabled selected>Please Select</option>
                            <option value="DOMESTIC TOUR">DOMESTIC TOUR</option>
                            <option value="INTERNATIONAL TOUR">INTERNATIONAL TOUR</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="categoryImage" className="form-label">City Image<sup className='text-danger'>*</sup></label>
                        <input type="file" name='cityimage' className="form-control" onChange={getfileData} id="categoryImage" required />
                    </div>
                    {/* <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="categoryActive" id="categoryActive"  />
                            <label className="form-check-label" htmlFor="categoryActive">
                                Active in Homepage
                            </label>
                        </div>
                    </div> */}
                    <div className="col-12 text-center">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed' : 'allowed'}`}>{isLoading ? "Please Wait..." : "Add City Package"}</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCityPackage;
