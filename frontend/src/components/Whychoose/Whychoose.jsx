import React from 'react'
import './Whychoose.css'

const Whychoose = () => {
    const data = [
        {
            id:1,
            // icons:'ri-calendar-todo-line',
            
            icons:'ri-plane-line',
            head:'FLIGHT BOOKINGS',
            para:'As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on money.'
        },
        {
            id:2,
            
            icons:'ri-hotel-fill',
            head:'HOTEL BOOKINGS',
            para:'Flying should be a pleasure and we’ll make your charter experience as luxurious and more comfortable as soon as possible.'
        },
        {
            id:3,
            
            icons:'ri-graduation-cap-line',
            head:'DOMESTIC TOUR',
            para:'The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately since 1940s'
            
        },
        {
            id:4,
            
            icons:'ri-calendar-schedule-line',
            head:'SEMINAR & CONFERENCE',
            para:'Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats all over the world.'
        },
        {
            id:5,
            icons:'ri-graduation-cap-line',
            head:'EDUCATIONAL TOUR',
            para:'Search the world with ease and transparency.As the only tech-forward private aviation company, XO is able to bring you'
        },
        {
            id:6,
            icons:'ri-glasses-fill',
            head:'INTERNATIONAL TOUR',
            para:'Charter an entire jet, or offer the seats you don’t need through our app a need for full or even fractional jet ownership'
        },
    ]
  return (
    <section className='whychoose-section'>
        <div className="container">
            <div className="heading">
                <h2>Our Tour Package</h2>
            </div>
            <div className="main-container">
                {
                    data && data.map((item,index)=>(
                        <div className="col" key={index}>
                            <span><i className={`${item.icons}`}></i></span>
                            <h3>{item.head}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Whychoose