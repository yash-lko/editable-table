import { useTable } from "../context/TableContext";

const columns = ["id", "name", "email", "department", "salary"];

const TableHeader = () => {

  const {
    sortConfig,
    handleSort,
  } = useTable();

  const getSort = (field) => {
    return sortConfig.find(
      (item) => item.field === field
    );
  };

  return (
    <div className="table-header">

      {columns.map((col) => {

        const activeSort = getSort(col);

        return (
          <div
            key={col}
            className={`header-cell ${activeSort ? "sorted" : ""}`}
            onClick={() => handleSort(col)}
          >
            {col.charAt(0).toUpperCase() + col.slice(1)}

            {activeSort &&
              (activeSort.dir === "asc"
                ? " ↑"
                : " ↓")}
          </div>
        );

      })}

      <div className="header-cell">
        Actions
      </div>

    </div>
  );
};

export default TableHeader;