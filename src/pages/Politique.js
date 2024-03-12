import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Politique = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Politique de confidentialité :</h1>
        </div>
        <div className="lorem">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ullam
            numquam architecto ex aliquid ipsam eius, sapiente nostrum illo
            deleniti tenetur culpa. Magnam repellendus voluptatibus aliquid ea
            quam, aliquam ab? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Eaque, odit cupiditate! Dolor totam, est dolorem
            quis, corporis neque vitae repudiandae perferendis nostrum itaque
            omnis reprehenderit fugiat, modi dolore quam earum? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Explicabo voluptate
            aspernatur corrupti amet et nam dolore itaque commodi totam
            dignissimos alias nulla officia voluptates dolores fugiat, suscipit
            recusandae libero atque.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Politique;
