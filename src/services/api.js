export const api = {
  register: ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("User already exists");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      role: email === "admin@gmail.com" ? "admin" : "user", 
      balance: 0,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  },

  login: ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    return users.find(
      (u) => u.email === email && u.password === password
    );
  },
};
