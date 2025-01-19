import React from "react";

const MapLocationInfo = () => {
  return (
    <>
      {/* ============== START GOOGLE MAP ============= */}
      <div className="google-map mt-4">
        <iframe
          style={{
            height: "400px",
            width: "100%",
            border: 0,
            borderRadius: "12px"
          }}
          className="iframe-map"
          frameBorder={0}
          src="https://www.google.com/maps/embed/v1/place?q=uea&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div>
      {/* ============== END GOOGLE MAP ============= */}
    </>
  );
};

export default MapLocationInfo;
