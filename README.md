# Editable Data Table — React

A high-performance editable data table built with React that handles **10,000+ rows** with virtual scrolling, sorting, filtering, inline editing, pagination, CSV export, and robust state management using Context API + custom hooks.

---

## 🚀 Tech Stack

* React (Vite)
* Context API (state management)
* react-window (virtual scrolling)
* LocalStorage (data persistence)
* Custom Hooks architecture
* Plain CSS (custom UI)

---

## ⚙️ Setup

```bash
npm install --legacy-peer-deps
npm run dev
```

> Required due to `react-window` peer dependency compatibility with React 19.

---

## 📁 Project Structure

```
src/
  context/
    TableContext.jsx        # Global state (data, filter, sort, edit, pagination)

  components/
    Table.jsx               # Main table container
    PageHeader.jsx          # Stats + header info
    Toolbar.jsx             # Search, filter, export, toggle pagination
    TableHeader.jsx         # Sortable column headers
    TableRow.jsx            # Row (view/edit mode)
    Pagination.jsx          # Page controls
    ErrorFallback.jsx       # Error boundary UI

  hooks/
    useTableFilter.js
    useTableSort.js
    useTableEdit.js
    useTablePagination.js
    useUnsavedWarning.js

  utils/
    generateData.js         # Generates 10,000+ rows
    exportToCSV.js          # CSV export utility
    validate.js             # Input validation

  styles/
    table.css               # UI styling
```

---

## 🧠 Architecture Overview

State is centralized using Context API and split into logical hooks:

* Filtering → `useTableFilter`
* Sorting → `useTableSort`
* Editing → `useTableEdit`
* Pagination → `useTablePagination`

This keeps the code modular and avoids prop drilling.

---

## ✨ Features

### 📝 Inline Editing

* Click ✎ to edit rows inline
* Save / Cancel / Undo per row
* Field validation:

  * Name: min 2 characters
  * Email: valid format
  * Salary: numeric range validation

---

### 📊 Large Dataset Handling (10,000+ rows)

* Virtual scrolling using `react-window`
* Pagination mode as fallback
* Optimized rendering for large datasets

---

### 🔃 Sorting

* Single-column sorting (asc/desc toggle)
* Active column highlighted
* Arrow indicator shows current sort direction

---

### 🔍 Filtering

* Search by name or email
* Filter by department
* Instant results with memoized filtering

---

### 📄 Export CSV

* Export filtered + sorted data
* Downloads as `Employees.csv`

---

### 💾 Persistence

* All data stored in `localStorage`
* Survives page refresh

---

### ⚠️ Error Handling

* Global Error Boundary implemented using `react-error-boundary`
* Prevents full app crash
* Displays fallback UI with:

  * Error message
  * Retry button
  * Clean user-friendly message

---

## 🧯 Error Boundary Setup

```js
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <App />
</ErrorBoundary>
```

---

## 🧪 Known Limitations

* `react-window` requires `--legacy-peer-deps`
* Fixed row height (72px)
* No backend integration (uses localStorage only)
* Multi-sort not implemented (single-column sort used for simplicity)

---

## 📌 Key Decisions

* Context API instead of Redux (simpler, lightweight)
* Custom hooks for separation of logic
* Virtual scrolling for performance optimization
* Minimal dependencies for easier evaluation

---

## 🎯 Summary

This project demonstrates:

* Handling large datasets efficiently
* Clean React architecture
* Modular custom hooks
* Real-world table features (edit, sort, filter, export)
* Performance-first UI design
