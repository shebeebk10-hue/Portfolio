export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-px text-center">
        <span className="text-uppercase fw-bold d-block mb-3" style={{ fontSize: '12px', letterSpacing: '5px', color: 'var(--color-brand)' }}>Selected Works</span>
        <h2 className="serif-title section-title mb-4">Frontend Universe</h2>
        <p className="fs-5 text-muted mx-auto mb-5" style={{ maxWidth: '650px' }}>
          A single curated space containing all my frontend projects, UI experiments, and design concepts
          built into one unified showcase.
        </p>
        <a href="https://shebeebk10-hue.github.io/frontend-universe/" target="_blank" className="text-uppercase fw-bold"
           style={{ fontSize: '12px', letterSpacing: '3px', color: 'var(--color-brand)', textDecoration: 'none', borderBottom: '2px solid var(--color-brand)', paddingBottom: '6px' }}>
          Explore Projects
        </a>
      </div>
    </section>
  );
}
