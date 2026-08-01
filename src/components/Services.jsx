const services = [
  { num: '01', icon: 'fa-solid fa-code-merge', title: 'Full-Stack Web Apps', text: 'End-to-end development using Django and React. I build seamless, scalable platforms that handle complex logic and high user traffic.' },
  { num: '02', icon: 'fa-solid fa-mobile-screen-button', title: 'Mobile Solutions', text: 'Leveraging Flutter to create high-performance iOS and Android applications from a single codebase, saving time without sacrificing quality.' },
  { num: '03', icon: 'fa-solid fa-chart-line', title: 'Business Intelligence', text: 'Transforming raw data into visual stories. I use Power BI and Python to help businesses make data-driven decisions.' },
  { num: '04', icon: 'fa-solid fa-database', title: 'Data Architecture', text: 'Designing efficient SQL and NoSQL (MongoDB) schemas to ensure your application data is organized, secure, and fast.' },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-px">
        <div className="row align-items-end mb-5">
          <div className="col-lg-6">
            <span className="text-uppercase fw-bold d-block mb-3" style={{ fontSize: '12px', letterSpacing: '5px', color: 'var(--color-brand)' }}>Solutions</span>
            <h2 className="serif-title section-title mb-0">How I Can Help</h2>
          </div>
          <div className="col-lg-6 text-lg-end d-none d-lg-block">
            <p className="text-secondary mb-2">Turning complex problems into elegant digital solutions.</p>
          </div>
        </div>

        <div className="services-list mt-5">
          {services.map((service) => (
            <div className="service-item py-4 border-bottom position-relative" key={service.num}>
              <div className="row align-items-center g-4">
                <div className="col-md-1 d-none d-md-block"><span className="fs-4 fw-light text-secondary-50">{service.num}</span></div>
                <div className="col-md-4"><h3 className="serif-title fs-2 mb-0">{service.title}</h3></div>
                <div className="col-md-5"><p className="text-secondary mb-0">{service.text}</p></div>
                <div className="col-md-2 text-md-end"><div className="skill-icon d-inline-block m-0" style={{ fontSize: '1.5rem' }}><i className={service.icon}></i></div></div>
              </div>
              <div className="hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
