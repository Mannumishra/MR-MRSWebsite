import React, { useState, useEffect } from "react";
import "./MostPopularTour.css";
import { Link } from "react-router-dom";
import axios from "axios";

function MostPopularTour() {
  const [packages, setPackages] = useState([]);

  const getApiData = async () => {
    try {
      let res = await axios.get("https://api.mrandmrsperfecttrips.in/api/city");
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

  return (
    <section className="mostpopular-section">
      <div className="popular-container">
        <div className="heading">
          <h2>
            TAKE A LOOK AT OUR <span>MOST POPULAR</span> TOURS
          </h2>
        </div>
        <div className="main-container">
          {packages.slice(0, 6).map((item, index) => (
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
          <Link to="/all-tours" className="view-all-button">View All</Link>
        </div>
      </div>
    </section>
  );
}

export default MostPopularTour;
