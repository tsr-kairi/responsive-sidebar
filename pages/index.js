import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero/Hero";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Responsive-Sidebar | tsr</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <Hero />
      </div>
    </div>
  );
}
