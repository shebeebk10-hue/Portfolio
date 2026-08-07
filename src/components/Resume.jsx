export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-light">
      <div className="container-px text-center">
        <span className="text-uppercase fw-bold d-block mb-4" style={{ fontSize: '12px', letterSpacing: '5px', color: 'var(--color-brand)' }}>Curriculum Vitae</span>
        <h2 className="serif-title section-title mb-4">Resume</h2>
        <p className="text-secondary fs-4 mb-5 mx-auto" style={{ maxWidth: '650px' }}>Click below to view or download my professional experience and technical background.</p>


<div className="dropdown d-inline-block me-3">
  <button
    className="btn btn-outline-warning border-2 rounded-pill py-2 px-4 fw-bold dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    style={{ color: 'var(--color-brand)', borderColor: 'var(--color-brand)' }}
  >
    View Resume
  </button>

  <ul className="dropdown-menu">



<li>
  <a
    className="dropdown-item"
    href="/resumes/Resume_Frontend_Developer.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Frontend Developer
  </a>
</li>

<li>
  <a
    className="dropdown-item"
    href="/resumes/Resume_Python_FullStack_Developer.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Python Full Stack Developer
  </a>
</li>

<li>
  <a
    className="dropdown-item"
    href="/resumes/Resume_Django_Developer.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Django Developer
  </a>
</li>

<li>
  <a
    className="dropdown-item"
    href="/resumes/Resume_Data_Analyst.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Data Analyst
  </a>
</li>

<li>
  <a
    className="dropdown-item"
    href="/resumes/Resume_React_Developer.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    React Developer
  </a>
</li>



  </ul>
</div>

<div className="dropdown d-inline-block">
  <button
    className="btn-brand-pill dropdown-toggle py-2 px-4"
    type="button"
    data-bs-toggle="dropdown"
  >
    Download PDF
  </button>

  <ul className="dropdown-menu">

<li>
  <a
    className="dropdown-item"
    href="/resumes/Resume_Frontend_Developer.pdf"
    download
  >
    Frontend Developer
  </a>
</li>

<li>
  <a
    className="dropdown-item"
    href="/resumes/Resume_Python_FullStack_Developer.pdf"
    download
  >
    Python Full Stack Developer
  </a>
</li>

<li>
  <a
    className="dropdown-item"
    href="/resumes/Resume_Django_Developer.pdf"
    download
  >
    Django Developer
  </a>
</li>

<li>
  <a
    className="dropdown-item"
    href="/resumes/Resume_Data_Analyst.pdf"
    download
  >
    Data Analyst
  </a>
</li>

<li>
  <a
    className="dropdown-item"
    href="/resumes/Resume_React_Developer.pdf"
    download
  >
    React Developer
  </a>
</li>

  </ul>
</div>


      </div>
    </section>
  );
}
