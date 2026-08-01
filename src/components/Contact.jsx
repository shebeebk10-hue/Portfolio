export default function Contact() {
  return (
    <section id="contact" className="section-padding text-white" style={{ backgroundColor: 'var(--color-dark)' }}>
      <div className="container-px">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="text-uppercase fw-bold d-block mb-4" style={{ fontSize: '12px', letterSpacing: '5px', color: 'var(--color-brand)' }}>Connect</span>
            <h2 className="serif-title mb-4" style={{ fontSize: 'clamp(48px, 6vw, 90px)', lineHeight: '1' }}>Let's talk.</h2>
            <p className="text-secondary fs-4 mb-5">Open for collaborations and full-time opportunities.</p>
            <div className="d-flex flex-column gap-4">
              <div>
                <p className="text-uppercase fw-bold text-secondary mb-2" style={{ fontSize: '10px', letterSpacing: '2px' }}>Email Me</p>
                <a
                  href="mailto:shebeebk10@gmail.com"
                  className="fs-3 text-decoration-none fw-medium text-white border-bottom pb-2"
                  style={{ borderColor: '#4b5563', transition: 'color 0.3s' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-brand)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}
                >
                  shebeebk10@gmail.com
                </a>
              </div>
              <div>
                <p className="text-uppercase fw-bold text-secondary mb-2" style={{ fontSize: '10px', letterSpacing: '2px' }}>WhatsApp</p>
                <a
                  href="https://wa.me/918921036219"
                  target="_blank"
                  className="fs-3 text-decoration-none fw-medium text-white border-bottom pb-2"
                  style={{ borderColor: '#4b5563', transition: 'color 0.3s' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#25D366')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form action="https://formspree.io/f/yourformid" method="POST" className="p-4 p-md-5 rounded-5 border d-flex flex-column gap-4" style={{ backgroundColor: '#222', borderColor: '#4b5563' }}>
              <div className="row g-4">
                <div className="col-md-6 d-flex flex-column gap-2">
                  <label className="text-uppercase fw-bold text-secondary" style={{ fontSize: '10px', letterSpacing: '2px' }}>Name</label>
                  <input type="text" name="name" required className="form-control form-custom-input" />
                </div>
                <div className="col-md-6 d-flex flex-column gap-2">
                  <label className="text-uppercase fw-bold text-secondary" style={{ fontSize: '10px', letterSpacing: '2px' }}>Email</label>
                  <input type="email" name="email" required className="form-control form-custom-input" />
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <label className="text-uppercase fw-bold text-secondary" style={{ fontSize: '10px', letterSpacing: '2px' }}>Message</label>
                <textarea name="message" rows="4" required className="form-control form-custom-input"></textarea>
              </div>
              <button type="submit" className="btn btn-warning py-3 text-white fw-bold fs-5 rounded-pill mt-3" style={{ backgroundColor: 'var(--color-brand)', border: 'none' }}>Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
