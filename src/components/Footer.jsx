function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        <div>
          <h1 style={{fontSize:'1.75rem',fontWeight:900,color:'var(--pink)'}}>She Can Foundation</h1>
          <p style={{color:'#9ca3af',marginTop:'.75rem',maxWidth:'40ch'}}>
            Empowering women through education, support, and opportunities for a brighter tomorrow.
          </p>
        </div>

        <div style={{textAlign:'right'}}>
          <h2 style={{fontSize:'1.25rem',fontWeight:700,marginBottom:'.5rem'}}>Contact</h2>
          <p style={{color:'#9ca3af'}}>president@shecanfoundation.org</p>
          <p style={{color:'#9ca3af',marginTop:'.5rem'}}>+91 8283841830</p>
        </div>

      </div>

      <div style={{textAlign:'center',color:'#9ca3af',marginTop:'1.25rem'}}>© 2026 She Can Foundation. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;