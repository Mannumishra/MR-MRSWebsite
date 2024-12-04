import React, { useEffect } from 'react'
import './ServiceHomePage.css'
import flight from './flight.jpg'
import hotel from './hotel.jpg'
import domestictour from './domestictour.jpg'
import confrence from './confrence.avif'
import education from './educationtour.jpg'
import internation from './internation.jpg'
import { Link } from 'react-router-dom'

function ServiceHomePage() {
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    })
    return (
        <section className='service-home-page-section'>
            <div className="service-container">
                <div className="heading">
                    <span>Our Services</span>
                </div>
                <div className="main-container">
                    <Link to={'/flight'} className="same-col">
                        <div className="img">
                            <img src={flight} alt="" />
                        </div>
                        <div className="content">
                            <span>FLIGHT BOOKINGS</span>
                        </div>
                    </Link>
                    <Link to={'/hotel'} className="same-col">
                        <div className="img">
                            <img src={hotel} alt="" />
                        </div>
                        <div className="content">
                            <span>HOTEL BOOKINGS</span>
                        </div>
                    </Link>
                    <Link to={'/domestic'} className="same-col">
                        <div className="img">
                            <img src={domestictour} alt="" />
                        </div>
                        <div className="content">
                            <span>DOMESTIC TOUR</span>
                        </div>
                    </Link>
                    <Link to={'/internation'} className="same-col">
                        <div className="img">
                            <img src={internation} alt="" />
                        </div>
                        <div className="content">
                            <span>INTERNATIONAL TOUR</span>
                        </div>
                    </Link>
                    <Link to={'/education'} className="same-col">
                        <div className="img">
                            <img src={education} alt="" />
                        </div>
                        <div className="content">
                            <span>EDUCATIONAL TOUR</span>
                        </div>
                    </Link>
                    <Link to={'/seminar'} className="same-col">
                        <div className="img">
                            <img src={confrence} alt="" />
                        </div>
                        <div className="content">
                            <span>SEMINAR & CONFERENCE</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ServiceHomePage
