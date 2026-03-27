export const api = {
  register: (data) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // prevent duplicate users
    const exists = users.find((u) => u.email === data.email);
    if (exists) {
      alert("User already exists");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
  },

  login: ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    return users.find((u) => u.email === email && u.password === password);
  },
};
