import products from "../data/product";
import { Link } from "react-router-dom";

// 🔹 Sản phẩm khuyến mãi
export default function ShowSPKM() {
    const km = products.filter(sp => sp.loaijsp === "spkm");

    return (
        <div className="container">
            <h2 className="my-3 text-center">Sản phẩm khuyến mãi</h2>
            <div className="row">
                {km.map(sp => (
                    <div className="col-md-3" key={sp.id}>
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={`/images/${sp.hinh}`}
                                alt={sp.tensp}
                            />
                            <div className="card-body">
                                <h4 className="card-title">{sp.tensp}</h4>
                                <p className="card-text">{sp.mota}</p>
                                <p className="card-text">{sp.gia}đ</p>
                                <Link className="nav-link" to={`/detail/${sp.id}`}>Xem chi tiết</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 🔹 Sản phẩm bán chạy
export function ShowSPBC() {
    const bc = products.filter(sp => sp.loaijsp === "spbc");

    return (
        <div className="container">
            <h2 className="my-3 text-center">Sản phẩm bán chạy</h2>
            <div className="row">
                {bc.map(sp => (
                    <div className="col-md-3" key={sp.id}>
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={`/images/${sp.hinh}`}
                                alt={sp.tensp}
                            />
                            <div className="card-body">
                                <h4 className="card-title">{sp.tensp}</h4>
                                <p className="card-text">{sp.mota}</p>
                                <p className="card-text">{sp.gia}đ</p>
                                <Link className="nav-link" to={`/detail/${sp.id}`}>Xem chi tiết</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 🔹 Sản phẩm Hot
export function ShowSPH() {
    const hot = products.filter(sp => sp.loaijsp === "sphot");

    return (
        <div className="container mb-3">
            <h2 className="my-3 text-center">Sản phẩm Hot</h2>
            <div className="row">
                {hot.map(sp => (
                    <div className="col-md-3" key={sp.id}>
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={`/images/${sp.hinh}`}
                                alt={sp.tensp}
                            />
                            <div className="card-body">
                                <h4 className="card-title">{sp.tensp}</h4>
                                <p className="card-text">{sp.mota}</p>
                                <p className="card-text">{sp.gia}đ</p>
                                <Link className="nav-link" to={`/detail/${sp.id}`}>Xem chi tiết</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 🔹 Sản phẩm Hot
export function ShowSPĐB() {
    const hot = products.filter(sp => sp.loaijsp === "spđb");

    return (
        <div className="container mb-3">
            <h2 className="my-3 text-center">Sản phẩm đặc biệt</h2>
            <div className="row">
                {hot.map(sp => (
                    <div className="col-md-3" key={sp.id}>
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={`/images/${sp.hinh}`}
                                alt={sp.tensp}
                            />
                            <div className="card-body">
                                <h4 className="card-title">{sp.tensp}</h4>
                                <p className="card-text">{sp.mota}</p>
                                <p className="card-text">{sp.gia}đ</p>
                                <Link className="nav-link" to={`/detail/${sp.id}`}>Xem chi tiết</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}