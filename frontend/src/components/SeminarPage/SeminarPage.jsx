import React, { useEffect } from 'react'
import './SeminarPage.css'

function SeminarPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <section className='hotel-page-section'>
            <div className="seminar-bg">

            </div>
            <div className="hotel-container">
                <div className="hotal-detail domestic">
                    <span>CONFERENCE AND SEMINARS</span>
                    <p>Elevate your events to new heights with MR AND MRS PERFECT TRIP's professional conference
                        and seminar services! Whether you're planning a corporate conference,
                        industry seminar, or academic symposium, we are here to make your event a
                        resounding success.</p>
                    <p>Our dedicated team of event specialists is committed to delivering seamless
                        logistics and top-notch facilities, ensuring that every aspect of your event is
                        executed flawlessly. From venue selection and catering to audiovisual
                        equipment and attendee registration, we handle every detail with precision
                        and professionalism.</p>
                    <p>With MR AND MRS PERFECT TRIP by your side, you can focus on what matters most – delivering an
                        impactful experience to your attendees. Whether you're aiming to educate,
                        inspire, or network, we'll work tirelessly to create an environment that fosters
                        collaboration, innovation, and engagement</p>
                    <p>Let us help you transform your vision into reality and make your next event
                        truly unforgettable. Together, let's create moments that leave a lasting
                        impression.</p>
                    <p>#ConferenceServices #EventPlanning #MR AND MRS PERFECT TRIPEvents 🌟🎤�</p>
                </div>
            </div>
        </section>
    )
}

export default SeminarPage
