export const Moon = () => {
  return (
    <div
      className={`absolute w-32 lg:w-40 h-32 lg:h-40 bg-gray-500/40 rounded-full -top-full left-1/2 transform -translate-x-1/2 -translate-y-60 flex items-center justify-center opacity-70`}
    >
      <div className="w-28 lg:w-36 h-28 lg:h-36 bg-gray-500/50 rounded-full flex items-center justify-center">
        <div className="w-24 lg:w-32 h-24 lg:h-32 bg-gray-400/70 rounded-full flex items-center justify-center">
          <div className="w-20 lg:w-28 h-20 lg:h-28 bg-gray-400 rounded-full "></div>
        </div>
      </div>
    </div>
  );
};
