import React from 'react'
import room1 from './room1.jpg'
import room2 from './room2.jpg'
import room3 from './room3.jpg'

function HotalHomePage() {
    return (
        <section className='hotel-page-section'>
            <div className="hotel-container">

                <div className="explore-room-section">
                    <div className="heading">
                        <h4>ROOMS</h4>
                        <h3>Quality Of <span>Rooms</span></h3>
                    </div>

                    <div className="main-container">
                        <div className="same-col">
                            <div className="img">
                                <img src={room1} alt="" />
                            </div>
                            <div className="content">
                                <div className="heading-star">
                                    <h4>Junior Suite</h4>
                                    <div className="star">
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </div>
                                </div>
                                <div className="services">
                                    <div className="service-same">
                                        <i class="ri-hotel-bed-fill"></i>
                                        <span>3bed</span>
                                    </div>
                                    <div className="service-same">
                                        <i class="ri-restaurant-line"></i>
                                        <span>2Food</span>
                                    </div>
                                    <div className="service-same">
                                        <i class="ri-wifi-fill"></i>
                                        <span>Wifi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="same-col">
                            <div className="img">
                                <img src={room2} alt="" />
                            </div>
                            <div className="content">
                                <div className="heading-star">
                                    <h4>Executive Suite</h4>
                                    <div className="star">
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </div>
                                </div>
                                <div className="services">
                                    <div className="service-same">
                                        <i class="ri-hotel-bed-fill"></i>
                                        <span>3bed</span>
                                    </div>
                                    <div className="service-same">
                                        <i class="ri-restaurant-line"></i>
                                        <span>2Food</span>
                                    </div>
                                    <div className="service-same">
                                        <i class="ri-wifi-fill"></i>
                                        <span>Wifi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="same-col">
                            <div className="img">
                                <img src={room3} alt="" />
                            </div>
                            <div className="content">
                                <div className="heading-star">
                                    <h4>Super Deluxe</h4>
                                    <div className="star">
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </div>
                                </div>
                                <div className="services">
                                    <div className="service-same">
                                        <i class="ri-hotel-bed-fill"></i>
                                        <span>3bed</span>
                                    </div>
                                    <div className="service-same">
                                        <i class="ri-restaurant-line"></i>
                                        <span>2Food</span>
                                    </div>
                                    <div className="service-same">
                                        <i class="ri-wifi-fill"></i>
                                        <span>Wifi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HotalHomePage
