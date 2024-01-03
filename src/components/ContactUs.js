import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contactUsContainer">
      <div className="contactUsContent">
        <h1 className="contact">Contact Us</h1>
        <p className="chotuContent">If you have any questions or concerns, feel free to reach out to us.</p>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
