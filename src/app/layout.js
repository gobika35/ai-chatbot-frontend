import "./globals.css";

export const metadata = {
  title: "AI Business Chatbots",
  description: "Professional AI chatbots for businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#0B0B0B] text-white">
        {children}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </body>
    </html>
  );
}
