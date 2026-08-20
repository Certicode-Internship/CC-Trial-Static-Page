function Brand() {
  return (
    <a
      className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-[25px] leading-none font-extrabold tracking-[.3px] max-sm:text-[21px]"
      href="#home"
      aria-label="The Burger Garage home"
    >
      <span
        className="relative h-10 w-11 -rotate-2 text-[#f4ac4c] max-sm:scale-90"
        aria-hidden="true"
      >
        <i className="absolute top-0.5 left-1.25 h-3.25 w-7.5 rounded-t-[3px] border-[3px] border-b-0 border-current" />
        <i className="absolute top-4 left-1.25 h-1.25 w-7.5 border-y-2 border-current" />
        <i className="absolute top-5.75 left-1.25 h-1.5 w-7.5 rounded-[1.5px] bg-current" />
        <i className="absolute top-7.5 left-1.25 h-1.75 w-7.5 rounded-b-[3px] border-[3px] border-t-0 border-current" />
        <b className="absolute -right-px -bottom-1 -rotate font-serif text-[27px] font-black">
          ⌁
        </b>
      </span>
      <span>
        THE BURGER <strong className="text-[#efab55]">GARAGE</strong>
      </span>
    </a>
  );
}

export default function Navbar({ onCartClick, onLoginClick }) {
  return (
    <nav className="relative z-10 mx-auto flex h-22.75 w-[min(1190px,calc(100%-48px))] items-center justify-between gap-6.5 bg-ink max-sm:h-18 max-sm:w-[min(1190px,calc(100%-30px))]">
      <Brand />
      <div className="ml-auto flex gap-9 max-md:gap max-sm:hidden">
        <a
          className="border-b-2 border-cheddar py-2 font-display text-sm font-bold uppercase tracking-[.8px] text-[#efaa50]"
          href="#home"
        >
          Home
        </a>
        <a
          className="py-2 font-display text-sm font-bold uppercase tracking-[.8px] text-[#eee6d9]"
          href="#menu"
        >
          Menu
        </a>
        <a
          className="py-2 font-display text-sm font-bold uppercase tracking-[.8px] text-[#eee6d9]"
          href="#home"
        >
          Locations
        </a>
        <a
          className="py-2 font-display text-sm font-bold uppercase tracking-[.8px] text-[#eee6d9]"
          href="#home"
        >
          About us
        </a>
      </div>
      <div className="flex items-center gap-5 max-sm:ml-auto">
        <button
          className="border-0 bg-transparent font-display text-sm font-bold uppercase text-[#f2eadc] max-sm:hidden"
          type="button"
          onClick={onCartClick}
        >
          Cart{" "}
          <em className="ml-1 inline-grid size-5.25 place-items-center rounded-full bg-[#ed9e45] font-body text-[13px] font-extrabold not-italic text-[#1b1713]">
            2
          </em>
        </button>
        <button
          className="rounded-sm border-0 bg-[#b93627] px-5.25 py-3 font-display text-[15px] font-extrabold uppercase tracking-[.5px] text-white shadow-[inset_0_-2px_rgba(0,0,0,.2)] max-sm:px max-sm:py-2.5"
          type="button"
          onClick={onLoginClick}
        >
          Log in
        </button>
      </div>
    </nav>
  );
}

export { Brand };
