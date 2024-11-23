import React, { useEffect } from "react";
import "./termsOfUse.css";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='terms-of-use'>
      <h1>Terms of Use</h1>

      <p>
        Welcome to <strong>[Your Company Name]</strong>’s website (the
        “Website”). By accessing or using this Website, you agree to be bound by
        these Terms of Use. If you do not agree to these terms, please do not
        use the Website.
      </p>

      <h2>1. Ownership and Intellectual Property</h2>
      <p>
        All content on this Website, including but not limited to text, images,
        graphics, and design, is owned or licensed by{" "}
        <strong>[Your Company Name]</strong> and is protected under Swiss
        copyright law. You may not reproduce, distribute, modify, or use any
        content without prior written permission from{" "}
        <strong>[Your Company Name]</strong>.
      </p>

      <h2>2. Permitted Use</h2>
      <p>
        You agree to use this Website solely for lawful purposes. You are
        prohibited from:
      </p>
      <ul>
        <li>
          Attempting to gain unauthorized access to the Website or its servers.
        </li>
        <li>Using the Website to distribute harmful or malicious software.</li>
        <li>
          Engaging in any activity that may disrupt the functionality of the
          Website.
        </li>
      </ul>

      <h2>3. Disclaimer of Liability</h2>
      <p>
        The content on this Website is provided for informational purposes only.
        <strong> [Your Company Name]</strong> makes no guarantees regarding the
        accuracy, completeness, or reliability of the content. Use of the
        Website is at your own risk.
      </p>
      <p>
        To the fullest extent permitted by Swiss law,{" "}
        <strong>[Your Company Name]</strong> is not liable for:
      </p>
      <ul>
        <li>
          Any direct, indirect, or consequential damages arising from the use or
          inability to use the Website.
        </li>
        <li>
          Losses resulting from technical issues, interruptions, or errors.
        </li>
      </ul>

      <h2>4. Links to Third-Party Websites</h2>
      <p>
        This Website may contain links to third-party websites.{" "}
        <strong>[Your Company Name]</strong> is not responsible for the content
        or practices of these external sites and does not endorse them.
        Accessing such websites is at your own risk.
      </p>

      <h2>5. Changes to the Website</h2>
      <p>
        <strong>[Your Company Name]</strong> reserves the right to modify,
        suspend, or discontinue any part of the Website at any time without
        prior notice. We are not liable for any consequences resulting from
        these changes.
      </p>

      <h2>6. Amendments to the Terms of Use</h2>
      <p>
        <strong>[Your Company Name]</strong> may revise these Terms of Use at
        any time. Updated terms will be posted on this page, and continued use
        of the Website implies acceptance of the updated terms.
      </p>

      <h2>7. Governing Law and Jurisdiction</h2>
      <p>
        These Terms of Use are governed by the laws of Switzerland. Any disputes
        arising from or in connection with these terms shall be subject to the
        exclusive jurisdiction of the courts in{" "}
        <strong>[Your City, Switzerland]</strong>.
      </p>

      <h2>8. Contact Information</h2>
      <p>
        For questions or concerns about these Terms of Use, please contact us
        at:
      </p>
      <address>
        <strong>[Your Company Name]</strong>
        <br />
        [Your Address]
        <br />
        Email:{" "}
        <a href='mailto:support@yourcompany.ch'>support@yourcompany.ch</a>
      </address>
    </div>
  );
};

export default TermsOfUse;
