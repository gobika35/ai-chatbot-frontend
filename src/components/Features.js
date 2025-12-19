export default function Features() {
  return (
    <section className="py-24 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Features that matter
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          
          <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-lg">
            <h3 className="text-xl font-medium">
              24/7 instant replies
            </h3>
            <p className="mt-2 text-[#B3B3B3]">
              Never miss a customer, even outside working hours.
            </p>
          </div>

          <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-lg">
            <h3 className="text-xl font-medium">
              Business-only answers
            </h3>
            <p className="mt-2 text-[#B3B3B3]">
              The chatbot responds only with information you provide.
            </p>
          </div>

          <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-lg">
            <h3 className="text-xl font-medium">
              Automatic lead capture
            </h3>
            <p className="mt-2 text-[#B3B3B3]">
              Collect customer name and phone without manual effort.
            </p>
          </div>

          <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-lg">
            <h3 className="text-xl font-medium">
              Safe responses
            </h3>
            <p className="mt-2 text-[#B3B3B3]">
              If unsure, the chatbot redirects customers to your team.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
