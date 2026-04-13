export const Landscape = () => {
  const Window = () => <div className="h-2 w-2 bg-gray-700 rounded-xs"></div>;

  return (
    // Suelo
    <div className="w-full h-40 bg-gray-950 relative">
      {/* Edificio */}
      <div
        className="h-40 w-20 absolute -top-full left-1/2 bg-gray-950 
        flex flex-wrap gap-1 content-start justify-center p-2"
      >
        {/* Ventanas */}
        {Array.from({ length: 10 }).map((_, i) => (
          <Window key={i} />
        ))}
        <div className="h-2 w-2 bg-gray-700 rounded-xs overflow-visible relative">
          {/* chispas cayendo */}

          <div className="welding absolute top-0 left-0 w-5 h-5 flex items-center justify-center">
            {/* Luz */}
            <div className="w-5 h-5 bg-radial from-white via-transparent to-transparent rounded-full flex items-center justify-center">
              {/* núcleo */}
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          {/* Chispas */}
          <div className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center">
            <div
              className="w-1 h-1 bg-white spark"
              style={{ animationDelay: `${0.3}s` }}
            ></div>
          </div>
          <div className="absolute top-0 left-0 w-5 h-5 flex justify-center items-center">
            <div
              className="w-1 h-1 bg-white spark2"
              style={{ animationDelay: `${0.1}s` }}
            ></div>
          </div>
          <div className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center">
            <div
              className="w-1 h-1 bg-white spark3"
              style={{ animationDelay: `${0.4}s` }}
            ></div>
          </div>
        </div>
        {Array.from({ length: 22 }).map((_, i) => (
          <Window key={i} />
        ))}
        <div className="h-2 w-2 bg-gray-700 rounded-xs overflow-visible relative">
          {/* chispas cayendo */}

          <div className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center">
            {/* Luz */}
            <div className="w-5 h-5 bg-radial from-white via-transparent to-transparent rounded-full flex items-center justify-center">
              {/* núcleo */}
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          {/* Chispas */}
          <div className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center">
            <div
              className="w-1 h-1 bg-white spark"
              style={{ animationDelay: `${0.3}s` }}
            ></div>
          </div>
          <div className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center">
            <div
              className="w-1 h-1 bg-white spark2"
              style={{ animationDelay: `${0.1}s` }}
            ></div>
          </div>
          <div className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center">
            <div
              className="w-1 h-1 bg-white spark3"
              style={{ animationDelay: `${0.4}s` }}
            ></div>
          </div>
        </div>

        {Array.from({ length: 8 }).map((_, i) => (
          <Window key={i} />
        ))}
      </div>
    </div>
  );
};
