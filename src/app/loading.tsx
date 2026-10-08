const Loading = () => {
  return (
    <div className="container mx-auto p-4 animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-72 bg-gray-200 rounded"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-xl p-4"
          >
            {/* Image */}
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>

            {/* Product Name */}
            <div className="h-5 w-3/4 bg-gray-200 rounded mb-3"></div>

            {/* Unit */}
            <div className="h-3 w-1/3 bg-gray-200 rounded mb-4"></div>

            {/* Price */}
            <div className="h-7 w-1/2 bg-gray-200 rounded mb-3"></div>

            {/* Price Change */}
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;