import React, { useState } from "react";
import "./Banner.css"; // Import custom styles

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false); // Popup visibility state

  return (
    <div className="container">
      <div className="cta-section">
        <h3>Want A High-Paying Career in Digital Marketing?</h3>
        <button className="abcd" onClick={() => setIsOpen(true)}>
          Get Started!
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <h2>Sign Up for Our Digital Marketing Course</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
