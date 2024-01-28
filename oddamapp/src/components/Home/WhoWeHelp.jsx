import React, { useEffect, useState } from "react";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/HomeStyle/whoWeHelp.scss";
import { supabase } from "../../supabase";


const WhoWeHelp = () => {
  const [fetchData, setFetchData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("fundacje");

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);
 

  async function getProducts() {
    try {
      let { data, error } = await supabase.from("fundacjom").select("*").eq('type',selectedCategory);
      if (error) throw error;
      if (data != null) {
        setFetchData(data);
      }
      console.log(data);
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
              onClick={() => setSelectedCategory("fundacje")}
            >
              Fundacjom
            </button>
            <button
              className="whoWeHelp-btn"
              onClick={() => setSelectedCategory("organizacjom")}
            >
              Organizacjom pozarządowym
            </button>
            <button
              className="whoWeHelp-btn"
              onClick={() => setSelectedCategory("zbiorkom")}
            >
              Lokalnym zbiórkom
            </button>
          </div>
          <p className="whoWeHelp-description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
            {fetchData.slice(0,3).map((item) => (
          <div className="collection-containers">
              <div key={item.id} className="collection-container">
                <h1 className="collection-container-heading">{item.title}</h1>
                <div className='collection-block'>
                  <p className="collection-block_description">
                    {item.description}
                  </p>
                  <p className="collection-block-description2">{item.things}</p>
                </div>
              </div>
          </div>
            ))}
          <div className="page-numbers">
            <div className="number"  onClick={() => setFetchData.slice(0,3)}>1</div>
            <div className="number"  onClick={() => fetchData.slice(4,6)}>2</div>
            <div className="number"  onClick={() => fetchData.slice(7,9)}>3</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeHelp;
