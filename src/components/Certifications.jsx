const certs = [
  { icon: 'fa-brands fa-python', title: 'Python ATM Simulation', date: '18 Mar 2026', text: 'Essentials Mini Project focusing on object-oriented programming and logic implementation.', file: 'certificate/pythonatm.pdf' },
  { icon: 'fa-brands fa-node-js', title: 'Node.js Bootcamp', date: '23 Mar 2026', text: 'Comprehensive training in server-side JavaScript, REST APIs, and asynchronous programming.', file: 'certificate/nodejs.pdf' },
  { icon: 'fa-solid fa-file-excel', title: 'Excel Bootcamp', date: '06 Mar 2026', text: 'Advanced data manipulation, pivot tables, and visualization techniques for business analytics.', file: 'certificate/excelbootcamp.pdf' },
  { icon: 'fa-brands fa-js', title: 'JavaScript Bootcamp', date: '20 Mar 2026', text: 'Mastering ES6+ features, DOM manipulation, and modern JavaScript development workflows.', file: 'certificate/JSBootcamp.pdf' },
  { icon: 'fa-solid fa-database', title: 'SQL Bootcamp', date: '24 Mar 2026', text: 'Mastering relational databases, complex queries, and database design principles.', file: 'certificate/sqlbootcamp.pdf' },
  { icon: 'fa-solid fa-diagram-project', title: 'GraphQL Mastery', date: '28 Mar 2026', text: 'In-depth study of query languages for APIs, schema design, and optimizing data fetching.', file: 'certificate/GraphQL.pdf' },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Prompt Engineering', date: '02 Apr 2026', text: 'Optimizing LLM interactions through advanced prompting techniques and chain-of-thought reasoning.', file: 'certificate/prompt.pdf' },
  { icon: 'fa-solid fa-palette', title: 'Canva Bootcamp', date: '07 Apr 2026', text: 'Mastering visual design principles, brand identity creation, and professional layout techniques using Canva.', file: 'certificate/canvabootcamp.pdf' },
  { icon: 'fa-solid fa-code', title: 'C++ Bootcamp', date: '10 Apr 2026', text: 'Comprehensive training in C++ programming, covering object-oriented concepts, data structures, memory management, and problem-solving techniques.', file: 'certificate/c++.pdf' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-light">
      <div className="container-px">
        <div className="mb-5">
          <span className="text-uppercase fw-bold d-block mb-3" style={{ fontSize: '12px', letterSpacing: '5px', color: 'var(--color-brand)' }}>Achievements</span>
          <h2 className="serif-title section-title">Certifications</h2>
        </div>
        <div className="row g-4">
          {certs.map((cert) => (
            <div className="col-md-4" key={cert.title}>
              <div className="cert-card">
                <div className="cert-icon-container"><i className={cert.icon}></i></div>
                <h3 className="serif-title fs-3 mb-2">{cert.title}</h3>
                <p className="fw-bold fs-7 mb-3" style={{ color: 'var(--color-brand)' }}>{cert.date}</p>
                <p className="text-secondary mb-4 flex-grow-1">{cert.text}</p>
                <a href={cert.file} target="_blank" className="btn btn-outline-secondary w-100 rounded-pill py-3 text-uppercase fw-bold" style={{ fontSize: '10px', letterSpacing: '2px' }}>View Certificate</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
