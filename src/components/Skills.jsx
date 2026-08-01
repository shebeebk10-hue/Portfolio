const skills = [
  { icon: 'fa-brands fa-python', title: 'Python Development', text: 'Core expertise in Python for automation, scripting, and building complex logic-driven applications.' },
  { icon: 'fa-solid fa-server', title: 'Django Framework', text: 'Building scalable, secure, and robust server-side architectures with a focus on clean API design.' },
  { icon: 'fa-brands fa-react', title: 'React.js', text: 'Crafting dynamic, component-based user interfaces for modern and highly interactive web experiences.' },
  { icon: 'fa-brands fa-html5', title: 'HTML', text: 'Structuring web content with semantic excellence to ensure high accessibility and SEO standards.' },
  { icon: 'fa-brands fa-css3-alt', title: 'CSS & Styling', text: 'Designing responsive, pixel-perfect layouts using modern CSS techniques and animation frameworks.' },
  { icon: 'fa-solid fa-mobile-screen-button', title: 'Mobile (Flutter)', text: 'Developing beautiful, natively compiled cross-platform applications from a single codebase.' },
  { icon: 'fa-solid fa-leaf', title: 'MongoDB (NoSQL)', text: 'Designing flexible, document-oriented database schemas for high-speed, modern applications.' },
  { icon: 'fa-solid fa-database', title: 'MySQL', text: 'Expertise in structured data management, query optimization, and complex relational schema design.' },
  { icon: 'fa-solid fa-calculator', title: 'NumPy & Math', text: 'Leveraging numerical computing for data manipulation and advanced mathematical operations.' },
  { icon: 'fa-solid fa-chart-line', title: 'Power BI', text: 'Creating interactive dashboards and turning raw data into actionable business insights.' },
  { icon: 'fa-solid fa-chart-pie', title: 'Data Analysis', text: 'Deriving trends and patterns from data using scientific Python libraries and visualization tools.' },
  { icon: 'fa-solid fa-file-excel', title: 'Advanced Excel', text: 'Expert use of pivot tables, complex formulas, and data cleaning for rapid business reporting.' },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-light">
      <div className="container-px">
        <div className="mb-5">
          <span className="text-uppercase fw-bold d-block mb-3" style={{ fontSize: '12px', letterSpacing: '5px', color: 'var(--color-brand)' }}>Technological Stack</span>
          <h2 className="serif-title section-title">My Expertise</h2>
        </div>
        <div className="row g-4">
          {skills.map((skill) => (
            <div className="col-md-6 col-lg-4" key={skill.title}>
              <div className="skill-card">
                <div className="skill-icon"><i className={skill.icon}></i></div>
                <h3 className="serif-title fs-3 mb-3">{skill.title}</h3>
                <p className="text-secondary lh-lg">{skill.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
