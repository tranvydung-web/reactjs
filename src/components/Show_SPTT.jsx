import { Link, useParams } from "react-router-dom";
import products from "../data/products";

export default function Show_SPTT() {
    const { id } = useParams();

    const product = products.find(sp => sp.id === parseInt(id));

    if (!product) return null;

    const similarProducts = products.filter(
        sp =>
            sp.danhmuc === product.danhmuc &&
            sp.id !== product.id
    );

    return (
        <div className="container mt-5">
            <h4
                className="mb-3"
                style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
            >
                Sản phẩm tương tự
            </h4>

            <div className="row">
                {similarProducts.map(sp => (
                    <div className="col-md-3 mb-3" key={sp.id}>
                        <div className="card h-100">
                            <img
                                src={`/images/${sp.hinh}`}
                                className="card-img-top"
                                alt={sp.tensp}
                                style={{ height: "180px", objectFit: "cover" }}
                            />

                            <div className="card-body text-center">
                                <h6>{sp.tensp}</h6>
                                <p className="text-danger">{sp.gia}đ</p>

                                <Link
                                    to={`/detail/${sp.id}`}
                                    className="btn btn-sm btn-detail"
                                >
                                    Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}