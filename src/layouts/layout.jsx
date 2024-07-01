"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";
import WhatsappIcon from "../components/whatssappIcon";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar/>
        {children}
      <ContactForm/>
      <Footer />
      <WhatsappIcon />
    </div>
  );
}