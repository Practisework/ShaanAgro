import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Noto_Sans_Devanagari } from "next/font/google";
import Contactform from "@/components/ContactForm";
const Font = Noto_Sans_Devanagari({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={Font.className}>
      <Navbar />
      <Component {...pageProps} />
      <Contactform />
    </div>
  );
}
