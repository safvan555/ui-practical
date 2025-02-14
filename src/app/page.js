"use client";
import AllLogos from "@/components/homePage/allLogos";
import PowerBreathe from "@/components/homePage/powerBreathe";
import SalesMain from "@/components/homePage/salesMain";
import Image from "next/image";

export default function Home() {
  return (
          <>
          <SalesMain />
          <AllLogos />
          <PowerBreathe />
          </>
  );
}
