import React, { useEffect, useState } from 'react'
import './DomesticTour.css'
import axios from 'axios'

function DomesticTour() {
    const [data, setData] = useState([])
    const getcityData = async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/city")
            console.log(res)
            const newData = res.data.data
            const filterdata = newData.filter((x) => x.domesinternal == "DOMESTIC TOUR")
            setData(filterdata)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getcityData()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <section className='hotel-page-section'>
            <div className="domestic-bg">

            </div>
            <div className="hotel-container">
                <div className="hotal-detail domestic">
                    <span>DOMESTIC TOUR PACKAGES</span>
                    <p>Embark on an unforgettable journey through your own country with MR AND MRS PERFECT TRIP's
                        meticulously curated domestic packages! Our team of travel enthusiasts has
                        scoured every corner of the nation to bring you the most immersive and
                        memorable experiences. Discover hidden gems off the beaten path, immerse
                        yourself in the rich tapestry of local culture, and create lasting memories that
                        will stay with you long after you return home. From the majestic peaks of the
                        mountains to the sun-kissed shores of our pristine beaches, and everything
                        in between, our diverse range of destinations promises something special for
                        every type of traveler.</p>
                    <p>With expertly crafted itineraries tailored to your preferences and the
                        guidance of our dedicated travel experts, your journey with MR AND MRS PERFECT TRIP will be
                        nothing short of extraordinary. So pack your bags, grab your camera, and let
                        the adventure begin! 🌄🏝�</p>
                    <p>#DomesticTravel #ExploreYourCountry #MR AND MRS PERFECT TRIPAdventures</p>
                </div>

                <div className="domestic-service-row">
                    {
                        data.map((item,index) =>
                            <div className="col">
                                <div className="img">
                                    <img src={item.cityimage} alt="" />
                                </div>
                                <div className="info">
                                    <span className='uppercase'>{item.cityname}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </section>
    )
}

export default DomesticTour
