import React, { useEffect } from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
  return (
    <div className="terms-container">
      <h1 className="terms-header">Terms and Conditions</h1>
      <p className="terms-intro">
        Welcome to <strong>MR AND MRS PERFECT TRIP</strong>. By using our
        services, you agree to comply with and be bound by the following terms
        and conditions. Please read them carefully.
      </p>
      <section className="terms-section">
        <h2 className="terms-subheader">1. Booking and Payment</h2>
        <ul className="terms-list">
          <li>
            All bookings are subject to availability and confirmation from our
            team.
          </li>
          <li>
            Payments must be made in full before the confirmation of your
            booking.
          </li>
          <li>
            Any additional charges (e.g., taxes, fees) will be communicated in
            advance.
          </li>
        </ul>
      </section>
      <section className="terms-section">
        <h2 className="terms-subheader">2. Cancellation and Refund</h2>
        <ul className="terms-list">
          <li>
            Cancellation requests must be submitted in writing to our official
            email: mrandmrsperfecttrips@gmail.com.
          </li>
          <li>
            Refunds will be processed according to our refund policy, which may
            vary depending on the package booked.
          </li>
          <li>
            We are not liable for refunds on cancellations made due to natural
            disasters, political unrest, or other unforeseen circumstances.
          </li>
        </ul>
      </section>
      <section className="terms-section">
        <h2 className="terms-subheader">3. Responsibilities and Liabilities</h2>
        <ul className="terms-list">
          <li>
            We act as intermediaries between clients and service providers
            (hotels, transport, etc.). We are not responsible for any loss or
            damage caused by third parties.
          </li>
          <li>
            Clients are responsible for providing accurate personal information
            for booking purposes.
          </li>
          <li>
            Travel insurance is recommended for all travelers to cover
            unforeseen events.
          </li>
        </ul>
      </section>
      <section className="terms-section">
        <h2 className="terms-subheader">4. Use of Our Website</h2>
        <ul className="terms-list">
          <li>
            The content on our website is for informational purposes only.
          </li>
          <li>
            Unauthorized use of the website may result in claims for damages or
            legal consequences.
          </li>
          <li>
            Links to third-party websites are provided for convenience, and we
            do not endorse their content.
          </li>
        </ul>
      </section>
      <section className="terms-section">
        <h2 className="terms-subheader">5. Contact Us</h2>
        <p>
          For any queries or concerns regarding these terms, please contact us
          at:
        </p>
        <ul className="terms-contact">
          <li>
            <strong>Address:</strong> Shop No. TC-415, Fourth Floor, R-Tech
            Capital Mall
          </li>
          <li>
            <strong>Email:</strong> mrandmrsperfecttrips@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> 9699862917
          </li>
        </ul>
      </section>
      <footer className="terms-footer">
        &copy; {new Date().getFullYear()} MR AND MRS PERFECT TRIP. All Rights
        Reserved.
      </footer>
    </div>
  );
};

export default TermsAndConditions;
