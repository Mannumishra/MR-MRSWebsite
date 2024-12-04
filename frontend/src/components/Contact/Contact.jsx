import React, { useEffect, useState } from 'react'
import './Contact.css'
import contactBG from './contact-bg.jpg'
import toast from 'react-hot-toast'
import axios from 'axios'

function Contact() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  })

  const getInputData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post("http://localhost:8000/api/contact", data)
      if (res.status === 200) {
        toast.success(res.data.message)
        setData({
          name: '',
          email: '',
          phoneNumber: '',
          message: ''
        })
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <section className='contact-section'>
      <div className="container">
        <div className="contact-main-container">
          <div className="heading">
            <span>Get in Touch</span>
          </div>
          <div className="main-container">
            <div className="up">
              <div className="left">
                <img src={contactBG} alt="" />
              </div>
              <form action="" onSubmit={postData}>
                <div className="name same-field">
                  <input type="text" placeholder='Name' name='name' value={data.name} required onChange={getInputData} />
                </div>
                <div className="name same-field">
                  <input type="email" placeholder='Email' name='email' value={data.email} required onChange={getInputData} />
                </div>
                <div className="name same-field">
                  <input type="text" placeholder='Phone No.' name='phoneNumber' value={data.phoneNumber} required onChange={getInputData} />
                </div>
                <div className="textarea same-field">
                  <textarea placeholder='Message' name='message' value={data.message} required onChange={getInputData}></textarea>
                </div>
                <button className='contact-btn' type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="map-parent">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.292579738025!2d77.28693528631932!3d28.64036131879738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd82b490f80d%3A0xb8e60d7f396dc467!2sCO-OFFIZ%20Coworking%20Space%20in%20Preet%20Vihar!5e0!3m2!1sen!2sin!4v1713185824532!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>
    </section>
  )
}

export default Contact
