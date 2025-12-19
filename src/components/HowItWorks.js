export default function HowItWorks() {
  return (
    <section className="py-24 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          How it works
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6">
            <p className="text-sm text-[#8A8A8A]">Step 1</p>
            <h3 className="mt-2 text-xl font-medium">
              Enter business details
            </h3>
            <p className="mt-2 text-[#B3B3B3]">
              Share your services, timings, and contact info.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6">
            <p className="text-sm text-[#8A8A8A]">Step 2</p>
            <h3 className="mt-2 text-xl font-medium">
              We create your chatbot
            </h3>
            <p className="mt-2 text-[#B3B3B3]">
              AI is configured only for your business.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6">
            <p className="text-sm text-[#8A8A8A]">Step 3</p>
            <h3 className="mt-2 text-xl font-medium">
              Start getting leads
            </h3>
            <p className="mt-2 text-[#B3B3B3]">
              Customers get instant replies and leave their details.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
