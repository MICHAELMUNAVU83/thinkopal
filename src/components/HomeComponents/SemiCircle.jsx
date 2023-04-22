import React from "react";

const SemiCircle = () => {
  return (
    <div className="relative h-40 w-40 transform rotate-180">
      <div className="absolute left-0 top-0 h-full w-full rounded-full clip-auto">
        <div
          className="absolute left-0 top-0 h-full w-full rounded-full clip-auto"
          style={{ clip: "rect(0px, 20px, 80px, 0px)" }}
        >
          <div className="h-full w-full rounded-full bg-red-500"></div>
        </div>
        <div
          className="absolute left-0 top-0 h-full w-full rounded-full clip-auto"
          style={{ clip: "rect(0px, 40px, 80px, 20px)" }}
        >
          <div className="h-full w-full rounded-full bg-blue-500"></div>
        </div>
        <div
          className="absolute left-0 top-0 h-full w-full rounded-full clip-auto"
          style={{ clip: "rect(0px, 60px, 80px, 40px)" }}
        >
          <div className="h-full w-full rounded-full bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default SemiCircle;
