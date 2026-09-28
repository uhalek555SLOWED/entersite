export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="logo" href="#">
          ETERNITY <span>GAMES</span>
        </a>

        <nav>
          <a href="#games">Игры</a>
          <a href="#news">Новости</a>
          <a href="#studio">Студия</a>
        </nav>

        <a href="#games" className="headerButton">
          НАШИ ИГРЫ
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroNoise" />

        <div className="heroContent">
          <div className="heroBadge">
            <span />
            НЕЗАВИСИМАЯ ИГРОВАЯ СТУДИЯ
          </div>

          <h1>
            WE
            <br />
            CREATE
            <br />
            <strong>WORLDS.</strong>
          </h1>

          <p>
            Игры, истории и миры, которые хочется исследовать.
          </p>

          <div className="heroButtons">
            <a href="#games" className="mainButton">
              СМОТРЕТЬ ИГРЫ →
            </a>

            <a href="#studio" className="ghostButton">
              О СТУДИИ
            </a>
          </div>
        </div>

        <div className="heroProject">
          <span>FEATURED PROJECT</span>
          <h2>LAST<br />SHOP</h2>
          <p>HORROR · THRILLER</p>
          <div className="projectLine" />
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="games section">
        <div className="sectionTop">
          <div>
            <span className="sectionNumber">GAMES</span>
            <h2>НАШИ<br /><strong>ИГРЫ</strong></h2>
          </div>

          <p className="sectionDescription">
            Мы создаём разные миры — от атмосферного хоррора
            до совершенно безумных экспериментов.
          </p>
        </div>

        <div className="gamesGrid">
          <article className="gameCard gameMain">
            <div className="cardBackground lastShopBg">
              <span className="verticalText">ETERNITY GAMES</span>
            </div>

            <div className="cardContent">
              <span className="cardStatus">● В РАЗРАБОТКЕ</span>
              <h3>LAST SHOP</h3>
              <p>HORROR / THRILLER</p>
              <p>СКОРО!</p>
            </div>
          </article>

          <article className="gameCard conceptCard">
            <div className="cardBackground blueBg">
              <span>PROJECT</span>
              <strong>02</strong>
            </div>

            <div className="cardContent">
              <span className="cardStatus blue">● КОНЦЕПТ</span>
              <h3>LAST<br />SHOP 2</h3>
              <p>HORROR / THRILLER</p>
              <p>??? / ???</p>
            </div>
          </article>

          <article className="gameCard smallCard">
            <div className="cardBackground purpleBg">
              <span>COMING</span>
            </div>

            <div className="cardContent">
              <span className="cardStatus purple">● В ПЛАНАХ</span>
              <h3>LAST<br />SHOP 3</h3>
              <p>??? / ???</p>
            </div>
          </article>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="development">
        <div className="devHeader">
          <span className="sectionNumber">DEVELOPMENT</span>
          <h2>СЕЙЧАС<br /><strong>РАЗРАБАТЫВАЕМ</strong></h2>
        </div>

        <div className="progressBox">
          <div className="progressTop">
            <div>
              <span>MAIN PROJECT</span>
              <h3>LAST SHOP</h3>
            </div>

            <strong>12%</strong>
          </div>

          <div className="progressBar">
            <div />
          </div>

          <div className="progressBottom">
            <span>ПРОТОТИП</span>
            <span>ЛОКАЦИИ</span>
            <span>ГЕЙМПЛЕЙ</span>
            <span>СЮЖЕТ</span>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="news section">
        <div className="sectionTop">
          <div>
            <span className="sectionNumber">NEWS</span>
            <h2>ПОСЛЕДНИЕ<br /><strong>СОБЫТИЯ</strong></h2>
          </div>
        </div>

        <div className="newsGrid">
          <article className="featuredNews">
            <span>27.09.2026</span>
            <h3>Началась разработка LAST SHOP</h3>
            <p>
              Мы начали создавать первую локацию игры —
              деревянный дом главного героя в небольшой деревне.
            </p>
            <a href="#news">ЧИТАТЬ →</a>
          </article>

          <article className="newsItem">
            <span>DEVLOG #01</span>
            <h3>Разработка идёт полным ходом</h3>
            <p>Первые элементы окружения уже готовы.</p>
          </article>

          <article className="newsItem">
            <span>ETE GAMES</span>
            <h3>Сайт студии запущен</h3>
            <p>Добро пожаловать в наш новый дом.</p>
          </article>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="studio">
        <div className="studioBig">
          <span>ETERNITY</span>
        </div>

        <div className="studioText">
          <span className="sectionNumber">STUDIO</span>
          <h2>МЫ СОЗДАЁМ<br /><strong>СВОИ МИРЫ.</strong></h2>

          <p>
            ENTER GAMES — небольшая независимая студия,
            которая создаёт собственные игры и экспериментирует
            с разными жанрами.
          </p>

          <div className="studioStats">
            <div>
              <strong>01</strong>
              <span>ИГРА В РАЗРАБОТКЕ</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>ИДЕЙ ВПЕРЕДИ</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo">
          ENTER<span>GAMES</span>
        </div>

        <span>© 2026 ENTER GAMES</span>

        <span>WE CREATE WORLDS.</span>
      </footer>
    </main>
  );
}
