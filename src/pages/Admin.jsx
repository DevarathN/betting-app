import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Admin() {
  const { user } = useContext(AuthContext);
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (!user || user.role !== "admin") {
    return <h2 style={{ padding: "20px" }}>Access Denied</h2>;
  }

  return (
    <div className="page">
      <div className="section">
        <h2>Admin Panel</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{u.name || "-"}</td>
                  <td>{u.email}</td>
                  <td>₹{u.balance || 0}</td>
                  <td>
                    <span className={`badge ${u.role}`}>
                      {u.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
