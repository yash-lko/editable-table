const NAMES = [
  "Aarav Sharma",
  "Vivaan Patel",
  "Aditya Singh",
  "Arjun Verma",
  "Sai Kumar",
  "Ananya Gupta",
  "Priya Mehta",
  "Sneha Reddy",
  "Isha Kapoor",
  "Neha Joshi",
  "Rahul Yadav",
  "Karan Malhotra",
  "Riya Sharma",
  "Pooja Nair",
  "Vikram Rao",
];
const DEPTS = ["HR", "IT", "Finance", "Sales"];
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateData = (count = 10000) =>
  Array.from({ length: count }, (_, i) => {
    const name = pick(NAMES);
    return {
      id: i + 1,
      name,
      email: `${name.toLowerCase().replace(/\s/g, ".")}${i + 1}@gmail.com`,
      department: pick(DEPTS),
      salary: Math.floor(Math.random() * 90000) + 10000,
    };
  });
