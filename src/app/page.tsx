'use client';
import './globals.css';

import Aos from 'aos';
import { useEffect } from 'react';
import { Footer } from './components/footer';
import { Header } from "./components/header";
import ScrollToTopButton from './components/scroll-to-top-button';
import { BanksBarSection } from "./sections/banks-bar";
import { HomeSection } from "./sections/home-section";
import { SmartphonesSection } from "./sections/smartphones-section";
import { SupportSection } from './sections/support';
import { WhatWeOffer } from "./sections/what-we-offer";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto bg-black">
      <Header />
      <HomeSection />
      <BanksBarSection />
      <SmartphonesSection />
      <WhatWeOffer />
      <SupportSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
