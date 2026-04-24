export default function Footer() {
  return (
    <footer className="text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Liên hệ</h5>
            <p>📍 123 Nguyễn Văn A, TP.HCM</p>
            <p>📞 0904 749 239</p>
            <p>✉ cakebakery@gmail.com</p>
            <p>🕒 7:00 - 22:00</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Liên kết</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-white text-decoration-none" href="index.html">
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  className="text-white text-decoration-none"
                  href="gioithieu.html">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="product.html">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="#">
                  Tin tức
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="#">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <iframe
              allowFullScreen
              height="150"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6592.422415798043!2d106.63325639581271!3d10.743898726738665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7eaa206499%3A0x7ed7d81c182fa7ca!2zMjE3IMSQLiBOZ3V54buFbiBWxINuIEx1w7RuZywgUGjGsOG7nW5nIDExLCBRdeG6rW4gNiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1773045365894!5m2!1svi!2s"
              style={{
                border: "0",
              }}
              width="450"
            />
          </div>
        </div>
      </div>
      <hr style={{ borderColor: "#fff" }} />
      <div className="text-center pb-3">© 2026 Cake Bakery. All rights reserved.</div>
    </footer>
  );
}
