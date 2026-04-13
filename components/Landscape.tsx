import { Building1 } from "./Building1";
import { Building2 } from "./Building2";
import { Crane } from "./Crane";

export const Landscape = () => {

  return (
    // Suelo
    <div className="w-full h-20 bg-gray-950 relative">
      {/* Edificio */}
      <Building1/>
      <Building2/>
      <Crane/>      
    </div>
  );
};
