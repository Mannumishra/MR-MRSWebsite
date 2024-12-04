import React, { useEffect } from 'react'
import './WhyChooseUsPage.css'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'
import img7 from './7.png'

function WhyChooseUsPage() {
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    },[])

    const data = [
        {
            id : 1,
            Image : img1,
            heading : 'TRANSPARENT PRICING AND FEES',
            subheading : "Clear pricing, no surprises. Know exactly what you're paying for and the value you'll receive",
        },
        {
            id : 2,
            Image : img2,
            heading : '24/7 TRAVEL ASSISTANCE',
            subheading : "Speak directly with a top-level travel expert. No long hold times or call centers",
        },
        {
            id : 3,
            Image : img3,
            heading : 'PERSONAL CARE AND SERVICE',
            subheading : "Count on our friendly, experienced team for a memorable, hasslefree vacation. We aim to maximize your trip's value so you'll keep coming back to us.",
        },
        {
            id : 4,
            Image : img4,
            heading : 'SAVE TIME AND EFFORT',
            subheading : "Let us handle your holiday and flight planning stress! Our experienced staff will find the best flights and plan your itinerary. Just pay, pack, and go!",
        },
        {
            id : 5,
            Image : img5,
            heading : 'CLIENT SATISFACTION',
            subheading : "Our diverse team of travel enthusiasts is here to provide expert guidance and maximize your vacation value.",
        },
        {
            id : 6,
            Image : img6,
            heading : 'QUALITY AND SERVICES',
            subheading : "Quality and service are our top priorities. We strive to exceed your expectations every step of the way.",
        },
        {
            id : 7,
            Image : img7,
            heading : 'TRUST',
            subheading : "We're a licensed travel agency registered with the Ministry of Tourism and Culture Malaysia, ensuring accountability and high standards. Your travel deposits are held in trust for added security.",
        },
       
    ]

  return (
    <section className='whyChooseUsPage-section'>
      <div className="whychooseus-container">
        <div className="heading">
            <span>WHY BOOK TOUR PACKAGES WITH US</span>
        </div>
        <div className="main-container">
            {
                data && data.map((item,index)=>(
                    <div className="col" key={index}>
                        <div className="img">
                            <div className="innerimg">
                            <img src={item.Image} alt="" />
                            </div>
                        </div>
                        <div className="content">
                            <h2>{item.heading}</h2>
                            <p>{item.subheading}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsPage
