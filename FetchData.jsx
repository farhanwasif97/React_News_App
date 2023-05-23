import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FetchData = ({ cat }) => {
  const [data, setdata] = useState("");

  const fetchData = async () => {
    await axios
      .get(
        cat
          ? "https://newsapi.org/v2/top-headlinescountry=us&category=${cat}&apiKey=56e6589205fb48f2b169308d429ba3bb"
          : "https://newsapi.org/v2/top-headlinescountry=us&apiKey=56e6589205fb48f2b169308d429ba3bb"
      )
      .then((res) => setdata(res.data.articles))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h4>
        <i>TOP HEADLINES</i>
      </h4>
      <div
        className="container d-flex flex-column justify-content-center align-items-center my-3"
        style={{ minHeight: "100vh" }}
      >
        {data
          ? data.map((items, index) => (
              <>
                <div
                  className="container my-3 p-3"
                  style={{
                    width: "500px",
                    boxShadow: "2px 2px 10px silver",
                    borderRadius: "10px",
                  }}
                >
                  <h5 className="my-2">{items.title}</h5>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={items.urlToImage}
                      alt="Image Not Found"
                      className="img-fluid"
                      style={{
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <p className="my-1">{items.content}</p>
                  <a href={items.url} target="blank">
                    View More
                  </a>
                </div>
              </>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default FetchData;
