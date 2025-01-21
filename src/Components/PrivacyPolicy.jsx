import React from "react";

export default function PrivacyPolicy() {
  return (
    <div style={{ marginTop: "100px" }}>
    <div className="container rules-box">
     
    <div className="container text-start">
      <h1 className="mb-4">Learn Baseball: <b>Privacy Policy</b></h1>
      <p>
        Welcome to <strong>Learn Baseball</strong>. Your privacy is critically important to us. This
        Privacy Policy explains how we collect, use, and protect your information while you use our
        app.
      </p>

      <div className="mb-4">
        <h2>Information We Collect</h2>
        <ul style={{color: "white"}}>
          <li>
            <strong>Personal Information:</strong> When you sign up or subscribe, we may collect
            your name, email address, and payment details for premium features.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use the app, including your quiz
            progress and chat interactions with the AI.
          </li>
          <li >
            <strong>Device Data:</strong> Details about the device you use, like your browser type
            and operating system.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect to provide and improve your experience with Learn
          Baseball:
        </p>
        <ul style={{color: "white"}}>
          <li >To personalize your learning journey.</li>
          <li >To process payments for premium features.</li>
          <li >
            To analyze usage trends and improve app performance.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2>How We Protect Your Information</h2>
        <p>
          We take data security seriously and use industry-standard measures to protect your
          information. Your data is encrypted and stored securely.
        </p>
      </div>

      <div className="mb-4">
        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services like payment processors or analytics tools. These
          services have their own privacy policies, and we encourage you to review them.
        </p>
      </div>

      <div className="mb-4">
        <h2>Your Choices</h2>
        <ul style={{color: "white"}}>
          <li >
            <strong>Access and Update:</strong> You can update your personal information through
            your account settings.
          </li>
          <li >
            <strong>Opt-Out:</strong> You can choose to opt out of certain features or delete your
            account at any time.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We’ll notify you of significant
          changes through the app or email.
        </p>
      </div>

      <div className="text-start">
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a style={{textDecorationColor:"rgb(185, 250, 177)", color: "rgb(185, 250, 177)"}} href="mailto:support@learnbaseball.com">support@learnbaseball.com</a>.
        </p>
      </div>
    </div>
     </div>
  </div>
  );
};
