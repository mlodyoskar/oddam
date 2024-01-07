import React from "react";
import Decoration from "../../assets/Decoration.svg";
const WhoWeHelp = () => {
  return (
    <>
      <section className="whoWeHelp-section">
        <div>
          <h1 className="whoWeHelp-heading">Komu pomagamy?</h1>
          <img src={Decoration} alt="decoration" />
          <div className="three-btns">
            <button className="whoWeHelp-btn">Fundacja</button>
            <button className="whoWeHelp-btn">Organizacjom pozarządowym</button>
            <button className="whoWeHelp-btn">Lokalnym zbiórkom</button>
          </div>
          <p className="whoWeHelp-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="collection-containers">
            <div className="collection-container">
              <h1 className="collection-container-heading">Zbiórka “Lorem Ipsum 1”</h1>
              <div className="collection-block">
                <p className="collection-block_description">
                  Quis varius quam quisque id diam vel quam elementum pulvinar.
                </p>
                <p className="collection-block-description2">Egestas, sed, tempus</p>
              </div>
            </div>
            <div className="collection-container">
              <h1 className="collection-container-heading">Zbiórka “Lorem Ipsum 1”</h1>
              <div className="collection-block">
                <p className="collection-block_description">
                  Quis varius quam quisque id diam vel quam elementum pulvinar.
                </p>
                <p className="collection-block_description2">Egestas, sed, tempus</p>
              </div>
            </div>
            <div className="collection-block">
              <h1 className="collection-container-heading">Zbiórka “Lorem Ipsum 1”</h1>
              <div>
                <p className="collection-block_description">
                  Quis varius quam quisque id diam vel quam elementum pulvinar.
                </p>
                <p className="collection-block_description2">Egestas, sed, tempus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeHelp;
