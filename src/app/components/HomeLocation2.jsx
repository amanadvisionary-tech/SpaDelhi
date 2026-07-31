
import Link from "next/link";

const locations = [
  { name: "Sandwich Massage", link: "/sandwich-massage-in-delhi" },
  { name: "Couple Massage", link: "/couples-massage-in-delhi" },
  { name: "B2B Massage", link: "/b2b-massage-in-delhi" },
  { name: "Spa Jobs in Delhi", link: "/spa-therapist-jobs-in-delhi" },
  { name: "Full Body Massage", link: "/full-body-massage-in-delhi" },
  { name: "Spa in Aerocity", link: "/spa-in-aerocity" },
  { name: "Spa in Connaught Place", link: "/spa-in-connaught-place" },
  { name: "Spa in Lajpat Nagar", link: "/spa-in-lajpat-nagar" },
  { name: "Spa in Gurugram", link: "/spa-in-gurgaon" },
  { name: "Spa in Noida", link: "/spa-in-noida" },
];

export default function HomeLocation2() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Spa Services & Locations
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Explore our premium massage services and spa outlets across Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((location, index) => (
            <Link
              key={index}
              href={location.link}
              className="bg-red-800 hover:bg-red-700 text-white text-center font-medium py-4 px-3 rounded-xl shadow-sm transition-colors"
            >
              {location.name}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

