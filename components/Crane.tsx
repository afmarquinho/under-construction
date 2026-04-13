export const Crane = () => {
  return (
    <div className="h-64 lg:h-72 w-64 lg:w-100 absolute bottom-full left-18 sm:left-40 md:left-60 lg:left-90">
      <div className="relative w-full h-full">
        {/*TORRE (lattice) */}
        <div className="absolute bottom-0 left-18 lg:left-32 w-4 lg:w-6 h-full bg-gray-950 flex flex-col justify-between py-2" />

        {/*BRAZO PRINCIPAL */}
        <div className="absolute top-12 left-0 w-full h-4 lg:h-6 bg-gray-950 flex items-center clippy-crane"></div>

        {/* CONTRAPESO */}
        <div className="absolute top-9 lg:top-8 left-2 lg:left-2 w-4 lg:w-8 h-10 lg:h-16 bg-gray-950" />

        {/* BASE 1 */}
        <div className="absolute bottom-0 left-14 lg:left-28 w-12 lg:w-14 h-8 bg-gray-950" />

        {/* BASE 2 */}
        <div className="absolute bottom-0 left-12 lg:left-26 w-16 lg;w-18 h-6 bg-gray-950" />

        {/* BASE 3 */}
        <div className="absolute bottom-0 left-10 lg:left-24 w-20 lg:w-22 h-4 bg-gray-950" />

        {/* CONTENEDOR CABLE + CARGA */}
        <div className="absolute top-16 right-0 w-26 lg:w-38 h-36 move-horizontal">
          {/* ESTE maneja el péndulo */}
          <div className="relative w-full h-full flex flex-col items-center pendulum">
            {/* CABLE */}
            <div className="w-0.5 bg-gray-950 cable-length"></div>

            {/* CARGA */}
            <div className="w-full h-3 bg-gray-950"></div>
          </div>
        </div>

    
      </div>
    </div>
  );
};
