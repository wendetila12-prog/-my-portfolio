export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="lead mb-5">
              Feel free to reach out for collaboration, freelance work, or just to say hi!
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
              <a href="https://t.me/yabatu27" target="_blank" className="text-decoration-none">
                <div className="p-4 bg-dark rounded-4 shadow-sm hover-zoom">
                  <i className="fab fa-telegram fa-3x text-cyan mb-3"></i>
                  <h5>Telegram</h5>
                  <p className="text-light-gray">@wendti12</p>
                </div>
              </a>

              <a href="https://instagram.com/welloyew" target="_blank" className="text-decoration-none">
                <div className="p-4 bg-dark rounded-4 shadow-sm hover-zoom">
                  <i className="fab fa-instagram fa-3x text-cyan mb-3"></i>
                  <h5>Instagram</h5>
                  <p className="text-light-gray">@welloyew</p>
                </div>
              </a>

              <a
                href="https://github.com/wendmutilahun27-cyber"
                target="_blank"
                className="text-decoration-none"
              >
                <div className="p-4 bg-dark rounded-4 shadow-sm hover-zoom">
                  <i className="fab fa-github fa-3x text-cyan mb-3"></i>
                  <h5>GitHub</h5>
                  <p className="text-light-gray">wendmutilahun27-cyber</p>
                </div>
              </a>
            </div>

            <p className="text-light-gray mt-5">
              Or send me an email:{' '}
              <a href="mailto:wendemnewtilahun@gmail.com" className="text-cyan">
                wendetila12@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}