import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

// Above the fold components (Normal Import)
import HomeBanner from "./components/HomeBanner";
import AboutSection from "./components/AboutSection";
import HomeServicesSection from "./components/HomeServicesSection";
import HomeWhyChoiceus from "./components/HomeWhyChoiceus";

// Lazy Load Components
const HomeOurProcess = dynamic(() => import("./components/HomeOurProcess"));
const HomeOutlet = dynamic(() => import("./components/HomeOutlet"));
const HomePricing = dynamic(() => import("./components/HomePricing"));
const HomeLocations = dynamic(() => import("./components/HomeLocations"));
const Relaxinghomecontent = dynamic(() =>
  import("./components/Relaxinghomecontent")
);
const HomeTherapyest = dynamic(() =>
  import("./components/HomeTherapyest")
);
const HomeHealthBenefits = dynamic(() =>
  import("./components/HomeHealthBenefits")
);
const HomeTestimonials = dynamic(() =>
  import("./components/HomeTestimonials"),
  {
    ssr: false,
  }
);
const HomeFaqSection = dynamic(() =>
  import("./components/Homefaqsection"),
  {
    ssr: false,
  }
);
const HomeLocation2 = dynamic(() =>
  import("./components/HomeLocation2")
);
const WhatsappFloat = dynamic(() =>
  import("./components/WhatsappFloat"),
  {
    ssr: false,
  }
);

export default function HomeClient() {
  return (
    <main className="font-sans overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-amber-400/5 blur-xl" />

      {/* Above The Fold */}
      <HomeBanner />
      <AboutSection />
      <HomeServicesSection />
      <HomeWhyChoiceus />

      {/* Other Sections */}
      <HomeOurProcess />
      <HomeOutlet />
      <Suspense fallback={null}>
    <HomePricing />
</Suspense>

      {/* Content Section */}
      <section className="bg-gray-50 py-16"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6"> {/* First Row */} 
          <div className="grid md:grid-cols-2 gap-8 items-center"> 
            <div> <Image src="/images/80535.webp" alt="Luxury Spa in Delhi" width={600} height={400} loading="lazy" className="rounded-2xl shadow-md w-full h-auto" /> </div> <div className="bg-white shadow-md p-6 md:p-8 rounded-xl"> <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"> Visit Our Massage Centre{" "} <span className="text-amber-600"> in Delhi for Deep Relaxation </span> </h2> 
        <p className="text-gray-600 leading-relaxed">
              At the massage centre in Delhi, we offer a wide range of premium massage services to help you experience soothing relaxation after a long, stressful working day. We have a team of Indian and International massage therapists from all over the world. Whenever you need a b2b massage, a full body massage, or a <span className="font-semibold text-amber-700"><a href="/couples-massage-in-delhi">couples massage in delhi</a></span>, our team of certified massage therapists is here to fulfil all your needs. Our B2B spa in Delhi offers a very affordable package without compromising on quality or services. At Spa Delhi, we offer hotel massage to home massage, so whatever the occasion, our team will always be ready to serve you the best. Contact us today and let our team of therapists bring you the pleasure you have dreamed of.
            </p> </div> </div> {/* Second Row */} <div className="grid md:grid-cols-2 gap-8 items-center mt-16"> <div className="bg-white shadow-md p-6 md:p-8 rounded-xl order-2 md:order-1"> 
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"> Get Top-Rated Full Body{" "} <span className="text-amber-600"> Massage At Spa in Connaught Place </span> </h2> 
              <p className="text-gray-600 leading-relaxed">
            Our full-body massage at <span className="font-semibold text-amber-700"><a href="/spa-in-connaught-place">spa in Connaught Place</a></span> is the perfect place to relax and refresh yourself. In our Couple spa in Delhi we have combined modern massage with the traditional healing practices in order to come up with therapy plans that are in line with your body and lifestyle. Our mission to offer peace, comfort, and the best massage experience to all those who come has been our goal since the set up of our establishment some years ago. We are referred to as one of the most relied spas in Delhi at Luxury Spa due to our professional therapists, exquisite oils and customized treatments. Visit and have a relaxing time that leaves you in full relaxation and rejuvenated.
            </p> </div> <div className="order-1 md:order-2"> <Image src="/images/453.webp" alt="Full Body Massage in Connaught Place" width={600} height={400} loading="lazy" className="rounded-2xl shadow-md w-full h-auto" /> </div> </div> </div> 
            </section>

      <HomeLocations />
      <Relaxinghomecontent />
      <HomeTherapyest />
      <HomeHealthBenefits />
      <HomeTestimonials />
      <HomeFaqSection />
      <HomeLocation2 />
      <WhatsappFloat />
    </main>
  );
}