import "../styles/Hero.css";

function Hero({ heroCaptionContent }) {
  return (
    <header className="hero">
      <h1 className="hero__caption">{heroCaptionContent}</h1>
    </header>
  );
}

export default Hero;
