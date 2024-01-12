import React, { useEffect, useState } from "react";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/HomeStyle/whoWeHelp.scss";
import { supabase } from "../../supabase";
const WhoWeHelp = () => {
  const [selectedCategory, setSelectedCategory] = useState("fundacjom");
  const [data, setData] = useState([]);
  useEffect(() => {

  const fetchData = async () => {
    let tableName;

    switch (selectedCategory) {
      case "fundacjom":
        tableName = "fundacjom";
        break;
      case "organizacjom_pozarzadowym":
        tableName = "organizacjom_pozarzadowym";
        break;
      case "lokalnym_zbiorkom":
        tableName = "lokalnym_zbiorkom";
        break;
      default:
        tableName = "fundacjom";
    }  
    const { data, error } = await supabase.from(tableName).select(`id,title,description,things`);
    
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setData(data);
     
    }
    
  };
      fetchData();
    }, [selectedCategory]);
console.log(data);
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
          {data.map((item) => (
  <div className="collection-container">
    <h1 className="collection-container-heading">{item.title}</h1>
    <div className="collection-block border">
      <p className="collection-block_description">{item.description}</p>
      <p className="collection-block-description2">{item.things}</p>
    </div>
  </div>
))}
            {data.map((item) => (
              <div key={item.id} className="collection-container">
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
            ))}
            {data.map((item) => (
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
            ))}
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
