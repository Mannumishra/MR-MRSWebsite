import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllFlight = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            let res = await axios.get("https://api.mrandmrsperfecttrips.in/api/flight")
            if (res.status === 200) {
                const newDate = res.data.data
                setData(newDate.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Flight Inquery </h4>
                </div>
                {/* <div className="links">
                    <Link to="/add-tag" className="add-new">Add New <i class="fa-solid fa-plus"></i></Link>
                </div> */}
            </div>

            <div className="filteration">
                <div className="selects">
                    {/* <select>
                        <option>Ascending Order </option>
                        <option>Descending Order </option>
                    </select> */}
                </div>
                <div className="search">
                    <label htmlFor="search">Search </label> &nbsp;
                    <input type="text" name="search" id="search" />
                </div>
            </div>

            <section className="dis-table ">
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Departure</th>
                            <th scope="col">Return Date</th>
                            <th scope="col">Total Person</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            {/* <th scope="col">Edit</th>
                            <th scope="col">Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,index) =>
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                   <td>{item.from}</td>
                                   <td>{item.to}</td>
                                   <td>{new Date(item.departure).toLocaleDateString()}</td>
                                   <td>{new Date(item.returnDate).toLocaleDateString()}</td>
                                   <td>{item.totalPerson}</td>
                                   <td>{item.name}</td>
                                   <td>{item.phone}</td>
                                   <td>{item.email}</td>
                                   <td>{item.address}</td>
                                    {/* <td><Link to={`/edit-tag/${item._id}`} className="bt edit">Edit <i class="fa-solid fa-pen-to-square"></i></Link></td>
                                    <td><Link className="bt delete" onClick={()=>deleteRecord(item._id)}>Delete <i class="fa-solid fa-trash"></i></Link></td> */}
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default AllFlight