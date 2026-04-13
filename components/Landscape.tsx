"use client";
import { Building1 } from "./Building1";
import { Building2 } from "./Building2";
// import { Building3 } from "./Building3";
import { Crane } from "./Crane";

import dynamic from "next/dynamic";
import { Moon } from "./Moon";
import Link from "next/link";

const Building3 = dynamic(
  () => import("./Building3").then((mod) => mod.Building3),
  { ssr: false },
);

export const Landscape = () => {
  return (
    // Suelo
    <div className="w-full h-18 bg-gray-950 relative">
      {/* Edificio */}
      <Moon />
      <Building1 />
      <Building2 />
      <Building3 />
      <Crane />
      <div className={`w-full absolute text-xs bottom-0 text-slate-500 pb-2`}>
        <div className={`text-center`}>
          &copy; 2026 KassyaDev. All rights reversed
        </div>
        <div className={`text-center `}>
          Contact:{" "}
          <Link
            href="mailto:fernandez9029@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs md:text-sm`}
          >
            <span className={`text-xs md:text-sm`}>
              fernandez9029@gmail.com
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
