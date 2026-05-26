import { useState } from "react";

function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section">
      <div className="container">
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <h1 style={{fontSize:'2rem',fontWeight:900}}>Volunteer With Us</h1>
          <p style={{color:'#9ca3af',marginTop:8}}>
            Thank you for wanting to join our mission. Please complete the form below and we will contact you soon.
          </p>

          <div style={{marginTop:20}}>
            {submitted ? (
              <div className="form-card" style={{textAlign:'center'}}>
                <h2 style={{color:'var(--pink)',fontWeight:800}}>Application Received!</h2>
                <p style={{color:'#d1d5db',marginTop:8}}>We appreciate your interest — we'll reach out within 24-48 hours.</p>
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
                  <div style={{color:'#d1d5db',marginBottom:6}}>Phone number</div>
                  <input className="form-input" type="tel" placeholder="+91 12345 67890" required />
                </label>

                <label>
                  <div style={{color:'#d1d5db',marginBottom:6}}>Areas of interest</div>
                  <select className="form-input" required>
                    <option value="">Select one</option>
                    <option value="education">Education & Mentoring</option>
                    <option value="events">Events & Outreach</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="communications">Communications</option>
                  </select>
                </label>

                <label>
                  <div style={{color:'#d1d5db',marginBottom:6}}>Short message</div>
                  <textarea className="form-input" rows={5} placeholder="Tell us why you'd like to volunteer" required />
                </label>

                <div style={{display:'flex',gap:12}}>
                  <button type="submit" className="btn btn-primary" style={{flex:1}}>Submit Volunteer Form</button>
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

export default VolunteerForm;
