export default function Footer() {
  return (
    <footer className="text-center">
      <div className="container">
        <div className="mb-4">
          <a href="https://t.me/yabatu27" className="social-icon mx-3">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://instagram.com/welloyew" className="social-icon mx-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/wendmutilahun27-cyber"
            className="social-icon mx-3"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="text-light-gray mb-0">
          © {new Date().getFullYear()} Wendinew Tilahun. All rights reserved.
        </p>
      </div>
    </footer>
  );
}