import { Montserrat, Playfair_Display } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Analytics from "./components/Analytics";
;

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})


export const metadata = {
  verification: {
    google: "O30WbPyf0dfqhA8OsJQzIrJzej3_esZlxTAaeC_3EaE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable}`}>
         <Analytics />
        {/* <TopBar /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
