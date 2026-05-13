import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useEffect } from "react";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [openDanhMuc, setOpenDanhMuc] = useState(false);
  useEffect(() => {
    const handleClick = () => setOpenDanhMuc(false);
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div>
      <header className="frame-header border-bottom py-2">
        <div className="container-fluid px-4">
          <div className="row text-center align-items-center">
            <div className="col-md-4">
              📞 HOTLINE: <b>0909345678</b>
            </div>
            <div className="col-md-4">🎁 Ưu đãi mỗi ngày cho khách hàng</div>
            <div className="col-md-4">
              <button className="btn btn-outline-dark btn-sm me-2" id="btn-login" onClick={() => setShowLogin(true)}>
                Đăng nhập
              </button>
              <button className="btn btn-dark btn-sm" id="btn-giohang">
                👜 Giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <div className="container-fluid p-0">
        <div className="row">
          <nav className="navbar navbar-expand-sm navbar-dark px-4">
            <div className="container-fluid">

              <a className="navbar-brand" href="#">
                Cake Bakery
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mynavbar">

                {/* LEFT MENU */}
                <ul className="navbar-nav me-auto">

                  <li className="nav-item">
                    <Link className="nav-link" to="/index">Trang chủ</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/gioithieu">Giới thiệu</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/sanpham">Sản phẩm</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/tintuc">Tin tức</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/lienhe">Liên hệ</Link>
                  </li>

                  {/* DROPDOWN (giữ nguyên logic nhưng React-safe) */}
                  <li className="nav-item dropdown position-relative">

                    <span
                      className="nav-link d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDanhMuc(!openDanhMuc);
                      }}
                    >
                      Danh mục <i className="bi bi-chevron-down ms-1"></i>
                    </span>

                    {openDanhMuc && (
                      <ul
                        className="dropdown-menu show border-0 shadow-lg p-3"
                        style={{
                          minWidth: "250px",
                          position: "absolute",
                          top: "100%",
                          left: 0
                        }}
                      >
                        <li className="mb-2">
                          <span className="fw-bold text-dark">Loại bánh</span>
                          <ul className="list-unstyled ps-3 small text-muted">
                            <li>Bánh Cupcake</li>
                            <li>Bánh trái cây</li>
                            <li>Bánh Quy</li>
                            <li>Bánh mặn</li>
                          </ul>
                        </li>

                        <li className="mb-2">
                          <span className="fw-bold text-dark">Bánh đặc biệt</span>
                          <ul className="list-unstyled ps-3 small text-muted">
                            <li>Bánh sinh nhật</li>
                            <li>Combo bánh</li>
                            <li>Bánh dịp lễ</li>
                          </ul>
                        </li>

                        <li>
                          <span className="fw-bold text-dark">Dịch vụ khác</span>
                          <ul className="list-unstyled ps-3 small text-muted">
                            <li>Đặt theo yêu cầu</li>
                            <li>Quà tặng kèm</li>
                          </ul>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>

                {/* SEARCH */}
                <form className="d-flex">
                  <input className="form-control me-2" type="text" placeholder="Search" />
                  <button className="btn btn-primary" type="button">
                    Search
                  </button>
                </form>

              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* 🔹 Hiển thị form đăng nhập */}
      <LoginForm show={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}