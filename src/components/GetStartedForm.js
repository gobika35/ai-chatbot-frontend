"use client";

import { useState } from "react";

export default function GetStartedForm() {
  const [paid, setPaid] = useState(false);
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
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/create-chatbot",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();
    alert(`Your chatbot is ready:\n${data.chatbot_url}`);
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

        {!paid && (
          <p className="mt-6 text-center text-[#B3B3B3]">
            Please complete payment to unlock the form
          </p>
        )}

        <div
          className={`mt-16 space-y-6 ${
            !paid ? "opacity-40 pointer-events-none" : ""
          }`}
        >
          <input name="business_name" onChange={handleChange} placeholder="Business name"
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md" />

          <input name="business_type" onChange={handleChange} placeholder="Business type"
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md" />

          <textarea name="services" onChange={handleChange} placeholder="Services"
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md" />

          <input name="hours" onChange={handleChange} placeholder="Working hours"
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md" />

          <input name="website" onChange={handleChange} placeholder="Website (optional)"
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md" />

          <input name="contact" onChange={handleChange} placeholder="Contact number"
            className="w-full p-3 bg-[#141414] border border-[#2A2A2A] rounded-md" />

          <button
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-white text-black rounded-md hover:bg-[#E5E5E5]"
          >
            Submit & Get Chatbot
          </button>
        </div>

        {!paid && (
          <button
            onClick={() => setPaid(true)}
            className="mt-8 w-full px-6 py-3 border border-[#2A2A2A] rounded-md hover:bg-[#1F1F1F]"
          >
            I have completed payment
          </button>
        )}

      </div>
    </section>
  );
}
