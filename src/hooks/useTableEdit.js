import { useState } from "react";

const useTableEdit = (data, setData) => {
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({});
  const [history, setHistory] = useState({});

  function startEdit(row) {
    setHistory((prev) => ({ ...prev, [row.id]: row }));
    setEditingId(row.id);
    setDraft({ ...row });
  }

  function saveEdit() {
    setData(data.map((row) => (row.id === editingId ? draft : row)));
    setEditingId(null);
    setDraft({});
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft({});
  }

  function undoEdit(id) {
    if (!history[id]) return;
    setData(data.map((row) => (row.id === id ? history[id] : row)));
  }

  function isChanged(row) {
    const old = history[row.id];
    if (!old) return false;
    return (
      old.name !== row.name ||
      old.email !== row.email ||
      old.department !== row.department ||
      old.salary !== row.salary
    );
  }

  return {
    editingId,
    draft,
    setDraft,
    startEdit,
    saveEdit,
    cancelEdit,
    undoEdit,
    isChanged,
  };
};

export default useTableEdit;
