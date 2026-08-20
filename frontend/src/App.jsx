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

      <ReserveTable
        onFindTable={(service) =>
          showNotice(
            `${service} table search started — we’ll show the best available seats.`,
          )
        }
      />
      <BestSellers
        image={heroImage}
        onOrder={(burger) =>
          showNotice(`${burger.name} has been added to your order.`)
        }
      />

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
