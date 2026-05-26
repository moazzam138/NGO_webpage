function About() {
  return (
    <section id="about" className="section">
      <div className="container two-col">

        <div>
          <h2 style={{fontSize:'2.5rem',fontWeight:900,marginBottom:'1rem'}}>About <span style={{color:'var(--pink)'}}>Us</span></h2>

          <p style={{color:'#d1d5db',fontSize:'1.05rem',lineHeight:1.8}}>
            She Can Foundation is dedicated to empowering women
            through education, awareness, skill development,
            and community support.

            <br /><br />

            Our mission is to inspire confidence,
            create opportunities, and help women
            become financially and socially independent.
          </p>
        </div>

        <div style={{background:'linear-gradient(180deg, rgba(255,46,139,0.06), rgba(255,46,139,0.02))',border:'1px solid rgba(255,46,139,0.12)',borderRadius:'1rem',padding:'1.5rem'}}>
          <h3 style={{fontSize:'1.5rem',fontWeight:800,color:'var(--pink)',marginBottom:'.75rem'}}>Our Vision</h3>

          <p style={{color:'#d1d5db',lineHeight:1.7}}>
            We believe every woman deserves equal opportunities,
            respect, safety, and the power to achieve her dreams.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
