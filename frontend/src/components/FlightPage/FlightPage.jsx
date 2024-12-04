import React, { useEffect } from 'react'
import './FlightPage.css'
import room1 from './room1.jpg'
import room2 from './room2.jpg'
import room3 from './room3.jpg'

import df from './domestic-flight.jpg'
import interf from './internation-flight.jpg'

function FlightPage() {
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    },[])
    return (
        <section className='hotel-page-section'>
            <div className="flight-bg">

            </div>
            <div className="hotel-container">
                <div className="hotal-detail">
                    <span>About Flight</span>
                    <p>Embark on a journey of boundless possibilities as you take flight with MR AND MRS PERFECT TRIP
                        Airlines! Our unparalleled flight services are meticulously crafted to elevate
                        your travel experience from the moment you step foot on the aircraft until
                        the wheels touch down at your destination. With a commitment to excellence
                        and a passion for hospitality, we ensure that every aspect of your journey is
                        seamless and stress-free, allowing you to fully immerse yourself in the
                        anticipation and excitement of your next adventure.</p>
                    <p>From the moment you book your ticket to the instant you step off the plane,
                        our dedicated team of professionals is here to cater to your every need,
                        ensuring that you arrive at your destination feeling refreshed, rejuvenated,
                        and ready to explore. Whether you're traveling for business or pleasure, our
                        top-notch amenities and world-class service guarantee a travel experience
                        like no other.</p>
                    <p>#TakeFlight #AdventureAwaits #TravelWithEase #MR AND MRS PERFECT TRIPAirlines ✈️�</p>
                </div>

                <div className="about-domestice-flight">
                    <div className="heading">
                        <span>Domestic Flight</span>
                    </div>
                    <div className="main-container">
                        <div className="left">
                            <img src={df} alt="" />
                        </div>
                        <div className="right">
                            <p>Domestic flights play a pivotal role in modern transportation, seamlessly connecting cities and regions within a country's borders. These flights offer convenience, speed, and accessibility, catering to both business and leisure travelers alike.</p>
                            <p>Domestic flights provide accessibility to regions that might be otherwise challenging to reach by ground transportation. They bridge geographical gaps, particularly in vast countries like the United States, China, or Australia, where driving between major cities can be time-consuming and impractical.</p>
                            <p>One of the primary advantages of domestic flights is their time efficiency. Traveling by air significantly reduces travel time compared to other modes of transportation. A journey that might take hours or even days by car or train can often be completed in a matter of minutes or hours by plane.</p>
                        </div>
                    </div>
                </div>

                <div className="about-domestice-flight about-internation-flight">
                    <div className="heading">
                        <span>Internation Flight</span>
                    </div>
                    <div className="main-container">
                        <div className="left">
                            <p>International flights are the lifelines of global connectivity, serving as vital conduits for travel, trade, and cultural exchange between nations.</p>
                            <p>International flights connect countries and continents, shrinking the world and making it more accessible than ever before. These flights facilitate business transactions, diplomatic missions, family reunions, academic exchanges, and tourism on a global scale.</p>
                            <p>International flights play a crucial role in promoting cultural exchange by enabling people from diverse backgrounds to interact, share experiences, and appreciate different customs, languages, and traditions. They contribute to a more interconnected and understanding world.</p>
                            <p>International flights are crucial during times of crisis or humanitarian emergencies, allowing governments , humanitarian organizations, and aid agencies to respond swiftly and effectively to natural disasters, conflicts, and other emergencies by transporting relief supplies, medical personnel, and evacuees to affected areas.</p>
                        </div>
                        <div className="right">
                            <img src={interf} alt="" />

                        </div>
                    </div>
                </div>


                <div className="explore-room-section">
                    <div className="heading">
                        <h4>Flight Classes</h4>
                        <h3>Types Of <span>Flights</span></h3>
                    </div>

                    <div className="main-container">
                        <div className="same-col">
                            <div className="img">
                                <img src={room1} alt="" />
                            </div>
                            <div className="content">
                                <div className="heading-star">
                                    <h4>First Class</h4>
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
                                        <i class="fa-solid fa-martini-glass"></i>
                                        <span>drink</span>
                                    </div>
                                    <div className="service-same">
                                        <i class="ri-restaurant-line"></i>
                                        <span>Food</span>
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
                                    <h4>Business Class</h4>
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
                                        <i class="fa-solid fa-martini-glass"></i>
                                        <span>drink</span>
                                    </div>
                                    <div className="service-same">
                                        <i class="ri-restaurant-line"></i>
                                        <span>Food</span>
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
                                    <h4>Economy Class</h4>
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
                                        <i class="fa-solid fa-martini-glass"></i>
                                        <span>drink</span>
                                    </div>
                                    <div className="service-same">
                                        <i class="ri-restaurant-line"></i>
                                        <span>Food</span>
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

                {/* <div className="hotel-service-container">
                    <div className="heading">
                        <h4>OUR SERVICES</h4>
                        <h3>Explore Our <span>SERVICES</span></h3>
                    </div>
                    <div className="main-container">
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-tv"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Entertainment</h2>
                            </div>
                            <p>Passengers are looking for expanded in-flight entertainment option.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="ri-restaurant-line"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Meals</h2>
                            </div>
                            <p>Many airlines have reduced or eliminated food services</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-wifi"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Wi-Fi</h2>
                            </div>
                            <p>Highest on many passengers’ wish list is reliable, uninterrupted Wi-Fi service.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="ri-armchair-fill"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Comfort</h2>
                            </div>
                            <p>Seat comfort rarely seems to improve on planes.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-broom"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Cleanliness</h2>
                            </div>
                            <p>While airlines have cut expenses every way possible</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-dumbbell"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Efficiency</h2>
                            </div>
                            <p>Travellers want service efficiency in every aspect of their air travel.</p>
                        </div>
                    </div>
                </div> */}
            </div>


        </section>
    )
}

export default FlightPage
