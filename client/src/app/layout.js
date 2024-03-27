import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Piumi Skin",
  description: "Pimu Skin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 
          DON'T REMOVE THIS META TAG,
          Untill change the ownership of the site to the client || change the hosting method or server
      */}
      <head><meta name="google-site-verification" content="ATgXlgu6PG2sYDXifi4Jet58n0JECqHC_fwtr3bkxuc" /></head>
      <body className={inter.className}>
        <Header/>
        <div className="content-container">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
