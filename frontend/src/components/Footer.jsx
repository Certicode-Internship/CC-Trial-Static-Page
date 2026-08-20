import { Brand } from "./Navbar";

const defaultLinks = [
  { label: "Locations", href: "#locations" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "mailto:hello@burgergarage.com" },
];

export default function Footer({ links = defaultLinks }) {
  return <footer className="wrap" id="about"><Brand /><p>Built for burger people.</p><div className="foot-links" id="locations">{links.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}</div><small>© 2024 The Burger Garage</small></footer>;
}
