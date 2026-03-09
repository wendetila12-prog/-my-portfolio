export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Technical Skills</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4 col-lg-3">
            <div className="card text-center p-4">
              <div className="mb-3 text-cyan">
                <i className="fas fa-code fa-3x"></i>
              </div>
              <h5 className="fw-bold mb-3">Programming</h5>
              <p>HTML, CSS, JavaScript, PHP, Java, Python</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card text-center p-4">
              <div className="mb-3 text-cyan">
                <i className="fas fa-database fa-3x"></i>
              </div>
              <h5 className="fw-bold mb-3">Databases</h5>
              <p>MySQL (Relational Databases)</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card text-center p-4">
              <div className="mb-3 text-cyan">
                <i className="fas fa-tools fa-3x"></i>
              </div>
              <h5 className="fw-bold mb-3">Tools & Platforms</h5>
              <p>Git, GitHub, VS Code, XAMPP</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card text-center p-4">
              <div className="mb-3 text-cyan">
                <i className="fas fa-users fa-3x"></i>
              </div>
              <h5 className="fw-bold mb-3">Soft Skills</h5>
              <p>Problem Solving, Teamwork, Fast Learner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}