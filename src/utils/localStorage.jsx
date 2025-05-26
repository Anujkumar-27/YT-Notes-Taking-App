export const users = [
  {
    username: "RahulSharma",
    email: "rahul@example.com",
    password: "123456",
  },
  {
    username: "PriyaSingh",
    email: "priya@example.com",
    password: "654321",
  },
  {
    username: "AmitPatel",
    email: "amit@example.com",
    password: "456123",
  },
];

export const getLocalStorage = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return { users };
};

export const setLocalStorage = (users = []) => {
  localStorage.setItem("users", JSON.stringify(users));
};