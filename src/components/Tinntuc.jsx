import "../App.css";
import newsList from "../data/tintuc";
import tinmoi from "../data/tinmoi";

export default function Tintuc() {
    return (
        <div>

            {/* HEADER */}
            <div className="container-fluid">
                <section className="tintuc_header">
                    <div className="header-content text-white">
                        <h1>Tin tức</h1>
                        <p>
                            <a href="/" className="text-white">Trang chủ</a> / Tin tức
                        </p>
                    </div>
                </section>
            </div>

            {/* CONTENT */}
            <section className="tintuc container my-5">
                <div className="row">

                    <div className="col-md-8">
                        <div className="row">

                            {newsList.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`col-md-12 ${index === 0 ? "my-4" : "mb-4"}`}
                                >
                                    <div className="card">
                                        <img
                                            src={item.image}
                                            className="card-img-top"
                                            alt=""
                                        />
                                        <div className="card-body">
                                            <h5>{item.title}</h5>
                                            <p>{item.content}</p>
                                            <a className="btn btn-primary">Xem thêm</a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* SIDEBAR GIỮ NGUYÊN */}
                    <div className="col-md-4 mt-5">

                        <h5>Danh mục</h5>
                        <ul className="list-group mb-4">
                            <li className="list-group-item">Bánh ngọt</li>
                            <li className="list-group-item">Bánh mặn</li>
                            <li className="list-group-item">Bánh trái cây</li>
                            <li className="list-group-item">Bánh sinh nhật</li>
                            <li className="list-group-item">Bánh dịp lễ</li>
                            <li className="list-group-item">Combo bánh</li>
                        </ul>

                        <h5>Tin mới nhất</h5>

                        {tinmoi.map((item) => (
                            <div key={item.id} className="d-flex mb-3">
                                <img
                                    src={item.image}
                                    width="80"
                                    height="60"
                                    style={{ objectFit: "cover" }}
                                />
                                <div className="ms-3">
                                    <small>{item.date}</small>
                                    <p className="mb-0">{item.title}</p>
                                </div>
                            </div>
                        ))}

                        <h5>Bánh nổi bật</h5>
                        <ul className="list-group">
                            <li className="list-group-item">Bánh Red Velvet</li>
                            <li className="list-group-item">Cupcake socola</li>
                            <li className="list-group-item">Tart trái cây mùa hè</li>
                        </ul>

                    </div>

                </div>
            </section>
        </div>
    );
}