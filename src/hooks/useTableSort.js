import { useMemo, useState } from "react";

const useTableSort = (filteredData) => {
  const [sortConfig, setSortConfig] = useState([]);

  const handleSort = (field) => {
    setSortConfig((prev) => {
      const exists = prev.find((item) => item.field === field);

      if (exists) {
        return prev.map((item) =>
          item.field === field
            ? {
                ...item,
                direction: item.direction === "asc" ? "desc" : "asc",
              }
            : item
        );
      }

      return [...prev, { field, direction: "asc" }];
    });
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.length) return filteredData;

    return [...filteredData].sort((a, b) => {
      for (const sort of sortConfig) {
        const first = a[sort.field];
        const second = b[sort.field];

        const result =
          typeof first === "string"
            ? sort.direction === "asc"
              ? first.localeCompare(second)
              : second.localeCompare(first)
            : sort.direction === "asc"
            ? first - second
            : second - first;

        if (result !== 0) return result;
      }

      return 0;
    });
  }, [filteredData, sortConfig]);

  return {
    sortConfig,
    handleSort,
    sortedData,
  };
};

export default useTableSort;
