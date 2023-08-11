import "@/styles/globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
