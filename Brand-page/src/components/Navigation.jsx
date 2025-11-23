const Navigation = () => {
  return (
    <header className="nav-wrapper">
      <nav className="container nav">
        <div className="logo">
          <img
            src="/images/brand_logo.png"
            alt="Nike Logo"
            className="logo-img"
          />
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button className="btn-primary">Login</button>
      </nav>
    </header>
  );
};

export default Navigation;
