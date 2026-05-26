import { useState } from "react";

function Donate() {
  const [donated, setDonated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDonated(true);
  };

  return (
    <section className="section">
      <div className="container">
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <h1 style={{fontSize:'2rem',fontWeight:900}}>Donate to the Cause</h1>
          <p style={{color:'#9ca3af',marginTop:8}}>Your gift helps us deliver workshops, support survivors, and empower women with skills and confidence.</p>

          <div style={{marginTop:20}}>
            {donated ? (
              <div className="form-card" style={{textAlign:'center'}}>
                <h2 style={{color:'var(--pink)',fontWeight:800}}>Thank You for Donating!</h2>
                <p style={{color:'#d1d5db',marginTop:8}}>We appreciate your support. Your contribution will make a real difference.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-card" style={{display:'grid',gap:12}}>
                <label>
                  <div style={{color:'#d1d5db',marginBottom:6}}>Full name</div>
                  <input className="form-input" type="text" placeholder="Full name" required />
                </label>

                <label>
                  <div style={{color:'#d1d5db',marginBottom:6}}>Email address</div>
                  <input className="form-input" type="email" placeholder="name@example.com" required />
                </label>

                <label>
                  <div style={{color:'#d1d5db',marginBottom:6}}>Donation amount</div>
                  <input className="form-input" type="number" min="1" placeholder="Enter amount" required />
                </label>

                <label>
                  <div style={{color:'#d1d5db',marginBottom:6}}>Donation purpose</div>
                  <select className="form-input" required>
                    <option value="">Select a cause</option>
                    <option value="workshops">Workshops</option>
                    <option value="scholarship">Scholarships</option>
                    <option value="community">Community Support</option>
                    <option value="general">General Fund</option>
                  </select>
                </label>

                <div style={{display:'flex',gap:12}}>
                  <button type="submit" className="btn btn-primary" style={{flex:1}}>Continue to Donate</button>
                  <a href="/" className="btn btn-ghost" style={{alignSelf:'center'}}>Back</a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donate;
