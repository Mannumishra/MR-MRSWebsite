import React, { useEffect } from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
    return (
        <div className="privacy-container">
            <h1 className="privacy-header">Privacy and Policy</h1>
            <p className="privacy-intro">
                Welcome to <strong>MR AND MRS PERFECT TRIP</strong>. This Privacy Policy
                outlines how we collect, use, and safeguard your information while
                providing our travel and tour services.
            </p>
            <section className="privacy-section">
                <h2 className="privacy-subheader">Information We Collect</h2>
                <p>
                    We may collect the following information to serve you better:
                </p>
                <ul className="privacy-list">
                    <li>Personal details like name, email, and contact number.</li>
                    <li>
                        Travel preferences, package details, and feedback to enhance our
                        offerings.
                    </li>
                    <li>Payment and billing information (if required).</li>
                </ul>
            </section>
            <section className="privacy-section">
                <h2 className="privacy-subheader">How We Use Your Information</h2>
                <p>We use the information collected for purposes such as:</p>
                <ul className="privacy-list">
                    <li>Processing your bookings and providing tour packages.</li>
                    <li>Improving our services based on your feedback.</li>
                    <li>
                        Sending updates, promotions, and important notifications about your
                        trips.
                    </li>
                </ul>
            </section>
            <section className="privacy-section">
                <h2 className="privacy-subheader">Sharing of Information</h2>
                <p>
                    We value your privacy and will never sell or share your information
                    with third parties, except:
                </p>
                <ul className="privacy-list">
                    <li>When required by law or legal proceedings.</li>
                    <li>
                        With trusted partners who assist us in providing services (e.g.,
                        booking accommodations, transport).
                    </li>
                </ul>
            </section>
            <section className="privacy-section">
                <h2 className="privacy-subheader">Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy, feel
                    free to contact us:
                </p>
                <ul className="privacy-contact">
                    <li>
                        <strong>Address:</strong> Shop No. TC-415, Fourth Floor, R-Tech
                        Capital Mall
                    </li>
                    <li>
                        <strong>Email:</strong> mrandmrsperfecttrips@gmail.com
                    </li>
                    <li>
                        <strong>Phone:</strong> 9157575749, 8949655261
                    </li>
                </ul>
            </section>
            <footer className="privacy-footer">
                &copy; {new Date().getFullYear()} MR AND MRS PERFECT TRIP. All Rights
                Reserved.
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
