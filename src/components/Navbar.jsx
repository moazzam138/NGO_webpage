function Navbar() {
  return (
    <nav className="site-nav">
      <div className="container nav-inner">
        <div className="nav-brand">She Can Foundation</div>

        <ul className="nav-links">
          <li><a className="nav-link" href="/#home">Home</a></li>
          <li><a className="nav-link" href="/#about">About</a></li>
          <li><a className="nav-link" href="/#impact">Impact</a></li>
          <li><a className="nav-link" href="/#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="/donate" className="btn-ghost">Donate</a>
          <a href="/volunteer" className="btn-primary">Join Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
