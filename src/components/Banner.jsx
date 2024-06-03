import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[85vh] bg-cover bg-center  flex items-end"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)",
      }}
    >
      <div className="text-2xl text-white bg-yellow-900/60 w-full text-center p-2">Avengers EndGame</div>
    </div>
  );
}

export default Banner;
