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
    departments.js          # Departments color

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

This keeps logic modular and avoids prop drilling.

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

* Single & multi-column sorting (asc/desc toggle)
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

* All data stored in localStorage
* Survives page refresh

---

### ⚠️ Error Handling

* Global Error Boundary using `react-error-boundary`
* Prevents full app crash
* Shows fallback UI with retry option

---

## 🧠 Challenges & Trade-offs

### 1. Handling Large Dataset

Used `react-window` to virtualize 10,000+ rows and avoid DOM performance issues.

### 2. Sorting Complexity

Implemented multi-sort logic using array-based sort configuration for flexibility.

### 3. State Management Choice

Chose Context API instead of Redux to keep architecture simple and lightweight.

### 4. UI Stability & Error Handling

The application can occasionally crash or render a blank screen if unexpected runtime errors occur in deeply nested components or large dataset operations. To handle this, a global Error Boundary was implemented using `react-error-boundary`, ensuring the UI does not break completely and instead shows a fallback screen with a retry option.
Chose Context API instead of Redux to keep architecture simple and lightweight.

### 4. Persistence Strategy

Used localStorage instead of backend to reduce setup complexity.

---

## ⚡ Performance Optimizations

* Virtualized rendering with `react-window`
* Memoized filtering and sorting logic
* Reduced unnecessary re-renders using derived state
* Split logic into custom hooks

---

## 🚀 Future Improvements

* Backend API integration (replace localStorage)
* Row-level debouncing for edits
* Column resizing & reordering
* Add unit tests (Jest / React Testing Library)
* Improve accessibility (ARIA + keyboard navigation)

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

## 🎯 Summary

This project demonstrates:

* Handling large datasets efficiently (10,000+ rows)
* Clean and modular React architecture
* Custom hooks-based state management
* Real-world table features (edit, sort, filter, export)
* Performance-first UI design
