import { useParams } from "react-router-dom";
import { useState } from "react";
import { useLayoutEffect } from "react";
// import products from "../data/data.json";
import products from "../data/products";

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
            <div className="detail-wrapper">
                <div className="row">

                    {/* IMAGE */}
                    <div className="col-md-6">

                        <div className="detail-image-box">

                            <img
                                src={`/images/${product.hinh}`}
                                alt={product.tensp}
                                className="detail-main-img"
                            />

                        </div>

                        {/* THUMBNAIL */}
                        <div className="d-flex gap-2 mt-3">

                            <img src={`/images/${product.hinh}`} className="detail-thumb" />
                            <img src={`/images/${product.hinh}`} className="detail-thumb" />
                            <img src={`/images/${product.hinh}`} className="detail-thumb" />

                        </div>

                    </div>

                    {/* INFO */}
                    <div className="col-md-6">

                        <div className="detail-info-box">

                            <h2>{product.tensp}</h2>

                            <p className="text-muted">
                                {product.mota}
                            </p>

                            <h4 className="text-primary">{product.gia}đ</h4>

                            <p><strong>Loại:</strong> {product.danhmuc}</p>

                            <hr />

                            <p><strong>Thành phần:</strong> {product.thanhphan}</p>
                            <p><strong>Kích thước:</strong> {product.kichthuoc}</p>
                            <p><strong>Hương vị:</strong> {product.huongvi}</p>
                            <p><strong>Bảo quản:</strong> {product.baquan}</p>

                            {/* SỐ LƯỢNG */}
                            <div className="d-flex align-items-center gap-3 my-3">

                                <strong>Số lượng:</strong>

                                <button
                                    className="btn btn-outline-cake"
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
                                    className="btn btn-outline-cake"
                                    onClick={() => setQty(qty + 1)}
                                >
                                    +
                                </button>

                            </div>

                            <button className="btn btn-cake">
                                Thêm vào giỏ hàng
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
