export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-black bg-opacity-25">
      <div className="container">
        <h2 className="section-title text-center">Featured Projects</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card p-4">
              <h3 className="h4 fw-bold mb-3">Student Course Enrollment System</h3>
              <p className="text-light-gray">
                Web-based platform for student online registration and admin panel management.
              </p>
              <div className="mt-4">
                <span className="badge tech-badge me-2">PHP</span>
                <span className="badge tech-badge me-2">MySQL</span>
                <span className="badge tech-badge">Bootstrap</span>
              </div>
              <a
                href="https://github.com/wendmutilahun27-cyber"
                target="_blank"
                className="btn btn-outline-light mt-4"
              >
                View on GitHub <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4">
              <h3 className="h4 fw-bold mb-3">University Management System</h3>
              <p className="text-light-gray">
                Full administrative system for managing students, staff, courses & grades.
              </p>
              <div className="mt-4">
                <span className="badge tech-badge me-2">Full-Stack</span>
                <span className="badge tech-badge me-2">PHP</span>
                <span className="badge tech-badge">MySQL</span>
              </div>
              <a
                href="https://github.com/wendmutilahun27-cyber"
                target="_blank"
                className="btn btn-outline-light mt-4"
              >
                View on GitHub <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}