import { Brand } from "./Navbar";

const defaultLinks = [{ label: "Locations", href: "#locations" }, { label: "About us", href: "#about" }, { label: "Contact", href: "mailto:hello@burgergarage.com" }];

export default function Footer({ links = defaultLinks }) {
  return <footer className="mx-auto flex min-h-[142px] w-[calc(100%-48px)] max-w-[1190px] items-center gap-8 border-t border-[#303634] text-[#aaa99f] max-sm:w-[calc(100%-30px)] max-sm:flex-wrap max-sm:gap-4 max-sm:py-[30px]" id="about"><div className="scale-[.76] origin-left text-[#eee4d7]"><Brand /></div><p className="mr-auto text-[13px] max-sm:hidden">Built for burger people.</p><div className="flex gap-[19px] font-display text-xs font-bold uppercase max-sm:order-3 max-sm:w-full">{links.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}</div><small className="text-[11px]">© 2024 The Burger Garage</small></footer>;
}
