import { useState } from "react";

const seasons = [
  {
    id: "winter",
    label: "Зима",
    emoji: "❄️",
    subtitle: "Азия — Япония, Таиланд, Китай",
    color: "#2d31fa",
    regions: [
      {
        name: "Япония",
        items: [
          { name: "Мисо-суп с тофу", desc: "Вода, паста мисо, тофу, зеленый лук, вакаме", price: 180 },
          { name: "Торияки", desc: "Куриное бедро, соевый соус, мирин, кунжут", price: 350 },
          { name: "Рамен с бужениной", desc: "Наваристый бульон, пшеничная лапша, маринованное яйцо, буженина", price: 390 },
          { name: "Тамагояки", desc: "Японский омлет: яйца, сахар, мирин, соевый соус", price: 170 },
        ],
      },
      {
        name: "Таиланд",
        items: [
          { name: "Том Ям с креветками", desc: "Кокосовое молоко, креветки, грибы, лемонграсс", price: 450 },
          { name: "Пад Тай с курицей", desc: "Рисовая лапша, яйцо, соус, арахис", price: 290 },
          { name: "Сом Там", desc: "Салат: зеленая папайя, морковь, чеснок, арахис, сушеные креветки", price: 280 },
          { name: "Том Кха Кай", desc: "Куриный суп с кокосовым молоком, грибами и лемонграссом", price: 330 },
        ],
      },
      {
        name: "Китай",
        items: [
          { name: "Свинина в кисло-сладком соусе", desc: "Свинина, ананасы консерв., перец, лук", price: 340 },
          { name: "Жареный рис с яйцом", desc: "Рис, яйцо, зеленый горошек", price: 150 },
          { name: "Гунбао с курицей", desc: "Курица, арахис, перец чили, соевый соус", price: 330 },
          { name: "Цзяоцзы", desc: "Китайские пельмени: тесто, свинина, пекинская капуста, имбирь", price: 240 },
        ],
      },
    ],
  },
  {
    id: "spring",
    label: "Весна",
    emoji: "🌸",
    subtitle: "Европа — Италия, Испания, Греция",
    color: "#ff4d00",
    regions: [
      {
        name: "Италия",
        items: [
          { name: "Капрезе", desc: "Помидоры, моцарелла, базилик, оливковое масло", price: 320 },
          { name: "Ризотто со спаржей", desc: "Рис арборио, молодая спаржа, пармезан", price: 380 },
          { name: "Пицца Маргарита", desc: "Тесто, томатный соус, моцарелла", price: 250 },
          { name: "Лазанья болоньезе", desc: "Листы лазаньи, мясной соус, бешамель", price: 350 },
          { name: "Тирамису", desc: "Маскарпоне, печенье савоярди, кофе, яйца", price: 300 },
        ],
      },
      {
        name: "Испания",
        items: [
          { name: "Гаспачо", desc: "Холодный суп: помидоры, огурцы, перец, чеснок", price: 210 },
          { name: "Паэлья с морепродуктами", desc: "Рис, мидии, кальмары, креветки", price: 550 },
          { name: "Тапас (ассорти)", desc: "Хамон, оливки, сыр, багет", price: 450 },
          { name: "Чуррос с шоколадом", desc: "Заварное тесто, горячий шоколад", price: 200 },
          { name: "Тортилья испанская", desc: "Яйца, картофель, лук", price: 190 },
        ],
      },
      {
        name: "Греция",
        items: [
          { name: "Греческий салат", desc: "Овощи, фета, маслины", price: 280 },
          { name: "Муссака", desc: "Баклажаны, мясной фарш, соус бешамель", price: 350 },
          { name: "Дзадзики", desc: "Йогурт, огурец, чеснок, укроп", price: 150 },
          { name: "Сувлаки", desc: "Шашлычки из свинины/курицы с лавашом и соусом", price: 320 },
          { name: "Баклава", desc: "Слоеное тесто, орехи, сироп", price: 220 },
        ],
      },
    ],
  },
  {
    id: "summer",
    label: "Лето",
    emoji: "☀️",
    subtitle: "Кавказ — Грузия, Армения, Азербайджан",
    color: "#bff000",
    regions: [
      {
        name: "Грузия",
        items: [
          { name: "Пхали", desc: "Капуста или шпинат с ореховой заправкой", price: 190 },
          { name: "Шашлык из свинины", desc: "Свинина, лук, уксус", price: 450 },
          { name: "Харчо", desc: "Говядина, рис, ткемали", price: 320 },
          { name: "Хачапури по-аджарски", desc: "Тесто, сыр, яйцо, масло", price: 350 },
          { name: "Сацебели", desc: "Соус: помидоры, перец, зелень, чеснок", price: 120 },
        ],
      },
      {
        name: "Армения",
        items: [
          { name: "Долма (толма)", desc: "Виноградные листья, мясной фарш, рис", price: 360 },
          { name: "Лаваш с зеленью и сыром", desc: "Свежий лаваш, зелень, домашний сыр", price: 150 },
          { name: "Хаш", desc: "Говяжьи ноги, чеснок, лаваш", price: 380 },
          { name: "Кюфта", desc: "Тефтели из фарша с рисом", price: 250 },
          { name: "Гата", desc: "Сладкий пирог: тесто, масло, сахар", price: 180 },
        ],
      },
      {
        name: "Азербайджан",
        items: [
          { name: "Кюкю из зелени", desc: "Омлет с зеленью", price: 160 },
          { name: "Садж", desc: "Мясо и овощи на сковороде-садж", price: 430 },
          { name: "Шах-плов", desc: "Плов с фруктами, запеченный в лаваше", price: 420 },
          { name: "Люля-кебаб", desc: "Мясной фарш на гриле", price: 380 },
          { name: "Кутабы с зеленью", desc: "Тонкие пирожки с зеленью", price: 170 },
        ],
      },
    ],
  },
  {
    id: "autumn",
    label: "Осень",
    emoji: "🍂",
    subtitle: "Восточная Европа — Россия, Украина, Беларусь",
    color: "#1a1a1a",
    regions: [
      {
        name: "Россия",
        items: [
          { name: "Борщ с пампушками", desc: "Свекла, капуста, мясной бульон", price: 260 },
          { name: "Пельмени ручной лепки", desc: "Говядина/свинина, тесто", price: 320 },
          { name: "Жаркое с грибами", desc: "Картофель, свинина, лесные грибы", price: 350 },
          { name: "Тыквенный суп-пюре", desc: "Тыква, сливки, имбирь", price: 190 },
          { name: "Блины с начинкой", desc: "Тесто, начинка: творог или мясо", price: 160 },
        ],
      },
      {
        name: "Украина",
        items: [
          { name: "Вареники с картошкой", desc: "Тесто, картофель, грибы", price: 200 },
          { name: "Деруны", desc: "Картофельные оладьи со сметаной", price: 150 },
          { name: "Цыпленок табака", desc: "Курица под прессом", price: 380 },
          { name: "Капустняк", desc: "Суп из квашеной капусты", price: 190 },
          { name: "Пампушки с чесноком", desc: "Дрожжевое тесто, чесночная заправка", price: 90 },
        ],
      },
      {
        name: "Беларусь",
        items: [
          { name: "Драники", desc: "Картофельные оладьи", price: 150 },
          { name: "Мачанка с блинами", desc: "Мясное рагу с блинами", price: 280 },
          { name: "Колдуны", desc: "Картофельные оладьи с мясом", price: 210 },
          { name: "Суп грибной с лапшой", desc: "Сушеные грибы, лапша", price: 200 },
          { name: "Бабка картофельная", desc: "Картофель запеченный с мясом", price: 200 },
        ],
      },
    ],
  },
];

export default function Menu() {
  const [activeSeason, setActiveSeason] = useState("winter");
  const season = seasons.find((s) => s.id === activeSeason)!;

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <a href="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
          PAPA*JOE'S
        </a>
        <nav>
          <a href="/">Главная</a>
          <a href="/menu" style={{ color: "var(--primary)" }}>Меню</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Забронировать стол</button>
      </header>

      <main>
        {/* Page title */}
        <section style={{ padding: "40px 20px 0", borderBottom: "var(--border)" }}>
          <div style={{ maxWidth: "800px", padding: "0 0 40px" }}>
            <h1
              style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: "clamp(36px, 6vw, 80px)",
                fontWeight: 800,
                textTransform: "uppercase",
                lineHeight: 0.9,
                marginBottom: "16px",
              }}
            >
              СЕЗОННОЕ
              <br />
              <span style={{ fontFamily: '"Playfair Display", serif', fontStyle: "italic", color: "var(--primary)" }}>
                Меню
              </span>
            </h1>
            <p style={{ fontSize: "16px", color: "#555", maxWidth: "520px", lineHeight: 1.6 }}>
              Кухня меняется вместе с сезоном — каждый раздел использует лучшие продукты своего времени года.
            </p>
          </div>
        </section>

        {/* Season tabs */}
        <div
          style={{
            display: "flex",
            borderBottom: "var(--border)",
            overflowX: "auto",
            background: "white",
            position: "sticky",
            top: "80px",
            zIndex: 100,
          }}
        >
          {seasons.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSeason(s.id)}
              style={{
                flex: "1 0 auto",
                padding: "16px 24px",
                fontFamily: '"Unbounded", sans-serif',
                fontWeight: 800,
                fontSize: "13px",
                textTransform: "uppercase",
                border: "none",
                borderRight: "var(--border)",
                background: activeSeason === s.id ? s.color : "white",
                color: activeSeason === s.id ? (s.id === "summer" ? "var(--dark)" : "white") : "var(--dark)",
                cursor: "pointer",
                transition: "0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {s.emoji} {s.label}
            </button>
          ))}
        </div>

        {/* Season subtitle */}
        <div
          style={{
            padding: "20px 20px",
            borderBottom: "var(--border)",
            background: "var(--bg)",
          }}
        >
          <p
            style={{
              fontFamily: '"Unbounded", sans-serif',
              fontWeight: 700,
              fontSize: "13px",
              textTransform: "uppercase",
              color: "#888",
              letterSpacing: "2px",
            }}
          >
            {season.subtitle}
          </p>
        </div>

        {/* Regions */}
        {season.regions.map((region) => (
          <section key={region.name} style={{ borderBottom: "var(--border)" }}>
            {/* Region header */}
            <div
              style={{
                padding: "24px 20px 20px",
                borderBottom: "var(--border)",
                background: season.color,
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <h2
                style={{
                  fontFamily: '"Unbounded", sans-serif',
                  fontWeight: 800,
                  fontSize: "clamp(20px, 3vw, 32px)",
                  textTransform: "uppercase",
                  color: season.id === "summer" ? "var(--dark)" : "white",
                  lineHeight: 1,
                }}
              >
                {region.name}
              </h2>
            </div>

            {/* Menu items */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              }}
            >
              {region.items.map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    padding: "24px 20px",
                    borderRight: "var(--border)",
                    borderBottom: "var(--border)",
                    background: i % 2 === 0 ? "white" : "var(--bg)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                    <h3
                      style={{
                        fontFamily: '"Unbounded", sans-serif',
                        fontWeight: 700,
                        fontSize: "15px",
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        flex: 1,
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: '"Unbounded", sans-serif',
                        fontWeight: 800,
                        fontSize: "18px",
                        color: "var(--primary)",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {item.price} ₽
                    </span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
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
            <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</a></li>
            <li><a href="/menu" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
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
