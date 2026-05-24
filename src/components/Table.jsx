import { useTable } from "../context/TableContext";
import { FixedSizeList as List } from "react-window";

import PageHeader from "./PageHeader";
import Toolbar from "./Toolbar";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "./Pagination";

const VirtualRow = ({ index, style, data }) => {
  return (
    <div style={style}>
      <TableRow row={data[index]} />
    </div>
  );
};

const Table = () => {

  const {
    data,
    sortedData,
    pageData,
    usePagination,
  } = useTable();

  if (data.length === 0) {
    return (
      <div className="empty-message">
        <h2>No Employees Found</h2>
        <p>Add some employee records</p>
      </div>
    );
  }

  
// throw new Error(
//   "The application encountered an unexpected problem while loading the employee table data. Please refresh the page or try again later."
// );

  return (
    <div className="app">

      <PageHeader />

      <div className="table-container">

        <Toolbar />

        <TableHeader />

        <div className="table-scroll">

          {sortedData.length === 0 ? (

            <div className="no-results">
              <h2>No Results Found</h2>
            </div>

          ) : usePagination ? (

            pageData.map((row) => (
              <TableRow
                key={row.id}
                row={row}
              />
            ))

          ) : (

            <List
              height={500}
              itemCount={sortedData.length}
              itemSize={72}
              itemData={sortedData}
              itemKey={(index, data) => data[index].id}
              width="100%"
            >
              {VirtualRow}
            </List>

          )}

        </div>

        {usePagination ? (
          <Pagination />
        ) : (
          <div className="table-footer">
            <span>
              {sortedData.length.toLocaleString("en-IN")} of{" "}
              {data.length.toLocaleString("en-IN")} records
            </span>
          </div>
        )}

      </div>

    </div>
  );
};

export default Table;