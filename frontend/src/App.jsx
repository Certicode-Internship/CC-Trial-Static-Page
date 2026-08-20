import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import heroImage from "./assets/burger-garage-hero.png";
import "./style.css";

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

function SelectField({ label, value }) {
  return (
    <button className="select" type="button">
      <small>{label}</small>
      <span>
        {value}
        <i>⌄</i>
      </span>
    </button>
  );
}

function App() {
  const [service, setService] = useState("Dine-in");
  const [notice, setNotice] = useState("");
  const showNotice = (message) => {
    setNotice(message);
    setTimeout(() => setNotice(""), 3000);
  };

  return (
    <main>
      <Navbar
        onCartClick={() =>
          showNotice("Your cart is waiting for a masterpiece.")
        }
        onLoginClick={() => showNotice("Welcome back to the garage.")}
      />

      <section className="hero" id="home">
        <div
          className="hero-photo"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="hero-shade" />
        <div className="hero-copy wrap">
          <p className="eyebrow">Handcrafted smash burgers · est. 2018</p>
          <h1>
            Crafted bold.
            <br />
            <span>Served fresh.</span>
          </h1>
          <p className="subtitle">
            Bigger flavor, better ingredients, and a table with your name on it.
          </p>
          <div className="hero-buttons">
            <a className="btn primary" href="#reservation">
              Reserve a table <span>→</span>
            </a>
            <a className="btn ghost" href="#menu">
              Order pickup / delivery <span>↗</span>
            </a>
          </div>
        </div>
        <div className="hero-note left">
          The
          <br />
          <b>Garage</b>
          <br />
          Burger
        </div>
        <div className="hero-note right">
          Made fresh.
          <br />
          <b>Always.</b>
        </div>
      </section>

      <section className="booking wrap" id="reservation">
        <div className="booking-top">
          <div>
            <p className="eyebrow">Skip the wait</p>
            <h2>Reserve your table</h2>
          </div>
          <div className="toggle" aria-label="Service type">
            {["Dine-in", "Takeaway"].map((option) => (
              <button
                className={service === option ? "selected" : ""}
                key={option}
                type="button"
                onClick={() => setService(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="booking-fields">
          <SelectField label="Party size" value="2 Guests" />
          <SelectField label="Date" value="Today, Aug 25" />
          <SelectField label="Time" value="7:00 PM" />
          <SelectField label="Seating zone" value="Main Dining" />
          <button
            className="btn find"
            type="button"
            onClick={() =>
              showNotice(
                `${service} table search started — we’ll show the best available seats.`,
              )
            }
          >
            Find table <span>→</span>
          </button>
        </div>
      </section>

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
                  backgroundImage: `url(${heroImage})`,
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
                  <button
                    type="button"
                    onClick={() =>
                      showNotice(`${burger.name} has been added to your order.`)
                    }
                  >
                    Order now <span>→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      {notice && (
        <div className="toast" role="status">
          {notice}
          <button
            aria-label="Close message"
            type="button"
            onClick={() => setNotice("")}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
