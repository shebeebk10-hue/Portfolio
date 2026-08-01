export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-px">
        <div className="bg-light rounded-5 py-5 py-md-5 px-4 px-md-5 border border-2">
          <div className="mb-5 py-lg-4">
            <span className="text-uppercase fw-bold d-block mb-3" style={{ fontSize: '12px', letterSpacing: '5px', color: 'var(--color-brand)' }}>The Journey</span>
            <h2 className="serif-title section-title">Career &amp; education</h2>
          </div>

          <div className="timeline-container">
            <div className="timeline-line d-none d-lg-block"></div>

            <div className="row g-4 mb-5 align-items-start position-relative">
              <div className="timeline-dot d-none d-lg-flex"><i className="fa-solid fa-code"></i></div>
              <div className="col-lg-6 pe-lg-5 text-lg-end ps-4 ps-lg-0">
                <span className="fw-bold fs-7 tracking-widest text-uppercase" style={{ color: 'var(--color-brand)' }}>Professional Path</span>
                <h3 className="serif-title fs-1 mt-3 mb-3">Diploma in Software Engineering (DISE)</h3>
                <p className="text-secondary fw-semibold mb-4">Comprehensive Software &amp; Data Expertise</p>
                <p className="text-secondary fs-5 lh-lg ms-lg-auto" style={{ maxWidth: '500px' }}>
                  A rigorous program covering the full development lifecycle. Mastered Python Full Stack, React, and Flutter for cross-platform solutions, alongside HTML, CSS, and Bootstrap.
                  Gained expertise in data management and analytics using MongoDB, SQL, NumPy, Excel, and Power BI, while building desktop interfaces with Tkinter.
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block"></div>
            </div>

            <div className="row g-4 mb-5 align-items-start position-relative">
              <div className="timeline-dot d-none d-lg-flex"><i className="fa-solid fa-graduation-cap"></i></div>
              <div className="col-lg-6 d-none d-lg-block"></div>
              <div className="col-lg-6 ps-lg-5 ps-4">
                <span className="fw-bold fs-7 tracking-widest text-uppercase" style={{ color: 'var(--color-brand)' }}>2025 — Present</span>
                <h3 className="serif-title fs-1 mt-3 mb-3">BCA Student</h3>
                <p className="text-secondary fw-semibold mb-4">IGNOU University (Distance Learning)</p>
                <p className="text-secondary fs-5 lh-lg" style={{ maxWidth: '500px' }}>
                  Currently pursuing a Bachelor of Computer Applications, building a deep foundation in Algorithms, Data Structures, and Software Engineering to create scalable enterprise solutions.
                </p>
              </div>
            </div>

            <div className="row g-4 mb-5 align-items-start position-relative">
              <div className="timeline-dot d-none d-lg-flex"><i className="fa-solid fa-layer-group fs-6"></i></div>
              <div className="col-lg-6 pe-lg-5 text-lg-end ps-4 ps-lg-0">
                <span className="fw-bold fs-7 tracking-widest text-uppercase" style={{ color: 'var(--color-brand)' }}>2025</span>
                <h3 className="serif-title fs-1 mt-3 mb-3">Web Architecture</h3>
                <p className="text-secondary fw-semibold mb-4">Advanced Development Intensive</p>
                <p className="text-secondary fs-5 lh-lg ms-lg-auto" style={{ maxWidth: '500px' }}>
                  Deep-dived into modern web protocols and RESTful design. Bridging the gap between simple coding and professional-grade software engineering.
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block"></div>
            </div>

            <div className="row g-4 mb-5 align-items-start position-relative">
              <div className="timeline-dot d-none d-lg-flex"><i className="fa-solid fa-layer-group"></i></div>
              <div className="col-lg-6 d-none d-lg-block"></div>
              <div className="col-lg-6 ps-lg-5 ps-4">
                <span className="fw-bold fs-7 tracking-widest text-uppercase" style={{ color: 'var(--color-brand)' }}>2023 — 2025</span>
                <h3 className="serif-title fs-1 mt-3 mb-3">Higher Secondary</h3>
                <p className="text-secondary fw-semibold mb-4">Mariyumma Memorial Higher Secondary School</p>
                <p className="text-secondary fs-5 lh-lg" style={{ maxWidth: '500px' }}>
                  Completed Plus Two with a focus on Computer Science and Mathematics. Developing an early, dedicated passion for complex logic-building and professional-grade algorithmic problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
