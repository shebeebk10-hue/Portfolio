export default function BackendProjects() {
  return (
    <section id="backend-projects" className="section-padding bg-white">
      <div className="container-px text-center">
        <span className="text-uppercase fw-bold d-block mb-3" style={{ fontSize: '12px', letterSpacing: '5px', color: 'var(--color-brand)' }}>Backend Development</span>
        <h2 className="serif-title section-title mb-4">Backend Systems &amp; Business Solutions</h2>
        <p className="fs-5 text-muted mx-auto mb-5" style={{ maxWidth: '650px' }}>
          A collection of backend - driven applications, business management systems,
          database-powered platforms, and client projects built using Django, Python,
          and modern web technologies. These solutions focus on automation,
          workflow optimization, and real-world business requirements.
        </p>
        <a href="https://shebeebk10-hue.github.io/backend/" target="_blank" className="text-uppercase fw-bold"
           style={{ fontSize: '12px', letterSpacing: '3px', color: 'var(--color-brand)', textDecoration: 'none', borderBottom: '2px solid var(--color-brand)', paddingBottom: '6px' }}>
          Explore Systems
        </a>
      </div>
    </section>
  );
}
