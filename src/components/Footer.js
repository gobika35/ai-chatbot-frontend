export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <p className="text-lg font-medium">
            AI Business Chatbots
          </p>
          <p className="mt-2 text-sm text-[#8A8A8A]">
            AI chatbots for modern businesses
          </p>
        </div>

        <div className="text-sm text-[#8A8A8A]">
          © {new Date().getFullYear()} All rights reserved
        </div>

      </div>
    </footer>
  );
}
