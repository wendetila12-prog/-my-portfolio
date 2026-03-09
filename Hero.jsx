export default function Hero() {
  return (
    <section className="hero text-center text-white">
      <div className="container">
    <img 
  src="/photo_2026-01-29_21-49-08.jpg" 
  alt="Wendinew Tilahun" 
  className="profile-img mb-5"
/>
        <h1>Wendinew Tilahun</h1>
        <p className="lead mb-4">
          3rd Year Computer Science Student | Full-Stack Developer Enthusiast
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
          <a
            href="https://github.com/wendmutilahun27-cyber"
            target="_blank"
            className="btn btn-outline-light btn-lg px-5"
          >
            <i className="fab fa-github me-2"></i> GitHub
          </a>
          <a href="#contact" className="btn btn-cyan btn-lg px-5">
            <i className="fas fa-envelope me-2"></i> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}