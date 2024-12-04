import React, { useEffect } from 'react'
import './EducationTour.css'

function EducationTour() {
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    },[])
    return (
        <section className='hotel-page-section'>
            <div className="education-bg">

            </div>
            <div className="hotel-container">
                <div className="hotal-detail domestic">
                    <span>EDUCATIONAL TOUR PACKAGES</span>
                    <p>Embark on enriching educational journeys with MR AND MRS PERFECT TRIP's meticulously
                        curated tours! Our educational tours are designed to spark curiosity, inspire
                        lifelong learning, and create unforgettable experiences. Immerse yourself in
                        history, culture, and natural wonders as our expert guides lead you on a
                        journey of discovery</p>
                    <p>From exploring ancient civilizations to studying biodiversity in pristine
                        ecosystems, our immersive experiences offer a unique blend of adventure
                        and education. Whether you're delving into the mysteries of Machu Picchu or
                        studying marine life in the Galapagos Islands, our tours are tailored to ignite
                        your passion for exploration and learning.
                    </p>
                    <p>With a focus on experiential learning and hands-on activities, our educational
                        tours provide opportunities for personal growth and development. Let us
                        take you on a transformative journey where every moment is an opportunity
                        to expand your horizons and deepen your understanding of the world.
                    </p>
                    <p>Join us as we explore the wonders of our planet and inspire a love for learning
                        that lasts a lifetime. Let the adventure begin!
                    </p>
                    <p>#EducationalTours #DiscoverAndLearn #MR AND MRS PERFECT TRIPAdventures 📚🌍�</p>
                </div>
            </div>
        </section>
    )
}

export default EducationTour
