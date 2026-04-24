export default function Banner() {
    return (
        <div className=" container col-md-12 banner p-0">
            <div className="carousel slide" data-bs-ride="carousel" id="demo">
                <div className="carousel-indicators">
                    <button
                        className="active"
                        data-bs-slide-to="0"
                        data-bs-target="#demo"
                        type="button"
                    />
                    <button data-bs-slide-to="1" data-bs-target="#demo" type="button" />
                    <button data-bs-slide-to="2" data-bs-target="#demo" type="button" />
                </div>
                <div className="carousel-inner banner">
                    <div className="carousel-item active">
                        <img
                            alt="Los Angeles"
                            src="./images/bn1.jpg"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            alt="Chicago"
                            src="./images/bn2.jpg"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            alt="New York"
                            src="./images/bn3.jpg"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-slide="prev"
                    data-bs-target="#demo"
                    type="button">
                    <span className="carousel-control-prev-icon" />
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-slide="next"
                    data-bs-target="#demo"
                    type="button">
                    <span className="carousel-control-next-icon" />
                </button>
            </div>
        </div>
    )
}