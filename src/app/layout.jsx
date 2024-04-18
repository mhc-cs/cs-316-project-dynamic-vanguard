import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Holistic Healing",
  description: "Aya's requested healing hub",
};

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        {/* <Modal /> */}
        <div className="flex">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
