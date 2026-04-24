import { useState } from "react";
import "../App.css";

export default function Tranggioithieu() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>

      {/* HEADER */}
      <div className="container">
        <section className="gioithieu_header">
          <div className="header-content text-center">
            <h1>Giới Thiệu</h1>
            <p><a href="/index">Trang chủ</a> / Giới thiệu</p>
          </div>
        </section>
      </div>

      {/* ABOUT */}
      <section className="about py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* IMAGE */}
            <div className="col-md-6">
              <img
                src="images/video1.gif"
                alt=""
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  height: "450px",
                  width: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* TEXT */}
            <div className="col-md-6">
              <h2 className="text-center">Cake Bakery</h2>
              <p>Hương vị ngọt ngào trong từng khoảnh khắc.</p>
              <p>
                Cake Bakery được thành lập với mong muốn mang đến những chiếc bánh tươi ngon mỗi ngày.
                Chúng tôi lựa chọn nguyên liệu tự nhiên và quy trình thủ công tinh tế.
                Mỗi ổ bánh trao đi không chỉ là vị ngọt, mà còn là tâm huyết và niềm hạnh phúc.
              </p>

              <button
                className="btn btn-lg text-white bg-cake px-4 shadow-sm"
                onClick={() => setShowDetail(!showDetail)}
              >
                Xem chi tiết
              </button>

              {showDetail && (
                <div className="mt-4 p-3 bg-white border-start border-4 border-cake shadow-sm rounded">
                  <p className="mb-2">
                    Chúng tôi sử dụng nguyên liệu cao cấp: bơ Pháp, socola Bỉ...
                  </p>

                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">✔ Bánh sinh nhật theo yêu cầu</li>
                    <li className="mb-1">✔ Nhận đặt tiệc – sự kiện</li>
                    <li>✔ Giao hàng tận nơi</li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CHỈ SỐ */}
      <section className="chiso py-4 text-white">
        <div className="container">
          <div className="row text-center g-2">

            <div className="col-6 col-md-3">
              <div className="p-3">
                <h2 className="display-4 fw-bold">10+</h2>
                <p className="lead mb-0">Năm kinh nghiệm</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <h2 className="display-4 fw-bold">50+</h2>
                <p className="lead mb-0">Loại bánh ngọt</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <h2 className="display-4 fw-bold">1k+</h2>
                <p className="lead mb-0">Khách hàng tháng</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <h2 className="display-4 fw-bold">5</h2>
                <p className="lead mb-0">Chi nhánh</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-5 bg-white">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold h1">Đội Ngũ Nghệ Nhân</h2>
            <hr
              className="mx-auto opacity-100"
              style={{ width: "60px", height: "3px", color: "#c89b6d" }}
            />
          </div>

          <div className="row g-4">

            {/* MEMBER 1 */}
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <img
                  src="./images/beptruong.jpg"
                  className="rounded-circle mx-auto mb-3 border border-4 border-light shadow-sm"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  alt=""
                />
                <h5 className="fw-bold">Nguyễn Thị Tường Vân</h5>
                <p className="text-cake small fw-bold">Bếp trưởng</p>
                <p className="text-muted small">
                  15 năm tu nghiệp tại Pháp, mang đến hương vị chuẩn Châu Âu.
                </p>
              </div>
            </div>

            {/* MEMBER 2 */}
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <img
                  src="./images/chuyengiatrangtri.jpg"
                  className="rounded-circle mx-auto mb-3 border border-4 border-light shadow-sm"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  alt=""
                />
                <h5 className="fw-bold">Nguyễn Tuyết Nhung</h5>
                <p className="text-cake small fw-bold">Trang trí</p>
                <p className="text-muted small">
                  Biến mỗi chiếc bánh thành tác phẩm nghệ thuật.
                </p>
              </div>
            </div>

            {/* MEMBER 3 */}
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <img
                  src="./images/tholambanh.jpg"
                  className="rounded-circle mx-auto mb-3 border border-4 border-light shadow-sm"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  alt=""
                />
                <h5 className="fw-bold">Nguyễn Đoàn Thảo Nguyên</h5>
                <p className="text-cake small fw-bold">Thợ làm bánh</p>
                <p className="text-muted small">
                  Đảm bảo bánh mì luôn nóng hổi mỗi sáng.
                </p>
              </div>
            </div>

            {/* MEMBER 4 */}
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <img
                  src="./images/chuyengia.jpg"
                  className="rounded-circle mx-auto mb-3 border border-4 border-light shadow-sm"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  alt=""
                />
                <h5 className="fw-bold">Phạm Ánh Dương</h5>
                <p className="text-cake small fw-bold">Kiểm định chất lượng</p>
                <p className="text-muted small">
                  Đảm bảo mọi sản phẩm đạt chuẩn tuyệt đối.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}