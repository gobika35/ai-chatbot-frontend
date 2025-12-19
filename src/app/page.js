import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import GetStartedForm from "../components/GetStartedForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <div id="get-started-form">
        <GetStartedForm />
      </div>
      <Footer />
    </main>
  );
}
