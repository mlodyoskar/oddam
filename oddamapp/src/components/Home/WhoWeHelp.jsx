import React from "react";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/HomeStyle/whoWeHelp.scss";
const WhoWeHelp = () => {
  return (
    <>
      <section className="whoWeHelp-section" id="whoWeHelp">
        <div className="whoWeHelp-heading-block">
          <h1 className="whoWeHelp-heading">Komu pomagamy?</h1>
          <img src={Decoration} alt="decoration" />
          <div className="three-btns">
            <button className="whoWeHelp-btn">Fundacjom</button>
            <button className="whoWeHelp-btn">Organizacjom pozarządowym</button>
            <button className="whoWeHelp-btn">Lokalnym zbiórkom</button>
          </div>
          <p className="whoWeHelp-description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
          <div className="collection-containers">
            <div className="collection-container">
              <h1 className="collection-container-heading">
                Fundacja “Dbam o Zdrowie"
              </h1>
              <div className="collection-block border">
                <p className="collection-block_description">
                  Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                  życiowej.
                </p>
                <p className="collection-block-description2">
                  ubrania, jedzenie, sprzęt AGD, meble, zabawki
                </p>
              </div>
            </div>
            <div className="collection-container">
              <h1 className="collection-container-heading">
                Fundacja “Dla dzieci”
              </h1>
              <div className="collection-block border">
                <p className="collection-block_description">
                  Cel i misja: Pomoc dzieciom z ubogich rodzin.
                </p>
                <p className="collection-block_description2">
                  ubrania, meble, zabawki
                </p>
              </div>
            </div>
            <div className="collection-container">
              <h1 className="collection-container-heading">
                Fundacja “Bez domu”
              </h1>
              <div className="collection-block">
                <p className="collection-block_description">
                  Cel i misja: Pomoc dla osób nie posiadających miejsca
                  zamieszkania.
                </p>
                <p className="collection-block_description2">
                  ubrania, jedzenie, ciepłe koce
                </p>
              </div>
            </div>
          </div>
          <div className="page-numbers">
            <div className="number">1</div>
            <div className="number">2</div>
            <div className="number">3</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeHelp;
