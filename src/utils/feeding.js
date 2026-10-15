export const defaultMeals = [
  {
    id: "breakfast",
    icon: "🌅",
    name: "Morning Yums",
    pellets: 2,
    fed: false,
    time: null,
  },
  {
    id: "midday",
    icon: "☀️",
    name: "Midday Snack",
    pellets: 1,
    fed: false,
    time: null,
  },
  {
    id: "dinner",
    icon: "🌙",
    name: "Night Nibbles",
    pellets: 2,
    fed: false,
    time: null,
  },
];

export const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
