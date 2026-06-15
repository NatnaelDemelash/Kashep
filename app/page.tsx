import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Waitlist from '@/components/Waitlist';
// import HowItWorks from "@/components/HowItWorks";
// import Features from "@/components/Features";
// import WaitlistForm from "@/components/WaitlistForm";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] text-slate-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Waitlist />
    </main>
  );
}
