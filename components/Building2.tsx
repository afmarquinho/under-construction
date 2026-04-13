export const Building2 = () => {
  const Window = () => <div className="h-2 w-2 bg-gray-700 rounded-xs"></div>;
  return (
    <div
      className="h-16 md:h-10 w-16 md:w-24 absolute bottom-full left-2 lg:left-50 bg-gray-950 
        flex flex-wrap gap-1 content-start justify-center p-2"
    >
      {/* Ventanas */}
      {Array.from({ length: 14 }).map((_, i) => (
        <Window key={i} />
      ))}
    </div>
  );
};
