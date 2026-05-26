import ngo from "../assets/ngo.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background Image */}
      <img src={ngo} alt="ngo" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:.25}} />
      <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.7)'}} />

      <div className="hero-inner">
        <h1 className="responsive-hero hero-title">
          Empowering Women,
          <br />
          <span style={{color:'var(--pink)'}}>Changing Lives</span>
        </h1>

        <p className="hero-sub">
          Together we can create opportunities, spread education,
          and build a stronger future for every woman.
        </p>

        <div className="hero-ctas">
          <a href="/volunteer" className="btn btn-primary">Become a Volunteer</a>
          <a href="/donate" className="btn btn-ghost">Donate Now</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;