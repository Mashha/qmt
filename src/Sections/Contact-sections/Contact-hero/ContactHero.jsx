import React, { useState } from "react";
import "./contact-hero.css";
import { IconMinus } from "@tabler/icons-react";

function ContactHero() {
  const [copied, setCopied] = useState(false);
  const email = "example@email.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div className='contact section'>
      <div className='section-button-text-component'>
        <div className='section-page-marked'>
          <span>Home</span>
          <IconMinus />
          <span>Contact</span>
        </div>
        <h1>
          We're <span className='blue'>redefining</span> the future of critical
          care
        </h1>

        <div className='copy-email-container'>
          <button onClick={copyToClipboard}>{email}</button>
          {copied && <div className='popup'>Email Copied!</div>}
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
