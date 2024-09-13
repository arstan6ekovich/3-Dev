import scss from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={scss.Home}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.text}>
              <h1>Электро велосипеды</h1>
              <p>
                Cento10 Hybrid — это гоночный велосипед с помогающим
                педалированию электроприводом, который устанавливает новый,
                очень высокий стандарт для данной категории
              </p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.blocks}>
        <div className="container">
          <div className={scss.block}>
            <div className={scss.box1}>
              <h3>Экстремальное вождение на горном велосипеде</h3>
              <a href="">Подробнее</a>
            </div>

            <div className={scss.box2}>
              <h3>Велосипеды для профессионалов</h3>
              <a href="">Подробнее</a>
            </div>

            <div className={scss.box3}>
              <h3>Долгая поездка на шоссейном велосипеде</h3>
              <a href="">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
