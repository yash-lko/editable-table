import { useMemo, useState } from "react";

const useTableFilter = (data) => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const departments = [...new Set(data.map((row) => row.department))];

  const filtered = useMemo(() => {
    return data.filter((row) => {
      const searchMatch =
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.email.toLowerCase().includes(search.toLowerCase());

      const deptMatch = !department || row.department === department;

      return searchMatch && deptMatch;
    });
  }, [data, search, department]);

  return {
    search,
    setSearch,
    department,
    setDepartment,
    departments,
    filtered,
  };
};

export default useTableFilter;
