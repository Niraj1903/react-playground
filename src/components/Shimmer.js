const Shimmer = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 animate-pulse">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 w-full shadow-sm"
          >
            <div className="h-40 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
