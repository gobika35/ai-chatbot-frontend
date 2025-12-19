"use client";

import { useState } from "react";

export default function Home() {
  const [plan, setPlan] = useState(null);

  return (
    <main style={{ background: "#0f1115", color: "#fff", minHeight: "100vh", padding: "60px" }}>
      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700" }}>
          AI Chatbots that reply to your customers 24/7
        </h1>
        <p style={{ color: "#aaa", marginTop: "12px" }}>
          Capture leads automatically. No monthly fees.
        </p>
      </section>

      {/* PRICING */}
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>Simple pricing</h2>

        <div style={{ border: "1px solid #333", padding: "24px", marginBottom: "20px" }}>
          <h3>Standard Chatbot</h3>
          <p>₹4,999 — one time</p>
          <ul style={{ color: "#aaa" }}>
            <li>Business-specific chatbot</li>
            <li>24/7 instant replies</li>
            <li>Lead capture</li>
            <li>No monthly fees</li>
          </ul>
          <button onClick={() => setPlan("standard")}>Get Started</button>
        </div>

        <div style={{ border: "1px solid #333", padding: "24px" }}>
          <h3>Custom Design Chatbot</h3>
          <p>₹5,999 — one time</p>
          <ul style={{ color: "#aaa" }}>
            <li>Everything in Standard</li>
            <li>Design matched to your site</li>
            <li>Custom UI</li>
            <li>Priority setup</li>
          </ul>
          <button onClick={() => setPlan("custom")}>Get Started</button>
        </div>
      </section>

      {plan && (
        <section style={{ marginTop: "80px", maxWidth: "700px", marginInline: "auto" }}>
          <h2>Get your chatbot ({plan})</h2>

          <form style={{ display: "grid", gap: "12px" }}>
            <input placeholder="Business name" />
            <input placeholder="Business type" />
            <input placeholder="Services you provide" />
            <input placeholder="Working hours" />
            <input placeholder="Contact number" />
            <button type="submit">Submit</button>
          </form>
        </section>
      )}
    </main>
  );
}
