import { useState } from "react";

export default function useSearch(Data) {
    // Quản lý từ khóa người dùng nhập
    const [searchTerm, setSearchTerm] = useState("");

    // Tự động lọc danh sách dựa trên searchTerm
    const filteredData = Data.filter((item) =>
        item.tensp.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        searchTerm,
        setSearchTerm,
        filteredData
    };
}