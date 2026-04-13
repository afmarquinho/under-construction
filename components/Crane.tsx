export const Crane = () => {
  return (
    <div className="h-72 w-100 absolute bottom-full left-60">
      <div className="relative w-full h-full">
        {/*TORRE (lattice) */}
        <div className="absolute bottom-0 left-32 w-6 h-full bg-gray-950 flex flex-col justify-between py-2" />

        {/*BRAZO PRINCIPAL */}
        <div className="absolute top-12 left-0 w-full h-6 bg-gray-950 flex items-center clippy-crane"></div>

        {/* ⚖️ CONTRAPESO */}
        <div className="absolute top-8 left-2 w-8 h-16 bg-gray-950" />

        {/* BASE 1 */}
        <div className="absolute bottom-0 left-28 w-14 h-8 bg-gray-950" />

        {/* BASE 2 */}
        <div className="absolute bottom-0 left-26 w-18 h-6 bg-gray-950" />

        {/* BASE 3 */}
        <div className="absolute bottom-0 left-24 w-22 h-4 bg-gray-950" />

        {/* CONTENEDOR CABLE + CARGA */}
        <div className="absolute top-18 right-0 w-38 h-36 move-horizontal">
          {/* ESTE maneja el péndulo */}
          <div className="relative w-full h-full flex flex-col items-center pendulum">
            {/* CABLE */}
            <div className="w-0.5 bg-gray-950 cable-length"></div>

            {/* CARGA */}
            <div className="w-full h-3 bg-gray-950"></div>
          </div>
        </div>

        {/* CARGA */}
        {/* <div className="absolute top-16 left-92 w-26 h-8 bg-gray-950" />         */}

        {/* ✨ LUZ EN LA PUNTA */}
        <div className="absolute top-12 left-90">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>
        </div>
      </div>
    </div>
  );
};
