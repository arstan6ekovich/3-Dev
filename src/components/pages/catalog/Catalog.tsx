import React from "react";
import img from "../../../assets/Images/1.png";
import img2 from "../../../assets/Images/2.png";
import img3 from "../../../assets/Images/3.png";
import img4 from "../../../assets/Images/4.png";
import img5 from "../../../assets/Images/5.png";
import img6 from "../../../assets/Images/6.png";

import Image from "next/image";
import scss from "./Catalog.module.scss";

const Catalog = () => {
  return (
    <div>
      <div className="container">
        <div className={scss.Catalogs}>
          <div className={scss.zagalovok}>
            <h1>КАТАЛОГ</h1>
          </div>
          <div className={scss.catalog}>
            <Image src={img} alt="img" />
            <div className={scss.block}>
              <Image src={img2} alt="img" />
              <div className={scss.box1}>
                <Image src={img3} alt="img" />
                <Image src={img4} alt="img" />
              </div>
              <div className={scss.box2}>
                <Image src={img5} alt="img" />
                <Image src={img6} alt="img" />
              </div>
            </div>
          </div>
          <div className={scss.catalog_text}>
            <div className={scss.texth1}>
              <h1>Ничего не сможет остановить вас</h1>
            </div>
            <div className={scss.textp}>
              <p>
                Наша компания специализируется на продаже товаров
                для велосипедного спорта — велосипедов, запасных частей,
                аксессуаров и различного спортивного инвентаря для активного
                спорта и отдыха.
              </p>
              <h2>Подробнее</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
