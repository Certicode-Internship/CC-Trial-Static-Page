function Brand() {
  return (
    <a className="brand" href="#home" aria-label="The Burger Garage home">
      <span className="mark" aria-hidden="true">
        <i className="bun" />
        <i className="fill" />
        <i className="patty" />
        <i className="base" />
        <b>⌁</b>
      </span>
      <span>
        THE BURGER <strong>GARAGE</strong>
      </span>
    </a>
  );
}

export default function Navbar({ onCartClick, onLoginClick }) {
  return (
    <nav className="nav wrap">
      <Brand />
      <div className="nav-links">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#menu">Menu</a>
        <a href="#locations">Locations</a>
        <a href="#about">About us</a>
      </div>
      <div className="nav-actions">
        <button className="cart" type="button" onClick={onCartClick}>
          Cart <em>2</em>
        </button>
        <button className="login" type="button" onClick={onLoginClick}>
          Log in
        </button>
      </div>
    </nav>
  );
}

export { Brand };
