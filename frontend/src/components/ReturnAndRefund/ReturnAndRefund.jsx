import React, { useEffect } from "react";
import "./ReturnAndRefund.css";

const ReturnAndRefund = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
  return (
    <div className="refund-container">
      <h1 className="refund-header">Return and Refund Policy</h1>
      <p className="refund-intro">
        At <strong>MR AND MRS PERFECT TRIP</strong>, we aim to provide the best
        travel and tour services to our customers. Please read the following
        policy carefully:
      </p>
      <section className="refund-section">
        <h2 className="refund-subheader">No Return or Refund Policy</h2>
        <p>
          We regret to inform you that <strong>MR AND MRS PERFECT TRIP</strong>{" "}
          does not offer any return or refund on the services or travel packages
          purchased. This policy is applicable to all transactions made through
          our company, including:
        </p>
        <ul className="refund-list">
          <li>Domestic and international travel packages.</li>
          <li>Hotel bookings, transportation, or other associated services.</li>
          <li>Special deals, offers, or promotional packages.</li>
        </ul>
      </section>
      <section className="refund-section">
        <h2 className="refund-subheader">Why We Do Not Offer Returns or Refunds</h2>
        <p>
          As our services involve customized travel plans and third-party
          service providers, it becomes challenging to process returns or
          refunds. Factors include:
        </p>
        <ul className="refund-list">
          <li>
            Immediate confirmation and commitment to third-party providers upon
            booking.
          </li>
          <li>Strict cancellation policies imposed by third-party vendors.</li>
          <li>
            Time-sensitive nature of the travel and tourism industry.
          </li>
        </ul>
      </section>
      <section className="refund-section">
        <h2 className="refund-subheader">Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this policy, feel free
          to reach out to us at:
        </p>
        <ul className="refund-contact">
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
      <footer className="refund-footer">
        &copy; {new Date().getFullYear()} MR AND MRS PERFECT TRIP. All Rights
        Reserved.
      </footer>
    </div>
  );
};

export default ReturnAndRefund;
