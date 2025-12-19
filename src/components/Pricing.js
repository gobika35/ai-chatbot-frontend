"use client";

export default function Pricing() {

  const pay = async (amount) => {
    const res = await fetch("http://localhost:8000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const order = await res.json();

    const options = {
      key: "rzp_test_Rt9ASEUmtp3QJ3", // same as backend
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      name: "AI Business Chatbots",
      description: "One-time chatbot setup",
      handler: function () {
        alert("Payment successful. Please fill the form below.");
        document.getElementById("get-started-form").scrollIntoView({
          behavior: "smooth"
        });
      },
      theme: { color: "#000000" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="py-24 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Simple pricing
        </h2>

        <p className="mt-4 text-center text-[#B3B3B3]">
          One-time payment. No monthly fees.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Standard */}
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8">
            <h3 className="text-xl font-medium">
              Standard Chatbot
            </h3>

            <p className="mt-4 text-4xl font-semibold">
              ₹4,999
            </p>

            <p className="mt-2 text-[#8A8A8A]">
              One-time payment
            </p>

            <ul className="mt-6 space-y-3 text-[#B3B3B3]">
              <li>• Business-specific chatbot</li>
              <li>• 24/7 instant replies</li>
              <li>• Lead capture</li>
              <li>• No monthly fees</li>
            </ul>

            <button
              onClick={() => pay(4999)}
              className="mt-8 w-full px-6 py-3 bg-white text-black rounded-md hover:bg-[#E5E5E5]"
            >
              Get Started
            </button>
          </div>

          {/* Custom */}
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8">
            <h3 className="text-xl font-medium">
              Custom Design Chatbot
            </h3>

            <p className="mt-4 text-4xl font-semibold">
              ₹5,999
            </p>

            <p className="mt-2 text-[#8A8A8A]">
              One-time payment
            </p>

            <ul className="mt-6 space-y-3 text-[#B3B3B3]">
              <li>• Everything in Standard</li>
              <li>• Design matched to your site</li>
              <li>• Custom UI</li>
              <li>• Priority setup</li>
            </ul>

            <button
              onClick={() => pay(5999)}
              className="mt-8 w-full px-6 py-3 border border-[#2A2A2A] rounded-md hover:bg-[#1F1F1F]"
            >
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
