
export function validate(draft) {
  const errors = {};
  if (!draft.name || draft.name.trim().length < 2) errors.name = "Min 2 characters";
  if (!draft.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email)) errors.email = "Invalid email";
  if (!draft.salary || draft.salary < 1000) errors.salary = "Min ₹1,000";
  if (draft.salary > 10000000) errors.salary = "Too high";
  return errors;
}