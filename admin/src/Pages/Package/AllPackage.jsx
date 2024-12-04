import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PAGE_LIMIT = 5; // Number of items per page

const AllPackage = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchData();
    }, [currentPage]); // Fetch data whenever currentPage changes

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/package?page=${currentPage}&limit=${PAGE_LIMIT}`);
            console.log(res.data);
            setData(res.data.data);
            console.log(data[2].packageinclude[0])
            setTotalPages(Math.ceil(res.data.totalItems / PAGE_LIMIT));
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            // Implement your delete logic here
            console.log(`Deleting item with id ${id}`);
            // Example of using SweetAlert for confirmation
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:8000/api/package/${id}`);
                toast.success('Package deleted successfully!');
                fetchData();
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to delete package.');
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Packages List </h4>
                </div>
                <div className="links">
                    <Link to="/add-package" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>

            <div className="filteration">
                <div className="selects">
                    {/* Add sorting options if needed */}
                </div>
                <div className="search">
                    <label htmlFor="search">Search </label> &nbsp;
                    <input type="text" name="search" id="search" />
                </div>
            </div>

            <section className="dis-table">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">City</th>
                            <th scope="col">Package Destination</th>
                            <th scope="col">Package Heading</th>
                            <th scope="col">Package Highlights</th>
                            <th scope="col">Package Price</th>
                            <th scope="col">Package Discount</th>
                            <th scope="col">Final Price</th>
                            <th scope="col">Package Include</th>
                            <th scope="col">City Image</th>
                            {/* <th scope="col">Edit</th> */}
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) =>
                                <tr key={index}>
                                    <td>{(currentPage - 1) * PAGE_LIMIT + index + 1}</td>
                                    <td>{item.packagecity}</td>
                                    <td>{item.packagedestination}</td>
                                    <td>{item.packageheading}</td>
                                    <td>{item.packagehighlight}</td>
                                    <td>{item.packageprice}</td>
                                    <td>{item.packagedis}</td>
                                    <td>{item.packagefinal}</td>
                                    <td>{item.packageinclude}</td>
                                    <td><img src={item.pic} alt="" style={{ maxWidth: '100px' }} /></td>
                                    {/* <td><Link to={`/edit-product/${item._id}`} className="bt edit">Edit <i className="fa-solid fa-pen-to-square"></i></Link></td> */}
                                    <td><button onClick={() => handleDelete(item._id)} className="bt delete">Delete <i className="fa-solid fa-trash"></i></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>

            {/* Pagination */}
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default AllPackage;
