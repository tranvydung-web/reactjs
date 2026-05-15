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
      .get("https://firestore.googleapis.com/v1/projects/tiembanh-3b756/databases/(default)/documents/products")
      .then((res) => {
        // 1. Kiểm tra xem có dữ liệu trả về không
        if (res.data.documents) {
          // 2. Chuyển đổi cấu trúc khó hiểu của Firebase thành mảng dễ dùng
          const ds = res.data.documents.map((doc) => {
            const fields = doc.fields;
            return {
              id: fields.id?.stringValue || "0",
              tensp: fields.tensp?.stringValue || "Chưa có tên",
              gia: parseInt(fields.gia?.integerValue || 0),
              hinh: fields.hinh?.stringValue || ""
            };
          });
          setProducts(ds);
        } else {
          setProducts([]);
        }
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
                <img src={item.hinh} className="card-img-top img-fluid product-img" />
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
