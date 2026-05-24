import { useTable } from "../context/TableContext";

const columns = ["id", "name", "email", "department", "salary"];

const TableHeader = () => {
  const { sortConfig, handleSort } = useTable();

  return (
    <div className="table-header">
      {columns.map((col) => {
        const active = sortConfig.field === col;

        return (
          <div
            key={col}
            className={`header-cell ${active ? "sorted" : ""}`}
            onClick={() => handleSort(col)}
          >
            {col.charAt(0).toUpperCase() + col.slice(1)}
            {active && (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </div>
        );
      })}

      <div className="header-cell">Actions</div>
    </div>
  );
};

export default TableHeader;