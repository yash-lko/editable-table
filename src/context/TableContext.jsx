import { createContext, useContext, useEffect, useState } from "react";

import { generateData } from "../utils/generateData";

import useTableFilter from "../hooks/useTableFilter";
import useTableSort from "../hooks/useTableSort";
import useTableEdit from "../hooks/useTableEdit";
import useTablePagination from "../hooks/useTablePagination";
import useUnsavedWarning from "../hooks/useUnsavedWarning";

const TableContext = createContext();

const TableProvider = ({ children }) => {

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("employees");
    return savedData ? JSON.parse(savedData) : generateData();
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(data));
  }, [data]);

  const filter = useTableFilter(data);

  const {
    sortConfig,
    handleSort,
    sortedData,
  } = useTableSort(filter.filtered);

  const edit = useTableEdit(data, setData);

  const pagination = useTablePagination(sortedData);

  useUnsavedWarning(edit.editingId);

  return (
    <TableContext.Provider
      value={{
        data,
        ...filter,
        sortConfig,
        handleSort,
        sortedData,
        ...edit,
        ...pagination,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

const useTable = () => useContext(TableContext);

export {
  TableProvider,
  useTable,
};