import React, { useEffect } from "react";
import "./HotelPage.css";
import room1 from "./room1.jpg";
import room2 from "./room2.jpg";
import room3 from "./room3.jpg";
import interf from "./internation-hotel.jpg";
import dh from "./domestice-hotel.jpg";

function HotelPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="hotel-page-section">
      <div className="hotel-bg"></div>
      <div className="hotel-container">
        <div className="hotal-detail">
          <span>About Hotel</span>
          <p>
            Experience a world of luxury and comfort with MR AND MRS PERFECT TRIP Hotels! Our
            exceptional hotel booking services are designed to enhance your
            travel experience from check-in to check-out. With a keen eye for
            detail and a dedication to excellence, we ensure that every aspect
            of your stay is meticulously planned and flawlessly executed,
            allowing you to focus on making memories that last a lifetime.
          </p>
          <p>
            From boutique resorts to five-star hotels, we offer a diverse range
            of accommodations to suit every preference and budget. Our team of
            experienced professionals is committed to providing personalized
            service and unparalleled hospitality, ensuring that your stay is
            nothing short of extraordinary
          </p>
          <p>
            Whether you're traveling for business or leisure, our comprehensive
            hotel booking services guarantee a seamless and stress-free
            experience, allowing you to relax and unwind in style. So why wait?
            Let MR AND MRS PERFECT TRIP Hotels be your trusted partner in travel and embark on a
            journey of unforgettable experiences today.
          </p>
          <p>
            #LuxuryStay #ExceptionalService #TravelInStyle #MR AND MRS PERFECT TRIPHotels 🏨✨
          </p>
        </div>

        <div className="about-domestice-flight">
          <div className="heading">
            <span>Domestic Hotel</span>
          </div>
          <div className="main-container">
            <div className="left">
              <img src={dh} alt="" />
            </div>
            <div className="right">
              <p>
                Domestic hotels are the cornerstone of the hospitality industry
                within a country, providing accommodations and services to
                travelers from all walks of life. Whether for business or
                leisure, domestic hotels offer a wide range of options to suit
                diverse preferences and budgets.
              </p>
              <p>
                Domestic hotels provide a home away from home for travelers,
                offering comfortable rooms equipped with essential amenities
                such as beds, bathrooms, and often additional conveniences like
                Wi-Fi, television, and room service. Whether it's a luxury
                suite, a cozy boutique hotel, or a budget-friendly motel,
                domestic hotels cater to various accommodation needs.
              </p>
              <p>
                Domestic hotels are strategically located in key destinations
                such as city centers, tourist attractions, airports, and
                business districts, providing convenience and accessibility to
                travelers. Their proximity to transportation hubs and points of
                interest makes them an ideal choice for both business travelers
                with tight schedules and leisure travelers seeking exploration.
              </p>
            </div>
          </div>
        </div>

        <div className="about-domestice-flight about-internation-flight">
          <div className="heading">
            <span>Internation Hotel</span>
          </div>
          <div className="main-container">
            <div className="left">
              <p>
                International hotels are the epitome of global hospitality,
                offering a diverse array of accommodations and services to
                travelers from around the world. These hotels cater to a broad
                spectrum of guests, from business executives and diplomats to
                tourists and adventurers, providing a seamless blend of luxury,
                comfort, and cultural immersion.
              </p>
              <p>
                International hotels are renowned for their luxurious
                accommodations, featuring opulent suites, spacious rooms, and
                premium amenities designed to pamper and delight guests. From
                plush bedding and designer furnishings to state-of-the-art
                technology and breathtaking views, these hotels offer an
                unparalleled level of comfort and sophistication.
              </p>
              <p>
                International hotels are equipped with state-of-the-art meeting
                and event facilities, making them ideal venues for conferences,
                conventions, and social gatherings. With flexible event spaces,
                cutting-edge technology, and expert event planning services,
                these hotels ensure the success of any corporate or social
                event.
              </p>
              <p>
                Many international hotels are committed to sustainability and
                responsible tourism practices, implementing eco-friendly
                initiatives such as energy conservation, waste reduction, and
                community engagement to minimize their environmental footprint
                and support local communities.
              </p>
            </div>
            <div className="right">
              <img src={interf} alt="" />
            </div>
          </div>
        </div>

        <div className="explore-room-section">
          <div className="heading">
            <h4>ROOMS</h4>
            <h3>
              Quality Of<span> Rooms</span>
            </h3>
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
        <h1 style={{fontSize:'20px', fontWeight:'600', textAlign:'center'}}>
            Get More Information About Rooms Kindly Contact Us.
        </h1>

        {/* <div className="hotel-service-container">
                    <div className="heading">
                        <h4>OUR SERVICES</h4>
                        <h3>Types Of <span>SERVICES</span></h3>
                    </div>
                    <div className="main-container">
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="ri-hotel-fill"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Room & Appartment</h2>
                            </div>
                            <p>Discover cozy rooms and spacious apartments for your travels with MR AND MRS PERFECT TRIP's convenient booking.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="ri-restaurant-line"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Food & Restaurant</h2>
                            </div>
                            <p>Explore culinary delights and dining experiences with MR AND MRS PERFECT TRIP's curated selection of food and restaurants.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-spa"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Spa & Fitness</h2>
                            </div>
                            <p>Relax and rejuvenate with MR AND MRS PERFECT TRIP's spa and fitness offerings for a balanced travel experience.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-person-swimming"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Sports & Gaming</h2>
                            </div>
                            <p>Enjoy sports excitement and gaming thrills with MR AND MRS PERFECT TRIP's array of leisure activities for travelers.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-martini-glass"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Event & Party</h2>
                            </div>
                            <p>Elevate your events and celebrations with MR AND MRS PERFECT TRIP's curated selection of venues and party services.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-dumbbell"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Gym & Yoga</h2>
                            </div>
                            <p>Stay fit and centered while traveling with MR AND MRS PERFECT TRIP's gym and yoga facilities tailored for relaxation.</p>
                        </div>
                    </div>
                </div> */}
      </div>
    </section>
  );
}

export default HotelPage;
