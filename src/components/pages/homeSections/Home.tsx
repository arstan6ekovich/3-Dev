import scss from "./Home.module.scss";

const Home = () => {
  return (
    <div className={scss.Home}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Электро велосипеды</h1>
            <p>
              Cento10 Hybrid — это гоночный велосипед с помогающим педалированию
              электроприводом, который устанавливает новый, очень высокий
              стандарт для данной категории
            </p>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
