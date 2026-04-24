export default function GioiThieu() {
    return (
        <div className="container">
            <div
                className="row align-items-center p-5"
                style={{
                    backgroundColor: "#fff2e2",
                }}>
                <div className="col-md-6">
                    <h2 className="mb-3">TRẢI NGHIỆM BÁNH NGỌT ẤM ÁP VỚI KHÔNG GIAN CỔ ĐIỂN</h2>
                    <p>
                        Tiệm bánh mang tông nâu trầm ấm, không gian cổ điển với ánh đèn vàng dịu
                        nhẹ, tạo cảm giác thư giãn và gần gũi. Bánh được làm thủ công mỗi ngày, vị
                        ngọt nhẹ, mềm mịn, chú trọng sự tinh tế trong hương vị và cách trình bày,
                        mang đến trải nghiệm dễ chịu khi thưởng thức.
                    </p>
                    <ul className="list mt-3">
                        <li className="mb-2">
                            <i className="fa-solid fa-check text-success me-2" />
                            Không gian ấm cúng, phong cách cổ điển
                        </li>
                        <li className="mb-2">
                            <i className="fa-solid fa-check text-success me-2" />
                            Bánh thủ công tươi mới mỗi ngày
                        </li>
                        <li>
                            <i className="fa-solid fa-check text-success me-2" />
                            Hương vị nhẹ nhàng và tinh tế
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <div className="row g-3">
                        <div className="col-6 gioithieu">
                            <img
                                alt=""
                                className="img-fluid rounded h-100"
                                src="images/anhgioithieu1.jpg"
                            />
                        </div>
                        <div className="col-6 gioithieu">
                            <img
                                alt=""
                                className="img-fluid rounded h-70"
                                src="images/anhgioithieu2.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}