import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllPackageInquery = () => {

    const [data, setData] = useState([])

    const getApiData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/package-inquery")
            console.log(res)
            if (res.status === 200) {
                const newData = res.data.data
                setData(newData.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getApiData()
    }, [data.length])
    return (
        <>
            <div className="bread">
                <div className="head">
                    <h4>All Package Inquery </h4>
                </div>
                {/* <div className="links">
                    <Link to="/add-voucher" className="add-new">Add New <i class="fa-solid fa-plus"></i></Link>
                </div> */}
            </div>
            <section className=" mt-2 dis-table table-responsive">
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S No.</th>
                            <th scope="col">Package City</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,index) =>
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.packageCity}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>


        </>

    );
}

export default AllPackageInquery;
