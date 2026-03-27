export default function Admin() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser || currentUser.role !== "admin") {
    return <h2>Access Denied</h2>;
  }
  return (
    <div>
      <h2>Admin Panel</h2>
      {users.map((u, i) => (
        <div key={i}>{u.email}</div>
      ))}
    </div>
  );
}
