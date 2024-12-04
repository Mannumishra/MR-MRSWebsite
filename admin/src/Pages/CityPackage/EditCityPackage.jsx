import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCityPackage = () => {
    const navigate = useNavigate()
    const { _id } = useParams()
    const [btnLoading, setBtnLoading] = useState(false);
    const [data, setData] = useState({
        cityname: "",
        cityimage: "",
        domesinternal: ""
    })

    const getCity = async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/city/" + _id)
            console.log(res)
            setData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getinputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const getfiledata = (e) => {
        const { name, files } = e.target
        setData({ ...data, [name]: files[0] })
    }

    const formData = new FormData()
    formData.append("cityname" ,data.cityname)
    formData.append("cityimage" ,data.cityimage)
    formData.append("domesinternal", data.domesinternal)


    const postData = async (e) => {
        e.preventDefault()
        setBtnLoading(true)
        try {
            let res = await axios.put("http://localhost:8000/api/city/" + _id, formData)
            if(res.status===200){
                toast.success("Record Updated successfully")
                navigate("/all-city-package")
                setBtnLoading(false)
            }
        } catch (error) {
            setBtnLoading(false)
            toast.error(error.response.data.mess)
            console.log(error)
        }
    }
    useEffect(() => {
        getCity()
    }, [])

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit City Package</h4>
                </div>
                <div className="links">
                    <Link to="/all-city-package" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={postData}>
                    <div className="col-md-4">
                        <label htmlFor="categoryName" className="form-label">City Name<sup className='text-danger'>*</sup></label>
                        <input type="text" name='cityname' value={data.cityname} onChange={getinputData} className="form-control" id="categoryName" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="categoryName" className="form-label">Type of tour<sup className='text-danger'>*</sup></label>
                        <select name="domesinternal" id="" className='form-control' value={data.domesinternal} onChange={getinputData}>
                            <option value="Please select" disabled>Please Select</option>
                            <option value="DOMESTIC TOUR">DOMESTIC TOUR</option>
                            <option value="INTERNATIONAL TOUR">INTERNATIONAL TOUR</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="categoryImage" className="form-label">City Image<sup className='text-danger'>*</sup></label>
                        <input type="file" name='cityimage' className="form-control" onChange={getfiledata} id="categoryImage" />
                    </div>
                    {/* <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="categoryActive" id="categoryActive" />
                            <label className="form-check-label" htmlFor="categoryActive">
                                Active in Homepage
                            </label>
                        </div>
                    </div> */}
                    <div className="col-12 text-center">
                        {/* <button type="submit" className="">Update Category</button> */}
                        <button type="submit" className={`${btnLoading ? 'not-allowed' : 'allowed'}`} >{btnLoading ? "Please Wait.." : "Update City Package"} </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditCityPackage;
