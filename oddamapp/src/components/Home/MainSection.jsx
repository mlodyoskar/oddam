import React from "react";
import "../../scss/HomeStyle/MainSection.scss";
import HeroImage from "../../assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
const MainSection = () => {
  return (
    <>
      <section>
        <div>
          <img src={HeroImage} alt="losowe rzeczy" />
        </div>
        <div>
            <div>
                <button>
                    Zaloguj
                </button>
                <button>Załóż konto</button>
            </div>
            <nav>
                <ul>
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
            <div>
                <h1>Zacznij pomagać <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={Decoration} alt='decoration' />
                <div>
                    <button>Oddaj rzeczy</button>
                    <button>zorganizuj zbiórkę</button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
