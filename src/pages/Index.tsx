export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">PAPA*JOE'S</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">События</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Забронировать стол</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЕДА КАК
              <br />
              В <span>ДЕТСТВЕ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Американская закусочная с душой. Сочные бургеры, хрустящие картошка-фри и молочные шейки — всё как в кино
              про 70-е. Ни лишнего, только настоящее.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="/menu" className="btn-cta" style={{ background: "var(--primary)", color: "white", textDecoration: "none" }}>
                Смотреть меню
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Наш адрес
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ОТКРЫТЫ
              <br />
              С 12:00
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #РЕТРОВАЙБ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              С 1974
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * БУРГЕРЫ ИЗ МРАМОРНОЙ ГОВЯДИНЫ * КАРТОШКА-ФРИ НА ГОВЯЖЬЕМ ЖИРЕ * МОЛОЧНЫЕ ШЕЙКИ 7 ВКУСОВ * ЖИВАЯ
            МУЗЫКА ПО ПЯТНИЦАМ * ДЕТСКОЕ МЕНЮ * БУРГЕРЫ ИЗ МРАМОРНОЙ ГОВЯДИНЫ * КАРТОШКА-ФРИ НА ГОВЯЖЬЕМ ЖИРЕ *
            МОЛОЧНЫЕ ШЕЙКИ 7 ВКУСОВ * ЖИВАЯ МУЗЫКА ПО ПЯТНИЦАМ * ДЕТСКОЕ МЕНЮ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ТОП ЗАКАЗОВ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Полное меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Папа Джо Бургер"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Папа Джо</h3>
                  <span className="price">690 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двойная котлета из мраморной говядины, хрустящий бекон, карамельный лук и фирменный соус «Ретро».
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Острое
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Пицца 70-х"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Пицца «Семидесятые»</h3>
                  <span className="price">890 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Пепперони, халапеньо, моцарелла буффало и томатный соус по рецепту 1974 года.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Новинка
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Шейк Черри Бомб"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Шейк «Черри Бомб»</h3>
                  <span className="price">390 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Настоящее мороженое, вишнёвый сироп ручной работы и взбитые сливки горкой.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЕСТО, КОТОРОЕ ПОМНИТ.</h2>
            <p className="vibe-text">
              Papa Joe's — это не просто ресторан. Это машина времени. Виниловые пластинки на стенах, красные диваны из
              кожзама, запах жареной картошки и рок-н-ролл из колонок. Здесь не нужен повод — просто приходи голодным.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @PAPAJOES.DINER
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера дайнера"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Наши блюда"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Десерты"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Интерьер"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">PAPA*JOE'S</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Американская закусочная в духе 70-х. Настоящая еда, настоящая атмосфера, настоящий вкус.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                События
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт–Чт: 12:00 – 23:00</li>
            <li>Пт–Сб: 12:00 – 02:00</li>
            <li>Вс: 12:00 – 22:00</li>
            <li>Пн: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2024 PAPA JOE'S DINER</span>
          <span>ЕДА КАК В ДЕТСТВЕ</span>
          <span>VK / TG / IG</span>
        </div>
      </footer>
    </>
  );
}