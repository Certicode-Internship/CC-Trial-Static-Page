import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReserveTable from "./components/ReserveTable";
import BestSellers from "./components/BestSellers";
import Hero from "./components/Hero";
import heroImage from "./assets/burger-garage-hero.png";
import "./style.css";

function App() {
  const [notice, setNotice] = useState("");
  const [isNoticeClosing, setIsNoticeClosing] = useState(false);
  const autoDismissRef = useRef(null);
  const closeAnimationRef = useRef(null);

  const dismissNotice = () => {
    window.clearTimeout(autoDismissRef.current);
    setIsNoticeClosing(true);
    closeAnimationRef.current = window.setTimeout(() => {
      setNotice("");
      setIsNoticeClosing(false);
    }, 220);
  };

  const showNotice = (message) => {
    window.clearTimeout(autoDismissRef.current);
    window.clearTimeout(closeAnimationRef.current);
    setIsNoticeClosing(false);
    setNotice(message);
    autoDismissRef.current = window.setTimeout(dismissNotice, 3000);
  };

  useEffect(
    () => () => {
      window.clearTimeout(autoDismissRef.current);
      window.clearTimeout(closeAnimationRef.current);
    },
    [],
  );

  return (
    <main>
      <Navbar
        onCartClick={() =>
          showNotice("Your cart is waiting for a masterpiece.")
        }
        onLoginClick={() => showNotice("Welcome back to the garage.")}
        onComingSoonClick={() => showNotice("This feature is coming soon.")}
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
          className={`notice-popup fixed right-5.5 bottom-5.5 z-10 max-w-[calc(100vw-44px)] rounded-[3px] bg-cheddar py-4 pr-10.75 pl-4.5 font-bold text-[#21170f] shadow-[0_12px_30px_#0007] ${isNoticeClosing ? "notice-popup--closing" : ""}`}
          role="status"
        >
          {notice}
          <button
            aria-label="Close message"
            className="absolute top-2 right-2.75 border-0 bg-transparent text-2xl"
            type="button"
            onClick={dismissNotice}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
