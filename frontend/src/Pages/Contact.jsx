import React, { useState } from "react";
import '../Styles/Contact.module.css';
import Navbar from '../components/Navbar'

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "2820c1e9-5d26-4a05-9c1b-1d83f20a9e5b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        handleError(data);
      }
    } catch (error) {
      handleError({ message: "Submission failed. Please try again later." });
    }
  };

  const handleError = (data) => {
    console.error("Error:", data);
    setResult(data.message || "An error occurred");
  };

  return (
    <div className="contact">
      <Navbar/>
    <div>
      <ContactForm onSubmit={handleSubmit} />
      <span>{result}</span>
    </div>
    </div>
  );
};

const ContactForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Submit Form</button>
  </form>
);

export default Contact;
