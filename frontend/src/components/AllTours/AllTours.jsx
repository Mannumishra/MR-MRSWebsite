import React, { useState, useEffect } from "react";
import "../MostPopularTour/MostPopularTour.css";
import { Link } from "react-router-dom";
import axios from "axios";

const AllTours = () => {
    const [packages, setPackages] = useState([]); // Holds all the records fetched from the API
    const [visiblePackages, setVisiblePackages] = useState(3); // Tracks how many records are visible

    // Fetch data from the API
    const getApiData = async () => {
        try {
            let res = await axios.get("https://api.trip.digiindiasolutions.com/api/city");
            if (res.status === 200) {
                setPackages(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])

    // Function to load more records
    const loadMore = () => {
        setVisiblePackages((prev) => prev + 3);
    };

    return (
        <section className="mostpopular-section">
            <div className="popular-container">
                <div className="heading">
                    <h2>
                        TAKE A LOOK AT OUR <span>MOST POPULAR</span> TOURS
                    </h2>
                </div>
                <div className="main-container">
                    {packages.slice(0, visiblePackages).map((item, index) => (
                        <div className="col" key={index}>
                            <Link to={`/categorytour/${item.cityname}`}>
                                <div className="img">
                                    <img src={item.cityimage} alt={item.cityname} />
                                </div>
                                <div className="info">
                                    <span className="uppercase">{item.cityname}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                {visiblePackages < packages.length && (
                    <div className="load-more-container" style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}>
                        <button className="view-all-button" onClick={loadMore}>
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllTours;
