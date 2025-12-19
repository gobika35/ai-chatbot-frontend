"use client";

import { useState } from "react";
import Script from "next/script";

export default function Home() {
  const [plan, setPlan] = useState("standard");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [services, setServices] = useState("");
  const [hours, setHours] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      plan,
      businessName,
      businessType,
      services,
      hours,
      website,
      phone
    };

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );

      const data = await res.json();

      if (!data.orderId) {
        alert("Payment initialization failed");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: data.amount,
        currency: "INR",
        name: "AI Business Chatbots",
        description:
          plan === "standard"
            ? "Standard Chatbot"
            : "Custom Design Chatbot",
        order_id: data.orderId,
        handler: function () {
          alert("Payment successful. We will contact you soon.");
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <main style={styles.main}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1>AI Chatbots that reply 24/7</h1>
          <p>Capture leads automatically. No monthly fees.</p>
        </section>

        {/* PRICING */}
        <section style={styles.section}>
          <h2>Simple pricing</h2>

          <div style={styles.card}>
            <h3>Standard Chatbot</h3>
            <p>₹4,999 — one time</p>
            <ul>
              <li>Business-specific chatbot</li>
              <li>24/7 instant replies</li>
              <li>Lead capture</li>
              <li>No monthly fees</li>
            </ul>
            <button
              style={styles.button}
              onClick={() => setPlan("standard")}
            >
              Select Standard
            </button>
          </div>

          <div style={styles.card}>
            <h3>Custom Design Chatbot</h3>
            <p>₹5,999 — one time</p>
            <ul>
              <li>Everything in Standard</li>
              <li>Design matched to your site</li>
              <li>Custom UI</li>
              <li>Priority setup</li>
            </ul>
            <button
              style={styles.button}
              onClick={() => setPlan("custom")}
            >
              Select Custom
            </button>
          </div>
        </section>

        {/* FORM */}
        <section style={styles.section}>
          <h2>Get your chatbot</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              placeholder="Business name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />

            <input
              placeholder="Business type"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              required
            />

            <textarea
              placeholder="Services you provide"
              value={services}
              onChange={(e) => setServices(e.target.value)}
              required
            />

            <input
              placeholder="Working hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />

            <input
              placeholder="Website (optional)"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <input
              placeholder="Contact number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit" style={styles.button}>
              Pay & Get Chatbot
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <p>AI Business Chatbots</p>
          <p>© 2025 All rights reserved</p>
        </footer>
      </main>
    </>
  );
}

const styles = {
  main: {
    background: "#0f0f0f",
    color: "#eaeaea",
    minHeight: "100vh",
    padding: "40px"
  },
  hero: {
    textAlign: "center",
    marginBottom: "60px"
  },
  section: {
    maxWidth: "700px",
    margin: "0 auto 60px"
  },
  card: {
    border: "1px solid #333",
    padding: "20px",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  button: {
    background: "#fff",
    color: "#000",
    padding: "10px",
    border: "none",
    cursor: "pointer"
  },
  footer: {
    textAlign: "center",
    opacity: 0.6
  }
};
