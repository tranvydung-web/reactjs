import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./test.css";

export default function ConnectAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data || []);
        /*  res.data → danh sách sản phẩm từ API
            || [] → nếu không có dữ liệu, dùng mảng rỗng*/
      })
      .catch((err) => {
        console.error("Lỗi:", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center w-100">Đang tải...</p>;
  if (error) return <p className="text-center w-100 text-danger">Lỗi khi tải dữ liệu.</p>;

  return (
    <div className="container">
      <h1 className="text-center my-4">
        Danh Sách Sản Phẩm
      </h1>
      <div className="row g-3">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="col-12 col-sm-6 col-md-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img src={`/images/${item.hinh}`} className="card-img-top img-fluid product-img" />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.tensp}</h5>
                  <p className="text-danger fw-bold">{item.gia.toLocaleString()} USD</p>
                  <Link
                    to={`/detail/${item.id}`}
                    className="mt-2" style={{
                      backgroundColor: "#c89b6d",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      display: "inline-block"
                    }}
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">Không tìm thấy sản phẩm nào!</p>
        )}
      </div>
    </div>
  );
}
