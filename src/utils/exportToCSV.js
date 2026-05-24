export function exportToCSV(data) {
  const headers = ["ID", "Name", "Email", "Department", "Salary"];

  const rows = data.map(item => [
    item.id,
    item.name,
    item.email,
    item.department,
    item.salary,
  ]);

  const csv = [headers, ...rows].map(r => r.join(",")).join("\n");

  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));

  const a = document.createElement("a");
  a.href = url;
  a.download = "employees.csv";
  a.click();

  URL.revokeObjectURL(url);
}