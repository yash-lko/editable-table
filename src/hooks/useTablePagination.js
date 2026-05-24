import { useState } from "react";

const useTablePagination = (sortedData = []) => {

  const [usePagination, setUsePagination] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  const totalPages = Math.ceil(sortedData.length / pageSize);

  const pageData = sortedData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return {
    usePagination,
    setUsePagination,
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPages,
    pageData,
  };

};

export default useTablePagination;