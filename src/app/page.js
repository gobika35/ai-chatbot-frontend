"use client";

import { useState } from "react";

export default function Home() {
  const [plan, setPlan] = useState(null);

  const goToForm = (selectedPlan) => {
    setPlan(selectedPlan);
    setTimeout(() => {
      document
        .getElementById("form-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main style={{ padding: "60px 20px", background: "#0f172a", color: "#fff" }}>
      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "12px" }}>
          AI Chatbots for Your Business
        </h1>
        <p style={{ opacity: 0.8 }}>
          Capture leads automatically. No monthly fees.
        </p>
      </section>

      {/* PRICING */}
      <section style={{ maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ marginBottom: "24px" }}>Simple pricing</h2>

        {/* STANDARD */}
        <div style={cardStyle}>
          <h3>Standard Chatbot</h3>
          <p>₹4,999 — one time</p>
          <ul>
            <li>Business-specific chatbot</li>
            <li>24/7 instant replies</li>
            <li>Lead capture</li>
            <li>No monthly fees</li>
          </ul>
          <button style={btnStyle} onClick={() => goToForm("standard")}>
            Get Started
          </button>
        </div>

        {/* CUSTOM */}
        <div style={{ ...cardStyle, marginTop: "40px" }}>
          <h3>Custom Design Chatbot</h3>
          <p>₹5,999 — one time</p>
          <ul>
            <li>Everything in Standard</li>
            <li>Design matched to your site</li>
            <li>Custom UI</li>
            <li>Priority setup</li>
          </ul>
          <button style={btnStyle} onClick={() => goToForm("custom")}>
            Get Started
          </button>
        </div>
      </section>

      {/* FORM */}
      {plan && (
        <section
          id="form-section"
          style={{
            marginTop: "100px",
            maxWidth: "700px",
            marginInline: "auto",
            background: "#020617",
            padding: "30px",
            borderRadius: "8px",
          }}
        >
          <h2>Get your chatbot</h2>
          <p style={{ marginBottom: "20px", opacity: 0.8 }}>
            Selected plan: <b>{plan}</b>
          </p>

          <form>
            <input style={inputStyle} placeholder="Business name" />
            <input style={inputStyle} placeholder="Business type" />
            <input style={inputStyle} placeholder="Services you provide" />
            <input style={inputStyle} placeholder="Working hours" />
            <input style={inputStyle} placeholder="Website (optional)" />
            <input style={inputStyle} placeholder="Contact number" />

            <button style={{ ...btnStyle, width: "100%", marginTop: "16px" }}>
              Submit & Get Chatbot
            </button>
          </form>
        </section>
      )}

      {/* FOOTER */}
      <footer style={{ textAlign: "center", marginTop: "100px", opacity: 0.6 }}>
        <p>AI Business Chatbots</p>
        <p>© 2025 All rights reserved</p>
      </footer>
    </main>
  );
}

/* STYLES */
const cardStyle = {
  background: "#020617",
  padding: "24px",
  borderRadius: "8px",
};

const btnStyle = {
  marginTop: "12px",
  padding: "10px 16px",
  background: "#fff",
  color: "#000",
  border: "none",
  cursor: "pointer",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "4px",
  border: "none",
};
