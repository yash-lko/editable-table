import { useEffect, useState } from "react";
import { useTable } from "../context/TableContext";

const Pagination = () => {
  const {page,setPage,totalPages} = useTable();
  const [input, setInput] = useState(page);
  useEffect(() => {setInput(page)}, [page]);
  
  return (
    <div className="pagination">
      <button className="page-btn" disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>

      <div className="page-info">
        <span>Page</span>
        <input type="number" value={input}
        onChange={(e) => { setInput(e.target.value)}}
          onBlur={() => {
            const value = Number(input);
            if (
              value >= 1 &&
              value <= totalPages
            ) {
              setPage(value);
            } else {
              setInput(page);
            }

          }}
        />

        <span>of {totalPages}</span>
      </div>
      <button
        className="page-btn"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;