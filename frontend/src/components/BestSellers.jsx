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
    <section
      className="mx-auto w-[calc(100%-48px)] max-w-297.5 py-22.5 max-sm:w-[calc(100%-30px)] max-sm:pt-16.25 max-sm:pb-20.5"
      id="menu"
    >
      <div className="mb-7 flex items-end justify-between">
        <div>
          <p className="mb-2 font-body text-xs font-bold uppercase tracking-[2px] text-[#e6a653]">
            The crowd favorites
          </p>
          <h2 className="m-0 font-display text-[37px] leading-[.9] font-extrabold uppercase tracking-[.3px] max-sm:text-[32px]">
            Our bestsellers
          </h2>
        </div>
        <a
          className="font-display text-sm font-bold uppercase tracking-[.5px] text-[#eeb05e] max-sm:text-[13px]"
          href="#menu"
        >
          See full menu <span>→</span>
        </a>
      </div>
      <div className="grid grid-cols-3 gap-5.5 max-sm:grid-cols-1">
        {burgers.map((burger, index) => (
          <article
            className="grid min-h-46.25 grid-cols-[154px_1fr] border border-[#2e3633] bg-[#1a2121] transition hover:-translate-y-1 hover:border-[#c7843c] max-md:grid-cols-[135px_1fr] max-sm:grid-cols-[160px_1fr]"
            key={burger.name}
          >
            <div
              className="relative border-r border-[#303534] bg-size bg-no-repeat max-sm:bg-size"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: burger.position,
              }}
            >
              <span className="absolute top-2.25 left-2.5 font-display text-[13px] font-extrabold text-[#f0aa52]">
                0{index + 1}
              </span>
            </div>
            <div className="px-4 pt-4.5 pb-3.5">
              <h3 className="mb-2.25 font-display text-[23px] leading-[.94] font-extrabold uppercase">
                {burger.name}
              </h3>
              <p className="m-0 text-xs leading-[1.4] text-[#aeb3aa]">
                {burger.description}
              </p>
              <div className="mt-3.75 flex items-center justify-between">
                <b className="font-display text-[21px] font-bold text-[#f2bd72]">
                  {burger.price}
                </b>
                <button
                  className="rounded-xs border-0 bg-cheddar px-2.25 py-1.75 font-display text-xs font-extrabold uppercase text-[#1e1913]"
                  type="button"
                  onClick={() => onOrder(burger)}
                >
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
