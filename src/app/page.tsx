"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Fleet from "@/components/sections/Fleet";
import Services from "@/components/sections/Services";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setIsLoaded(true)} />
      {isLoaded && <CustomCursor />}
      <SmoothScroll>
        <Navbar />
        <main style={{ minHeight: "100vh" }}>
          <Hero isLoaded={isLoaded} />
          <Fleet />
          <Services />
          <Booking />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
