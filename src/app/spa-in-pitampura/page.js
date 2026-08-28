// import pitampurapage from "./pitampurapage";
import Pitampurapage from "./pitampurapage";
export const metadata = {
  title: "Spa in Pitampura | Premium Massage & Wellness Services",
  description: "Discover a refined spa experience in Pitampura with expert massage, aromatherapy, and private wellness care in a luxurious setting.",
  keywords: ["spa in pitampura", "massage in pitampura", "wellness centre pitampura"],
  openGraph: {
    title: "Spa in Pitampura | Premium Massage & Wellness Services",
    description: "Discover a refined spa experience in Pitampura with expert massage, aromatherapy, and private wellness care in a luxurious setting.",
    images: ["https://www.spadelhi.com/images/luxurySpaRoom.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.spadelhi.com/spa-in-pitampura",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/luxurySpaRoom.jpg"],
  },
};

export default function Page() {
  return <Pitampurapage />;
}
