import React from "react";
import "../../scss/HomeStyle/threeColumns.scss";
const ThreeColumns = () => {
  return (
    <>
      <section className="threeColumns-bg">
        <div className="threeColumns">
          <div className="threeColumn_container">
            <h1 className="threeColumn-number">10</h1>
            <h3 className="threeColumn-heading">oddanych worków</h3>
            <p className="threeColumn-text">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
          <div className="threeColumn_container">
            <h1 className="threeColumn-number">5</h1>
            <h3 className="threeColumn-heading">wspartych organizacji</h3>
            <p className="threeColumn-text">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
          <div className="threeColumn_container">
            <h1 className="threeColumn-number">7</h1>
            <h3 className="threeColumn-heading">zorganizowanych zbiórek</h3>
            <p className="threeColumn-text">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeColumns;
