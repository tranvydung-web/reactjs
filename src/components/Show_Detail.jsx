import { useParams } from "react-router-dom";
import { useState } from "react";
import { useLayoutEffect } from "react";
import products from "../data/product";

export default function Show_Detail() {
    const { id } = useParams();
    const product = products.find(sp => sp.id === parseInt(id));
    const [qty, setQty] = useState(1);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div className="container my-5"><h2>Sản phẩm không tồn tại</h2></div>;
    }

    return (
        <div className="container my-5">
            <div className="row">

                {/* IMAGE */}
                <div className="col-md-6">

                    {/* ẢNH CHÍNH */}
                    <div className="border rounded p-2 shadow-sm">
                        <img
                            src={`/images/${product.hinh}`}
                            alt={product.tensp}
                            className="img-fluid w-100"
                            style={{
                                height: "420px",
                                objectFit: "cover",
                                borderRadius: "10px"
                            }}
                        />
                    </div>

                    {/* THUMBNAIL GIẢ (cho giống shop) */}
                    <div className="d-flex gap-2 mt-3">

                        <img
                            src={`/images/${product.hinh}`}
                            alt=""
                            style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                border: "2px solid #ddd",
                                cursor: "pointer"
                            }}
                        />

                        <img
                            src={`/images/${product.hinh}`}
                            alt=""
                            style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                border: "2px solid #ddd",
                                cursor: "pointer"
                            }}
                        />

                        <img
                            src={`/images/${product.hinh}`}
                            alt=""
                            style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                border: "2px solid #ddd",
                                cursor: "pointer"
                            }}
                        />

                    </div>

                </div>

                {/* INFO */}
                <div className="col-md-6">

                    <h2>{product.tensp}</h2>
                    <p className="text-muted">{product.mota}</p>

                    <h4 className="text-primary">{product.gia}đ</h4>

                    <p><strong>Loại:</strong> {product.danhmuc}</p>

                    {/* ✨ THÔNG TIN MỞ RỘNG */}
                    <hr />

                    <p><strong>Thành phần:</strong> {product.thanhphan}</p>
                    <p><strong>Kích thước:</strong> {product.kichthuoc}</p>
                    <p><strong>Hương vị:</strong> {product.huongvi}</p>
                    <p><strong>Bảo quản:</strong> {product.baquan}</p>

                    {/* SỐ LƯỢNG */}
                    <div className="d-flex align-items-center gap-3 my-3">

                        <strong>Số lượng:</strong>

                        <div className="d-flex align-items-center">

                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                            >
                                -
                            </button>

                            <input
                                type="text"
                                value={qty}
                                readOnly
                                className="form-control text-center"
                                style={{ width: "60px" }}
                            />

                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => setQty(qty + 1)}
                            >
                                +
                            </button>

                        </div>
                    </div>

                    <button
                        className="btn btn-success"
                        onClick={() => {
                            console.log("Sản phẩm:", product.tensp);
                            console.log("Số lượng:", qty);
                        }}
                    >
                        Thêm vào giỏ hàng
                    </button>

                </div>
            </div>
        </div>
    );
}
