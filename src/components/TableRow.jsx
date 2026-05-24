import { useState } from "react";
import { useTable } from "../context/TableContext";

const DEPT_COLORS = {
  HR:      "dept-hr",
  IT:      "dept-it",
  Finance: "dept-finance",
  Sales:   "dept-sales",
};

function validate(draft) {
  const errors = {};
  if (!draft.name || draft.name.trim().length < 2) errors.name = "Min 2 characters";
  if (!draft.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email)) errors.email = "Invalid email";
  if (!draft.salary || draft.salary < 1000) errors.salary = "Min ₹1,000";
  if (draft.salary > 10000000) errors.salary = "Too high";
  return errors;
}

const TableRow = ({ row }) => {
  const { editingId, draft, setDraft, startEdit, saveEdit, cancelEdit, undoEdit, isChanged, departments } = useTable();
  const [errors, setErrors] = useState({});
  const isEditing = editingId === row.id;

  function handleSave() {
    const errs = validate(draft);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      saveEdit();
      setErrors({});
    }
  }

  function update(field, value) {
    const updated = { ...draft, [field]: value };
    setDraft(updated);
    setErrors(validate(updated));
  }

  return (
    <div className={`table-row ${isEditing ? "row-editing" : ""}`}>

      <div className="table-cell cell-id">#{row.id}</div>

      <div className="table-cell cell-name">
        {isEditing ? (
          <div className="field-wrap">
            <input type="text" value={draft.name} className={errors.name ? "input-error" : ""} onChange={(e) => update("name", e.target.value)} />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>
        ) : row.name}
      </div>

      <div className="table-cell cell-email">
        {isEditing ? (
          <div className="field-wrap">
            <input type="text" value={draft.email} className={errors.email ? "input-error" : ""} onChange={(e) => update("email", e.target.value)} />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>
        ) : row.email}
      </div>

      <div className="table-cell">
        {isEditing ? (
          <select value={draft.department} onChange={(e) => update("department", e.target.value)}>
            {departments.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        ) : (
          <span className={`dept-badge ${DEPT_COLORS[row.department] || ""}`}>{row.department}</span>
        )}
      </div>

      <div className="table-cell cell-salary">
        {isEditing ? (
          <div className="field-wrap">
            <input type="number" value={draft.salary} className={errors.salary ? "input-error" : ""} onChange={(e) => update("salary", Number(e.target.value))} />
            {errors.salary && <span className="error-msg">{errors.salary}</span>}
          </div>
        ) : `₹${row.salary.toLocaleString("en-IN")}`}
      </div>

      <div className="table-cell">
        <div className="actions-cell">
          {isEditing ? (
            <>
              <button className="save-btn" onClick={handleSave}>Save</button>
              <button className="cancel-btn" onClick={() => { cancelEdit(); setErrors({}); }}>Cancel</button>
            </>
          ) : (
            <>
              <button className="edit-btn" onClick={() => startEdit(row)}>✎ Edit</button>
              {isChanged(row) && (
                <button className="undo-btn" onClick={() => undoEdit(row.id)}>Undo</button>
              )}
            </>
          )}
        </div>
      </div>

    </div>
  );
}

export default TableRow;
