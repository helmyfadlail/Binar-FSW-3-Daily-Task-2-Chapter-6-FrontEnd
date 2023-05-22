import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen w-full bg-black/30 flex justify-center items-center">
      <CirclesWithBar
        height="100"
        width="100"
        color="#7f5feb"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default Loading;
