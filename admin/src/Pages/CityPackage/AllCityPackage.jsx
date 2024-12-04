import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link onClick={() => paginate(number)} to="/all-category" className="page-link">
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const AllCityPackage = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const getCitydata = async () => {
        try {
            let res = await axios.get("https://api.trip.digiindiasolutions.com/api/city");
            const newData = res.data.data;
            setData(newData.reverse());
        } catch (error) {
            console.log(error);
        }
    };

    const deleteRecord = async (_id) => {
        try {
            let res = await axios.delete("https://api.trip.digiindiasolutions.com/api/city/" + _id);
            if (res.status === 200) {
                toast.success("Deleted successfully");
                getCitydata();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCitydata();
    }, []);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All City Package </h4>
                </div>
                <div className="links">
                    <Link to="/add-city-package" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
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
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Domestic/Internal National</th>
                            <th scope="col">Image</th>
                            {/* <th scope="col">Show in home page</th> */}
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.map((item, index) =>
                                <tr key={index}>
                                    <th scope="row">{index + 1 + indexOfFirstItem}</th>
                                    <td>{item.cityname}</td>
                                    <td>{item.domesinternal}</td>
                                    <td><img src={item.cityimage} alt={item.cityname} /></td>
                                    {/* <td></td> */}
                                    <td><Link to={`/edit-city-package/${item._id}`} className="bt edit">Edit <i className="fa-solid fa-pen-to-square"></i></Link></td>
                                    <td><Link className="bt delete" onClick={() => deleteRecord(item._id)}>Delete <i className="fa-solid fa-trash"></i></Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={data.length}
                    paginate={paginate}
                />
            </section>
        </>
    );
};

export default AllCityPackage;
