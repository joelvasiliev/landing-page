import './globals.css';

import { Header } from "./components/header";
import { HomeSection } from "./sections/home-section";
import { BanksBarSection } from "./sections/banks-bar";
import { SmartphonesSection } from "./sections/smartphones-section";
import { WhatWeOffer } from "./sections/what-we-offer";
import { SupportSection } from './sections/support';
import { FAQSection } from './sections/faq';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto bg-black">
      <Header/>
      <HomeSection/>
      <BanksBarSection/>
      <SmartphonesSection/>
      <WhatWeOffer/>
      <SupportSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}
 