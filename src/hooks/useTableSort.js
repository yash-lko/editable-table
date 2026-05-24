import { useMemo, useState } from "react";

const useTableSort = (data) => {
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: "asc",
  });

  const handleSort = (field) => {
    setSortConfig((prev) => ({
      field,
      direction:
        prev.field === field && prev.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.field) return data;

    return [...data].sort((a, b) => {
      const x = a[sortConfig.field];
      const y = b[sortConfig.field];

      const res =
        typeof x === "string"
          ? x.localeCompare(y)
          : x - y;

      return sortConfig.direction === "asc" ? res : -res;
    });
  }, [data, sortConfig]);

  return {
    sortConfig,
    handleSort,
    sortedData,
  };
};

export default useTableSort;