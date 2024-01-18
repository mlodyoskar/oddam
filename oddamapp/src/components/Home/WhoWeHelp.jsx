import React, { useEffect, useState } from "react";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/HomeStyle/whoWeHelp.scss";
import { supabase } from "../../supabase";

const WhoWeHelp = () => {
  const [fetchData, setFetchData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("fundacjom");

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from(selectedCategory).select("*");
      if (error) throw error;
      if (data != null) {
        setFetchData(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <section className="whoWeHelp-section" id="whoWeHelp">
        <div className="whoWeHelp-heading-block">
          <h1 className="whoWeHelp-heading">Komu pomagamy?</h1>
          <img src={Decoration} alt="decoration" />
          <div className="three-btns">
            <button
              className="whoWeHelp-btn"
              onClick={() => setSelectedCategory("fundacjom")}
            >
              Fundacjom
            </button>
            <button
              className="whoWeHelp-btn"
              onClick={() => setSelectedCategory("organizacjom_pozarzadowym")}
            >
              Organizacjom pozarządowym
            </button>
            <button
              className="whoWeHelp-btn"
              onClick={() => setSelectedCategory("lokalnym_zbiorkom")}
            >
              Lokalnym zbiórkom
            </button>
          </div>
          <p className="whoWeHelp-description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
          <div className="collection-containers">
            {fetchData.map((item) => (
              <div key={item.id} className="collection-container">
                <h1 className="collection-container-heading">{item.title}</h1>
                <div className="collection-block border">
                  <p className="collection-block_description">
                    {item.description}
                  </p>
                  <p className="collection-block-description2">{item.things}</p>
                </div>
              </div>
            ))}
            {/* {fetchData.map((organizacjom) => (
              <div  className="collection-container">
                <h1 className="collection-container-heading">
                {organizacjom.title}
                </h1>
                <div className="collection-block border">
                  <p className="collection-block_description">
                  {organizacjom.description}
                  </p>
                  <p className="collection-block_description2">
                  {organizacjom.things}
                  </p>
                </div>
              </div>
              ))}
            {fetchData.map((zbiorkom) => (
              <div  className="collection-container">
                <h1 className="collection-container-heading">
                {zbiorkom.title}
                </h1>
                <div className="collection-block">
                  <p className="collection-block_description">
                  {zbiorkom.description}
                  </p>
                  <p className="collection-block_description2">
                  {zbiorkom.things}
                  </p>
                </div>
              </div>
            ))} */}
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
