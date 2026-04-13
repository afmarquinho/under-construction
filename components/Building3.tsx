"use client";

import { useEffect, useState } from "react";

export const Building3 = () => {
  const totalWindows = 66;

  
  const [lights, setLights] = useState<boolean[]>(() =>
    Array.from({ length: totalWindows }, () => Math.random() > 0.9)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLights((prev) =>
        prev.map((light) =>
          Math.random() > 0.85 ? !light : light 
        )
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const Window = ({ isOn }: { isOn: boolean }) => (
    <div
      className={`h-2 w-2 rounded-xs transition-all duration-500 ${
        isOn
          ? "bg-yellow-100 shadow-[0_0_6px_#f6fb94]"
          : "bg-gray-700"
      }`}
    />
  );

  return (
    <div
      className="h-70 lg:h-80 w-12 absolute bottom-full -right-20 sm:right-40 lg:right-60 bg-gray-950 
      flex flex-wrap gap-1 content-start justify-center p-2 clippy-building3 pt-10"
    >
      {lights.map((isOn, i) => (
        <Window key={i} isOn={isOn} />
      ))}
    </div>
  );
};