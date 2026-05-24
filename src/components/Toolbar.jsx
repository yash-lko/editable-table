import { useTable } from "../context/TableContext";
import { exportToCSV } from "../utils/exportToCSV";

const Toolbar = () => {
  const {
    search, setSearch,
    department, setDepartment, departments,
    sortedData, usePagination, setUsePagination, setPage,
  } = useTable();

  function clearFilters() {
    setSearch("");
    setDepartment("");
    setPage(1);
  }

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>

        <select value={department} onChange={(e) => { setDepartment(e.target.value); setPage(1); }}>
          <option value="">All Departments</option>
          {departments.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>

        <button className="clear-btn" onClick={clearFilters}>Clear</button>
      </div>

      <div className="toolbar-right">
        <button
          className={`pagination-toggle-btn ${usePagination ? "active" : ""}`}
          onClick={() => { setUsePagination(!usePagination); setPage(1); }}
        >
          {usePagination ? "⊞ Virtual Scroll" : "⊟ Pagination"}
        </button>
        <button className="export-btn" onClick={() => exportToCSV(sortedData)}>
          ↓ Export CSV
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
