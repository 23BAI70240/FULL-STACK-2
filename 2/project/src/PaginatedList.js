import React, { useState } from "react";
import "./PaginatedList.css";

const PaginatedList = () => {
  const data = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`
  }));

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container">
      <h2 className="title">📄 Paginated List</h2>

      <div className="card">
        <ul className="list">
          {currentItems.map((item) => (
            <li key={item.id} className="list-item">
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
          className="btn"
        >
          ⬅ Previous
        </button>

        <span className="page-info">
          Page <strong>{currentPage}</strong> of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
          className="btn"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;