const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1 className="glow-text">
          YOUR FEET
          <br />
          DESERVE THE
          <br />
          BEST
        </h1>

        <p className="subtext">
          Your comfort matters — and we’re here with premium footwear designed
          for support, style, and durability.
        </p>

        <div className="hero-btn">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Category</button>
        </div>

        <p className="available">Also available on</p>

        <div className="brand-icons">
          <img
            className="brand-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
          />

          <img
            className="brand-logo"
            src="/images/flipkart.png"
            alt="Flipkart"
          />
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="Nike Shoe" />
      </div>
    </main>
  );
};

export default HeroSection;
