import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <div className="flex">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
