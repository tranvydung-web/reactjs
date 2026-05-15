import React, { useState } from 'react';

const Lienhe = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        cakeType: '',
        message: ''
    });

    // Bảng màu Cà phê chủ đạo
    const colors = {
        coffeeDark: '#4e342e', // Nâu cà phê đậm
        coffeeLight: '#795548', // Nâu vừa
        cream: '#d7ccc8', // Màu kem sữa
        bg: '#fdfaf5' // Màu giấy nến/kem nhạt
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Cảm ơn " + formData.name + "! Lời nhắn đã được gửi đến tiệm.");
    };

    return (
        <div style={{ backgroundColor: colors.bg, minHeight: '100vh', paddingBottom: '50px', color: colors.coffeeDark }}>

            {/* Banner Header - Ảnh mộc mạc hơn */}
            <div className="container-fluid p-0 position-relative mb-5" style={{ height: '400px' }}>
                <img
                    src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1974&auto=format&fit=crop"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', filter: 'brightness(0.6)' }}
                    alt="Coffee and Cake"
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="display-4 fw-bold" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>Liên Hệ Với Aura</h1>
                    <div style={{ width: '60px', height: '3px', background: colors.cream, margin: '15px auto' }}></div>
                    <p className="lead italic">Ghé tiệm làm tách cà phê và thưởng bánh bạn nhé</p>
                </div>
            </div>

            <div className="container">
                <div className="row g-5">

                    {/* Cột trái: Thông tin liên hệ (Màu Nâu mộc) */}
                    <div className="col-lg-4">
                        <div className="p-4 rounded-3 shadow-sm h-100" style={{ backgroundColor: '#fff', borderTop: `5px solid ${colors.coffeeDark}` }}>
                            <h4 className="mb-4 text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>Thông tin tiệm</h4>

                            <div className="mb-4 d-flex align-items-start">
                                <i className="bi bi-geo-alt-fill me-3 fs-5" style={{ color: colors.coffeeLight }}></i>
                                <div>
                                    <h6 className="fw-bold mb-1 text-dark">Địa chỉ</h6>
                                    <p className="text-muted small">123 Đường Cà Phê, Quận 1, TP. HCM</p>
                                </div>
                            </div>

                            <div className="mb-4 d-flex align-items-start">
                                <i className="bi bi-telephone-fill me-3 fs-5" style={{ color: colors.coffeeLight }}></i>
                                <div>
                                    <h6 className="fw-bold mb-1 text-dark">Hotline</h6>
                                    <p className="text-muted small">0909 345 678</p>
                                </div>
                            </div>

                            <div className="mb-4 d-flex align-items-start">
                                <i className="bi bi-envelope-paper-fill me-3 fs-5" style={{ color: colors.coffeeLight }}></i>
                                <div>
                                    <h6 className="fw-bold mb-1 text-dark">Email</h6>
                                    <p className="text-muted small">contact@auracake.com</p>
                                </div>
                            </div>

                            <hr />
                            <div className="mt-4">
                                <h6 className="fw-bold mb-3">Kết nối với chúng mình:</h6>
                                <div className="d-flex gap-2">
                                    {/* Icon chuyển sang màu nâu/đen thay vì màu hồng */}
                                    <button className="btn btn-dark btn-sm rounded-0"><i className="bi bi-facebook"></i></button>
                                    <button className="btn btn-dark btn-sm rounded-0"><i className="bi bi-instagram"></i></button>
                                    <button className="btn btn-dark btn-sm rounded-0"><i className="bi bi-messenger"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cột phải: Form liên hệ */}
                    <div className="col-lg-8">
                        <div className="bg-white p-5 rounded-3 shadow-sm border">
                            <h3 className="mb-4 fw-bold" style={{ color: colors.coffeeDark }}>Gửi tin nhắn cho Aura</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small fw-bold text-uppercase">Tên của bạn</label>
                                        <input type="text" name="name" className="form-control rounded-0 border-secondary-subtle" placeholder="Ví dụ: Minh Anh" onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small fw-bold text-uppercase">Liên lạc (SĐT/Email)</label>
                                        <input type="text" name="contact" className="form-control rounded-0 border-secondary-subtle" placeholder="Để tiệm phản hồi..." onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label small fw-bold text-uppercase">Chủ đề quan tâm</label>
                                    <select name="cakeType" className="form-select rounded-0 border-secondary-subtle" onChange={handleChange}>
                                        <option value="">Chọn một mục...</option>
                                        <option value="order">Đặt bánh sự kiện</option>
                                        <option value="coffee">Đặt chỗ / Workshop</option>
                                        <option value="feedback">Góp ý dịch vụ</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label small fw-bold text-uppercase">Nội dung</label>
                                    <textarea name="message" className="form-control rounded-0 border-secondary-subtle" rows="5" placeholder="Bạn muốn nhắn nhủ điều gì..." onChange={handleChange}></textarea>
                                </div>

                                {/* Nút bấm màu Nâu Cà Phê cực ngầu */}
                                <button
                                    type="submit"
                                    className="btn btn-lg w-100 text-white shadow-sm"
                                    style={{
                                        backgroundColor: '#c89b6d', // Đã đổi sang màu bạn muốn
                                        borderRadius: '0',
                                        transition: '0.3s',
                                        border: 'none'
                                    }}
                                    // Khi rà chuột vào, màu sẽ đậm hơn một chút để tạo hiệu ứng
                                    onMouseOver={(e) => e.target.style.backgroundColor = '#b0865b'}
                                    // Khi bỏ chuột ra, quay về màu #c89b6d ban đầu
                                    onMouseOut={(e) => e.target.style.backgroundColor = '#c89b6d'}
                                >
                                    GỬI LỜI NHẮN <i className="bi bi-send-fill ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Lienhe;