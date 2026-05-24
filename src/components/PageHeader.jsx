import { useTable } from "../context/TableContext";

const PageHeader = () => {
  const { data, filtered, departments } = useTable();

  const avg = filtered.length
    ? Math.round(filtered.reduce((s, r) => s + r.salary, 0) / filtered.length)
    : 0;

  return (
    <div className="page-header-wrap">
      <div className="page-header-text">
        <h1>Employee Directory</h1>
        <p>Manage, search, sort and edit employee records</p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-label">Total</span>
          <span className="stat-value">{data.length.toLocaleString("en-IN")}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Filtered</span>
          <span className="stat-value">{filtered.length.toLocaleString("en-IN")}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Departments</span>
          <span className="stat-value">{departments.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Avg Salary</span>
          <span className="stat-value">₹{avg.toLocaleString("en-IN")}</span>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
