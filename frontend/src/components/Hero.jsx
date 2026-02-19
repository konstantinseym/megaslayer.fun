import "../styles/Hero.css";
import { Link } from "react-router-dom";
import { useScroll } from "../hooks/useScroll.js";

function Hero() {
  const isScrolled = useScroll();

  return (
    <header className={isScrolled ? "hero hero--scaled" : "hero"}>
      <Link to={"/"}>
        <h1 className="hero__caption">megaslayer.fun</h1>
      </Link>
    </header>
  );
}

export default Hero;