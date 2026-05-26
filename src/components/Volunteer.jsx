function Volunteer() {
  return (
    <section className="section">

      <div className="container" style={{textAlign:'center'}}>

        <h2 style={{fontSize:'2.25rem',fontWeight:900}}>
          Become A <span style={{color:'var(--pink)'}}>Volunteer</span>
        </h2>

        <p style={{color:'#d1d5db',marginTop:'1rem',lineHeight:1.7}}>
          Your support can bring real change in someone's life.
          Join our mission and help us create a better future.
        </p>

        <div style={{marginTop:'1.5rem'}}>
          <a href="/volunteer" className="btn btn-primary">Join Now</a>
        </div>

      </div>
    </section>
  );
}

export default Volunteer;