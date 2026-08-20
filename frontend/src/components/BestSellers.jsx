const burgers = [
  {
    name: "The Classic Smash",
    description:
      "Double smashed patties, American cheddar, garage sauce, and house pickles.",
    price: "$12.99",
    position: "8% 73%",
  },
  {
    name: "Spicy Jalapeño Heat",
    description:
      "Crispy bacon, flame-roasted jalapeños, cheddar, and spicy ranch.",
    price: "$14.29",
    position: "50% 76%",
  },
  {
    name: "Truffle Mushroom",
    description:
      "Sautéed wild mushrooms, Swiss cheese, truffle aioli, and arugula.",
    price: "$15.49",
    position: "84% 74%",
  },
];

export default function BestSellers({ image, onOrder }) {
  return (
    <section className="menu wrap" id="menu">
      <div className="section-head">
        <div>
          <p className="eyebrow">The crowd favorites</p>
          <h2>Our bestsellers</h2>
        </div>
        <a href="#menu">
          See full menu <span>→</span>
        </a>
      </div>
      <div className="product-grid">
        {burgers.map((burger, index) => (
          <article className="product" key={burger.name}>
            <div
              className="product-image"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: burger.position,
              }}
            >
              <span className="number">0{index + 1}</span>
            </div>
            <div className="product-info">
              <h3>{burger.name}</h3>
              <p>{burger.description}</p>
              <div className="card-bottom">
                <b>{burger.price}</b>
                <button type="button" onClick={() => onOrder(burger)}>
                  Order now <span>→</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
