import React, { useEffect } from 'react'
import './FlightPage.css'
import room1 from './room1.jpg'
import room2 from './room2.jpg'
import room3 from './room3.jpg'

import df from './domestic-flight.jpg'
import interf from './internation-flight.jpg'
import MostPopularTour from '../MostPopularTour/MostPopularTour'

function FlightPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <section className='hotel-page-section'>
            <div className="flight-bg">

            </div>
            <div className="hotel-container">
                <div className="hotal-detail">
                    <span>About Package</span>
                    <p>
                        Embark on a journey of boundless possibilities as you explore with MR AND MRS PERFECT TRIP Packages! Our exceptional travel packages are meticulously designed to offer a unique blend of adventure, comfort, and value. Whether you dream of relaxing on pristine beaches, exploring vibrant cities, or seeking the thrill of nature's wonders, we have a package tailored just for you.
                    </p>
                    <p>
                        Our packages include carefully curated itineraries, premium accommodations, and hassle-free transportation, ensuring you focus solely on creating memories. From exploring historical landmarks to indulging in local cuisines, our offerings are designed to make every moment unforgettable.
                    </p>
                    <p>
                        Our dedicated travel experts are available to assist you at every step, whether it's choosing the perfect package or customizing your itinerary to meet your specific preferences. We take pride in our ability to transform your travel aspirations into reality with our seamless booking process and exceptional customer support.
                    </p>
                    <p>
                        From romantic getaways to family vacations or solo adventures, our packages cater to all types of travelers. Enjoy exclusive benefits such as discounted rates, complimentary services, and insider tips on must-visit destinations to make your journey even more special.
                    </p>
                    <p>
                        #TravelWithEase #AdventureAwaits #ExploreWithMRANDMRSPERFECTTRIP ✈️ Start your journey today and let us redefine the way you travel!
                    </p>
                </div>



                <div className="about-domestice-flight">
                    <div className="heading">
                        <span>Domestic Package</span>
                    </div>
                    <div className="main-container">
                        <div className="left">
                            <img src={df} alt="" />
                        </div>
                        <div className="right">
                            <p>Domestic travel packages play a pivotal role in modern tourism, seamlessly connecting travelers to cities and regions within a country's borders. These packages offer convenience, curated experiences, and accessibility, catering to both leisure and business travelers alike.</p>
                            <p>Domestic packages provide access to hidden gems and regions that might otherwise be challenging to explore independently. They bridge geographical gaps and open doors to unique cultural, historical, and natural attractions within the country.</p>
                            <p>One of the primary advantages of domestic packages is their time efficiency and stress-free planning. With all logistics, accommodations, and activities pre-arranged, travelers can focus on enjoying their journey without the hassle of organizing details. Whether it’s a weekend getaway or a longer vacation, domestic packages ensure memorable and seamless experiences.</p>
                        </div>
                    </div>
                </div>

                <div className="about-domestice-flight about-internation-flight">
                    <div className="heading">
                        <span>Internation Package</span>
                    </div>
                    <div className="main-container">
                        <div className="left">
                            <p>International travel packages are the lifelines of global exploration, serving as vital conduits for tourism, cultural exchange, and memorable experiences between nations.</p>
                            <p>International packages connect countries and continents, shrinking the world and making it more accessible than ever before. These packages facilitate stress-free tourism, well-planned itineraries, and unique adventures for individuals, families, and groups.</p>
                            <p>International packages play a crucial role in promoting cultural exchange by enabling travelers to interact, share experiences, and appreciate diverse customs, languages, and traditions. They contribute to a more interconnected and understanding world through carefully curated experiences.</p>
                            <p>International travel packages are especially valuable during times of special occasions, such as destination weddings, educational tours, and leisure holidays. They ensure seamless logistics, providing travelers with the best accommodations, guided tours, and immersive activities for a stress-free and enriching journey.</p>
                        </div>
                        <div className="right">
                            <img src={interf} alt="" />
                        </div>
                    </div>

                </div>


                <div className="explore-room-section">
                    <div className="heading">
                        <h4>Flight Classes</h4>
                        <h3>Types Of <span>Flights Domestic Package</span> & <span>Internation Package</span></h3>
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

            </div>
            {/* <div>
                <MostPopularTour />
            </div> */}

        </section>
    )
}

export default FlightPage
