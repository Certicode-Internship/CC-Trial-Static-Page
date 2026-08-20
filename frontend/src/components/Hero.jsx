export default function Hero({ image }) {
  return (
    <section className="relative h-136.25 overflow-hidden max-sm:h" id="home">
      <div
        className="absolute inset-0 bg-cover bg-center saturate-90 max-sm:bg-position-"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,11,.75),rgba(8,11,11,.22)_49%,rgba(8,11,11,.55)),linear-gradient(0deg,rgba(14,17,16,.44),transparent_42%)]" />
      <div className="relative z-1 mx-auto w-[calc(100%-48px)] max-w-297.5 pt-18.75 text-center max-sm:w-[calc(100%-30px)]">
        <p className="mb-2 font-body text-xs font-bold uppercase tracking-[2px] text-[#e6a653]">
          Handcrafted smash burgers · est. 2018
        </p>
        <h1 className="m-0 font-display text-[clamp(58px,7vw,90px)] leading-[.83] font-extrabold tracking-[1px] text-[#f7f0e2] drop-shadow-[0_3px_6px_#000]">
          <span className="text-[#f7f0e2]">Crafted bold.</span>
          <br />
          <span className="text-cheddar">Served fresh.</span>
        </h1>
        <p className="mx-auto mt-5.5 mb-6.25 text-[17px] drop-shadow-[0_2px_4px_#000] max-sm:max-w max-sm:text-sm">
          Bigger flavor, better ingredients, and a table with your name on it.
        </p>
        <div className="flex justify-center gap-3 max-sm:mx-auto max-sm:w max-sm:flex-col">
          <a
            className="inline-flex min-h-12.25 items-center justify-center gap-7.5 rounded-[3px] border border-transparent bg-cheddar px-4.75 font-display text-base font-extrabold uppercase tracking-[.4px] text-[#181615] shadow-[0_4px_10px_rgba(0,0,0,.4)] transition hover:-translate-y-0.5"
            href="#reservation"
          >
            Reserve a table <span>→</span>
          </a>
          <a
            className="inline-flex min-h-12.25   items-center justify-center gap-7.5 rounded-[3px] border border-[#f9f1e4]/75 bg-[#090b0ab8] px-4.75 font-display text-base font-extrabold uppercase tracking-[.4px] text-[#f9f1e4] transition hover:-translate-y-0.5"
            href="#menu"
          >
            Order pickup / delivery <span>↗</span>
          </a>
        </div>
      </div>
      <div className="absolute top-87 left-[14%] z-1 text-right font-display text-lg leading-[.9] font-bold uppercase text-[#f3ead9] drop-shadow-[0_2px_4px_#000] max-md:hidden">
        The
        <br />
        <b className="text-[29px] text-[#eaa34c]">Garage</b>
        <br />
        Burger
      </div>
      <div className="absolute top-87 right-[13%] z-1 font-display text-lg leading-[.9] font-bold uppercase text-[#f3ead9] drop-shadow-[0_2px_4px_#000] max-md:hidden">
        Made fresh.
        <br />
        <b className="text-[29px] text-[#eaa34c]">Always.</b>
      </div>
    </section>
  );
}
