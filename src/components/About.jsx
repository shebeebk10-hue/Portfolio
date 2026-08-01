export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-px">
        <div className="row g-5">
          <div className="col-lg-4">
            <span className="text-uppercase fw-bold d-block mb-4" style={{ fontSize: '12px', letterSpacing: '5px', color: 'var(--color-brand)' }}>The Vision</span>
            <h2 className="serif-title" style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: '1.2' }}>Clean code, Powerful logic.</h2>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6">
                <p className="fs-4 text-secondary fw-light lh-lg">
                  I am a Python Full Stack Developer focused on creating seamless digital experiences. From building responsive web interfaces with React and Bootstrap to architecting backend logic with Django and MongoDB.
                </p>
              </div>
              <div className="col-md-6">
                <p className="fs-4 text-secondary fw-light lh-lg">
                  Beyond the web, I specialize in cross-platform mobile development using Flutter and creating high-performance data analysis tools with Python libraries like NumPy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
