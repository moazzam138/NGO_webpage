function Impact() {
  const data = [
    { number: "500+", title: "Women Helped" },
    { number: "100+", title: "Volunteers" },
    { number: "50+", title: "Workshops" },
  ];

  return (
    <section id="impact" className="section">
      <div className="container" style={{textAlign:'center'}}>
        <h2 style={{fontSize:'2.5rem',fontWeight:900,marginBottom:'1.5rem'}}>Our <span style={{color:'var(--pink)'}}>Impact</span></h2>

        <div className="impact-grid">
          {data.map((item, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{item.number}</div>
              <div className="stat-title">{item.title}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Impact;
