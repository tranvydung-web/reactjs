import { useState } from "react";

export default function LoginForm({ show, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!show) return null; // Không render nếu show=false

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <form
        className="p-4"
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          minWidth: "300px",
          position: "relative",
        }}
      >
        <button
          type="button"
          style={{
            position: "absolute",
            top: "5px",
            right: "10px",
            fontSize: "20px",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          ×
        </button>

        <h3 className="text-center mb-3">Đăng Nhập</h3>

        <label>Tài khoản</label>
        <input
          type="text"
          className="form-control mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => console.log("Login", username, password)}
          >
            Đăng Nhập
          </button>
        </div>
      </form>
    </div>
  );
}