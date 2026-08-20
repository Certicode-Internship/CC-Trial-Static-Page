import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReserveTable from "./components/ReserveTable";
import BestSellers from "./components/BestSellers";
import Hero from "./components/Hero";
import heroImage from "./assets/burger-garage-hero.png";
import "./style.css";

function App() {
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

      <Hero image={heroImage} />

      <ReserveTable />
      <BestSellers
        image={heroImage}
        onOrder={(burger) =>
          showNotice(`${burger.name} has been added to your order.`)
        }
      />

      <Footer />
      {notice && (
        <div
          className="fixed right-5.5 bottom-5.5 z-10 max-w-[calc(100vw-44px)] rounded-[3px] bg-cheddar py-4 pr-10.75 pl-4.5 font-bold text-[#21170f] shadow-[0_12px_30px_#0007]"
          role="status"
        >
          {notice}
          <button
            aria-label="Close message"
            className="absolute top-2 right-2.75 border-0 bg-transparent text-2xl"
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
