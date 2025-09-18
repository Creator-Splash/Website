import React from "react";

export default function GenderIdentityChart() {
  // Data
  const male = 19;
  const female = 12;
  const nonBinary = 1;
  const total = male + female + nonBinary; // 32

  // Calculate percentages
  const malePercent = ((male / total) * 100).toFixed(1);
  const femalePercent = ((female / total) * 100).toFixed(1);
  const nonBinaryPercent = ((nonBinary / total) * 100).toFixed(1);

  // Calculate angles for the donut chart
  const maleAngle = (male / total) * 360;
  const femaleAngle = (female / total) * 360;
  const nonBinaryAngle = (nonBinary / total) * 360;

  // Create SVG paths for donut segments
  const createPath = (
    startAngle: number,
    endAngle: number,
    innerRadius = 60,
    outerRadius = 120
  ) => {
    const start = polarToCartesian(150, 150, outerRadius, endAngle);
    const end = polarToCartesian(150, 150, outerRadius, startAngle);
    const innerStart = polarToCartesian(150, 150, innerRadius, endAngle);
    const innerEnd = polarToCartesian(150, 150, innerRadius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      start.x,
      start.y,
      "A",
      outerRadius,
      outerRadius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "L",
      innerEnd.x,
      innerEnd.y,
      "A",
      innerRadius,
      innerRadius,
      0,
      largeArcFlag,
      1,
      innerStart.x,
      innerStart.y,
      "Z",
    ].join(" ");
  };

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  // Calculate cumulative angles
  let currentAngle = 0;
  const maleStartAngle = currentAngle;
  const maleEndAngle = currentAngle + maleAngle;
  currentAngle += maleAngle;

  const femaleStartAngle = currentAngle;
  const femaleEndAngle = currentAngle + femaleAngle;
  currentAngle += femaleAngle;

  const nonBinaryStartAngle = currentAngle;
  const nonBinaryEndAngle = currentAngle + nonBinaryAngle;

  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 font-sans w-full max-w-[980px] mx-auto">
      {/* Mobile/Tablet: Stacked Layout */}
      <div className="block lg:hidden">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Gender identity
          </h2>
          <p className="text-gray-400 text-sm">{total} head-count</p>
        </div>

        {/* Chart - Mobile */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-64 h-64 sm:w-80 sm:h-80">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 300 300"
              className="w-full h-full"
            >
              {/* Male segment (Blue) */}
              <path
                d={createPath(maleStartAngle, maleEndAngle)}
                fill="#3B82F6"
              />

              {/* Female segment (Pink) */}
              <path
                d={createPath(femaleStartAngle, femaleEndAngle)}
                fill="#fb64b6"
              />

              {/* Non-binary segment (Yellow) */}
              <path
                d={createPath(nonBinaryStartAngle, nonBinaryEndAngle)}
                fill="#f0b100"
              />
            </svg>
          </div>
        </div>

        {/* Legend - Mobile */}
        <div className="space-y-4 max-w-xs mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 uppercase tracking-wide text-sm sm:text-base">
                MAN
              </span>
            </div>
            <span className="font-bold text-lg sm:text-xl">{malePercent}%</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-pink-400 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 uppercase tracking-wide text-sm sm:text-base">
                WOMAN
              </span>
            </div>
            <span className="font-bold text-lg sm:text-xl">
              {femalePercent}%
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 uppercase tracking-wide text-sm sm:text-base">
                NON-BINARY
              </span>
            </div>
            <span className="font-bold text-lg sm:text-xl">
              {nonBinaryPercent}%
            </span>
          </div>
        </div>
      </div>

      {/* Desktop: Original Side-by-side Layout (lg and above) */}
      <div className="hidden lg:flex items-center justify-between min-h-[600px]">
        {/* Left side - Title and Legend */}
        <div className="flex-1">
          <h2 className="text-4xl xl:text-5xl font-bold mb-2">
            Gender identity
          </h2>
          <p className="text-gray-400 text-sm mb-8">{total} head-count</p>

          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 mr-3"></div>
              <span className="text-lg">
                <span className="font-bold">{malePercent}%</span>
                <span className="ml-2 text-gray-300 uppercase tracking-wide">
                  MAN
                </span>
              </span>
            </div>

            <div className="flex items-center">
              <div className="w-4 h-4 bg-pink-400 mr-3"></div>
              <span className="text-lg">
                <span className="font-bold">{femalePercent}%</span>
                <span className="ml-2 text-gray-300 uppercase tracking-wide">
                  WOMAN
                </span>
              </span>
            </div>

            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 mr-3"></div>
              <span className="text-lg">
                <span className="font-bold">{nonBinaryPercent}%</span>
                <span className="ml-2 text-gray-300 uppercase tracking-wide">
                  NON-BINARY
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Donut Chart */}
        <div className="flex-1 flex justify-center">
          <div className="w-[400px] h-[400px] xl:w-[500px] xl:h-[500px]">
            <svg width="100%" height="100%" viewBox="0 0 300 300">
              {/* Male segment (Blue) */}
              <path
                d={createPath(maleStartAngle, maleEndAngle)}
                fill="#3B82F6"
              />

              {/* Female segment (Pink) */}
              <path
                d={createPath(femaleStartAngle, femaleEndAngle)}
                fill="#fb64b6"
              />

              {/* Non-binary segment (Yellow) */}
              <path
                d={createPath(nonBinaryStartAngle, nonBinaryEndAngle)}
                fill="#f0b100"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
