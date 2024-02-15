import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="font-bold text-teal-500 text-xl">
        Hello World!
      </h1>
      <Footer />
    </div>
  );
}
