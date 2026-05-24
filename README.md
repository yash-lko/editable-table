# Editable Data Table — React

Advanced editable table with 10,000+ rows, virtual scrolling, pagination, sorting, filtering, and Context API state management.

---

## Setup

```bash
npm install --legacy-peer-deps
npm run dev
```

> `--legacy-peer-deps` is needed because `react-window` hasn't declared React 19 peer support yet.

---

## Project Structure

```
src/
  context/
    TableContext.jsx     # ALL state lives here (data, filter, sort, edit, pagination)
  components/
    Table.jsx            # Root — renders layout, reads context
    PageHeader.jsx       # Title + stat cards
    Toolbar.jsx          # Search, filter, export, pagination toggle
    TableHeader.jsx      # Sortable column headers
    TableRow.jsx         # Single row — view or edit mode
    EditableField.jsx    # Reusable input with error message
    DeptBadge.jsx        # Colored department pill
    RowActions.jsx       # Edit/Save/Cancel/Undo buttons
    Pagination.jsx       # Page controls with ellipsis
  utils/
    generateData.js      # Generates 10,000 employee rows
    exportToCSV.js       # Downloads filtered data as CSV
    validate.js          # Name, email, salary validation rules
  styles/
    table.css            # All styles, dark theme
```

---

## Architecture — Context API

Everything lives in `TableContext.jsx`. Components call `useTable()` and get exactly what they need — no prop drilling at all.

```
TableContext
  ├── data, setData          (10,000 rows, persisted to localStorage)
  ├── search, deptFilter     (filter state)
  ├── filteredData           (memoized filtered array)
  ├── sortField, sortOrder   (sort state)
  ├── sortedData             (memoized sorted array)
  ├── handleSort, sortIcon   (sort actions)
  ├── editingId, draft       (which row is being edited + draft values)
  ├── errors                 (live validation errors)
  ├── startEdit, updateDraft, saveRow, cancelEdit, undoRow
  ├── history                (original values for undo per row)
  └── page, pageSize, pagedData, totalPages, usePagination
```

**Why Context over Redux?**
The state here is a single array with UI state. Context is simpler, easier to explain, and explicitly listed in the assessment. Redux would add reducers, actions, and store boilerplate with no benefit for this use case.

---

## Features

### Editable Table
- Click ✎ to edit any row inline
- Save validates name (min 2 chars), email (format), salary (₹1,000–₹1,00,00,000)
- Cancel discards changes
- Undo restores the original value — only appears if something actually changed

### Large Dataset (10,000+ rows)
- **Virtual Scroll** (default) — `react-window` renders only visible rows, O(1) memory regardless of dataset size
- **Pagination** (fallback) — toggle from toolbar, 10/25/50/100 rows per page

### Sorting & Filtering
- Click any column header to sort asc/desc
- Search by name or email (live, case-insensitive)
- Department dropdown filter
- Clear button resets both filters

### Export CSV
- Exports current filtered + sorted view as `Employees.csv`

### Persistence
- All edits saved to `localStorage` automatically — survive page refresh

---

## Known Limitations

- `react-window` requires `--legacy-peer-deps` with React 19
- Virtual scroll uses fixed row height (72px) — editing row with errors slightly overflows but doesn't break layout
- No backend — data resets if `localStorage` is cleared
