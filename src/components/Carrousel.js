import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Carrousel = () => {
  const importAll = (r) => r.keys().map(r);

  const images = importAll(
    require.context("../assets/carrousel", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="container-carrousel">
      <div className="carrousel">
        <Splide
          aria-label="carrousel"
          options={{
            type: "loop",
            autoplay: true,
            direction: "ltr",
            speed: 1000,
            pauseOnFocus: false,
            pauseOnHover: false,
          }}
        >
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <img
                className="image"
                src={image}
                alt={`Les residents ${index}`}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Carrousel;
