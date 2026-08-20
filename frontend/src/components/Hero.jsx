export default function Hero({ image }) {
  return (
    <section className="hero" id="home">
      <div
        className="hero-photo"
        style={{ backgroundImage: `url(${image})` }}
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
  );
}
