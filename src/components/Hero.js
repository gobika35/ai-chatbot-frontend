export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          AI Chatbots that reply to your customers 24/7<br />
          and capture leads automatically
        </h1>

        <p className="mt-6 text-lg text-[#B3B3B3]">
          Built for businesses that don’t want to miss customers.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-[#E5E5E5] transition">
            Get Your Chatbot
          </button>

          <button className="px-6 py-3 border border-[#2A2A2A] text-white rounded-md hover:bg-[#1F1F1F] transition">
            View Demo
          </button>
        </div>

      </div>
    </section>
  );
}
