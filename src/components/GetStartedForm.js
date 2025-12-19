"use client";

import { useState } from "react";

export default function GetStartedForm() {
  const [form, setForm] = useState({
    business_name: "",
    business_type: "",
    services: "",
    hours: "",
    website: "",
    contact: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("https://ai-chatbot-backend-v82w.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert(
      `Your chatbot is ready!\n\nChatbot URL:\n${data.chatbot_url}`
    );
  };

  return (
    <section
      id="get-started-form"
      className="py-24 px-6 border-t border-[#2A2A2A]"
    >
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-semibold text-center">
          Get your chatbot
        </h2>

        <p className="mt-4 text-center text-[#B3B3B3]">
          Enter your business details below
        </p>

        <div className="mt-16 space-y-6">

          <input
            name="business_name"
            placeholder="Business name"
            onChange={handleChange}
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md outline-none"
          />

          <input
            name="business_type"
            placeholder="Business type"
            onChange={handleChange}
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md outline-none"
          />

          <textarea
            name="services"
            placeholder="Services you provide"
            rows="3"
            onChange={handleChange}
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md outline-none"
          />

          <input
            name="hours"
            placeholder="Working hours"
            onChange={handleChange}
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md outline-none"
          />

          <input
            name="website"
            placeholder="Website (optional)"
            onChange={handleChange}
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md outline-none"
          />

          <input
            name="contact"
            placeholder="Contact number"
            onChange={handleChange}
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md outline-none"
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-white text-black rounded-md hover:bg-[#E5E5E5]"
          >
            Submit & Get Chatbot
          </button>

        </div>
      </div>
    </section>
  );
}
