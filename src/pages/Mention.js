import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mention = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Mentions légales :</h1>
        </div>
        <div className="lorem">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            excepturi! Culpa odit earum perspiciatis modi rem nemo explicabo
            quam natus cupiditate, dolore veniam commodi quibusdam adipisci
            aliquid officiis architecto quidem praesentium? Quis nobis
            consequatur, quae repudiandae consectetur ut praesentium, laudantium
            dolor similique, inventore at fuga atque sint? Excepturi animi
            deserunt repellat error modi minus provident a sunt quos nulla quis
            libero ducimus sequi quae rerum perspiciatis vitae minima
            reiciendis, architecto mollitia voluptatum adipisci? Voluptatibus
            maiores explicabo totam veniam! Excepturi, reiciendis!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mention;
