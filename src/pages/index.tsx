import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Program from "@/components/Program";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hacktoberfest 2024</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Program />
      <Footer />
    </>
  );
}
