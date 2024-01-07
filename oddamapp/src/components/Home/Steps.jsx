import React from "react";
import Decoration from "../../assets/Decoration.svg";
import Shirt from "../../assets/Icon-1.svg";
import Bag from "../../assets/Icon-2.svg";
import Search from "../../assets/Icon-3.svg";
import Repeat from "../../assets/Icon-4.svg";
import "../../scss/HomeStyle/steps.scss";
const Steps = () => {
  return (
    <>
      <section className="fourSteps-section">
        <div className="fourColumns-heading-container">
          <h1 className="fourColumns-heading">Wystarczą 4 prostę kroki</h1>
          <img src={Decoration} alt="decoration" />
        </div>
        <div className="fourColumns">
          <div className="fourColumns_element">
            <img src={Shirt} alt="shirt" />
            <p className="fourColumns_pick">Wybierz rzeczy</p>
            <div className="fourColumns_line"></div>
            <p className="fourColumn_description">
              ubrania, zabawki, sprzęt i inne
            </p>
          </div>
          <div className="fourColumns_element">
            <img src={Bag} alt="shirt" />
            <p className="fourColumns_pick">Spakuj je</p>
            <div className="fourColumns_line"></div>
            <p className="fourColumn_description">
            skorzystaj z worków na śmieci
            </p>
          </div>
          <div className="fourColumns_element">
            <img src={Search} alt="shirt" />
            <p className="fourColumns_pick">Zdecyduj komu chcesz pomóc</p>
            <div className="fourColumns_line"></div>
            <p className="fourColumn_description">
            wybierz zaufane miejsce
            </p>
          </div>
          <div className="fourColumns_element">
            <img src={Repeat} alt="shirt" />
            <p className="fourColumns_pick">Zamów kuriera</p>
            <div className="fourColumns_line"></div>
            <p className="fourColumn_description">
            kurier przyjedzie w dogodnym terminie
            </p>
          </div>
        </div>
        <div className="btn-container">
            <button className="fourColumns-btn">oddaj rzeczy</button>
        </div>
      </section>
    </>
  );
};

export default Steps;
