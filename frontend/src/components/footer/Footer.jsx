import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
          <div className="same-col col-1">
            <div className="heading">
              <span>Quick Links</span>
            </div>
            <ul className='footerlistsame'>
              <li><Link>Home</Link></li>
              <li><Link>About-Us</Link></li>
              <li><Link to={'/testimonial'}>Testimonial</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
          </div>
          <div className="same-col col-2">
            <div className="heading">
              <span>Our Services</span>
            </div>
            <ul className='footerlistsame'>
              {/* <li><Link to={'/flight'}>Flight</Link></li> */}
              <li><Link to={'/hotel'}>Hotel</Link></li>
              <li><Link to={'/domestic'}>DOMESTIC TOUR PACKAGES</Link></li>
              <li><Link to={'/internation'}>INTERNATIONAL TOUR PACKAGES</Link></li>
              <li><Link to={'/education'}>EDUCATIONAL TOUR PACKAGES</Link></li>
              <li><Link to={'/seminar'}>CONFERENCE AND SEMINARS</Link></li>
            </ul>
          </div>
          <div className="same-col col-3">
            <div className="heading">
              <span>Get In Touch</span>
            </div>
            <div className="adress-box footerlistsame">
              <div className="location adress-same">
                <i class="ri-map-pin-range-line"></i>
                <p>2nd Floor, Building -6, Park End, Vikas Marg, opposite Reliance Trends, Preet Vihar, Delhi, 110092</p>
              </div>
              <div className="number adress-same">
              <i class="ri-phone-fill"></i>
                <a href='tel:+91 8700865337'>8700865337</a>
              </div>
              {/* <div className="number adress-same">
              <i class="ri-phone-fill"></i>
                <a href='tel:+91 9926288424'>9926288424</a>
              </div> */}
              <div className="mail adress-same">
              <i class="ri-mail-fill"></i>
                <a href='mailto:  info@tripjar.in'> info@tripjar.in</a>
              </div>
              {/* <div className="mail-2 adress-same">
              <i class="ri-mail-fill"></i>
                <a href="mailto:sales@greenwaysinfra.com">sales@greenwaysinfra.com</a>
              </div> */}
            </div>
          </div>
          <div className="same-col col-4">
            <div className="heading">
              <span>Follow On</span>
            </div>
            <div className="social-link">
              <Link target='_blank' to={''}><i class="ri-facebook-box-fill"></i></Link>
              <Link target='_blank' to={'https://twitter.com/tripjarpvtltd'}><i class="ri-twitter-fill"></i></Link>
              <Link target='_blank' to={''}><i class="ri-linkedin-box-fill"></i></Link>
              <Link target='_blank' to={'https://www.instagram.com/tripjar21/'}><i class="ri-instagram-line"></i></Link>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <p>© 2024 Greenway Infra. All Right Reseverd.</p>
          <p>Designed By <a target='_blank' href="https://digiindiasolutions.com/">Digi India Solution</a></p>
        </div>
      </footer>
  )
}

export default Footer