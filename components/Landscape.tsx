"use client"
import { Building1 } from "./Building1";
import { Building2 } from "./Building2";
// import { Building3 } from "./Building3";
import { Crane } from "./Crane";

import dynamic from "next/dynamic";

const Building3 = dynamic(
  () => import("./Building3").then((mod) => mod.Building3),
  { ssr: false }
);


export const Landscape = () => {

  return (
    // Suelo
    <div className="w-full h-20 bg-gray-950 relative">
      {/* Edificio */}
      <Building1/>
      <Building2/>
      <Building3/>
      <Crane/>      
    </div>
  );
};
