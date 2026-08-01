export default function Footer() {
  return (
    <footer className="py-5 text-white" style={{ backgroundColor: 'var(--color-dark)', borderTop: '1px solid #374151' }}>
      <div className="container-px d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
        <div className="serif-title fs-3">SK.</div>
        <p className="text-secondary text-center mb-0" style={{ fontSize: '14px' }}>© 2026 Shebeeb K. Python Full Stack Developer.</p>
        <div className="d-flex gap-4">
          <a href="https://github.com/shebeebk10-hue" target="_blank" className="text-secondary text-uppercase fw-bold text-decoration-none" style={{ fontSize: '11px', letterSpacing: '2px' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/shebeeb-k-00a6a4" target="_blank" className="text-secondary text-uppercase fw-bold text-decoration-none" style={{ fontSize: '11px', letterSpacing: '2px' }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
