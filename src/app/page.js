"use client";
import AllLogos from "@/components/homePage/allLogos";
import ControlPage from "@/components/homePage/control";
import Experience from "@/components/homePage/experience";
import Faqs from "@/components/homePage/faqs";
import HowItWorks from "@/components/homePage/howitworks";
import JourneyPage from "@/components/homePage/journey";
import KeyFeatures from "@/components/homePage/keyfeatures";
import PowerBreathe from "@/components/homePage/powerBreathe";
import Review from "@/components/homePage/review";
import SalesMain from "@/components/homePage/salesMain";
import WhatCanCapno from "@/components/homePage/whatcancapno";
import WhatCapno from "@/components/homePage/whatCapno";
import WhatDiff from "@/components/homePage/whatdiff";
import WhoCap from "@/components/homePage/whocap";

export default function Home() {
  return (
    <>
      <SalesMain />
      <AllLogos />
      <PowerBreathe />
      <WhatCapno />
      <Experience />
      <HowItWorks />
      <WhatDiff />
      <WhoCap />
      <Review />
      <KeyFeatures />
      <WhatCanCapno />
      <ControlPage />
      <Faqs />
      <JourneyPage />
    </>
  );
}
