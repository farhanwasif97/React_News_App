import React from "react";

const Hero = () => {
  return (
    <div
      className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
      style={{ height: "50vh" }}
    >
      <h1 style={{ fontSize: "50px", color: "cyan" }}>DevNews</h1>
      <h6>THIS WEBSITE HAS BEEN BUILT USING NEWS API</h6>
    </div>
  );
};

export default Hero;
