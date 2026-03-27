import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <div className="navbar logged-in">
          <div>
            <a href="/game">Game</a>
            <a href="/wallet">Wallet</a>
          </div>
          <div>
            <button
              onClick={logout}
              style={{ display: "inline-block", marginTop: "0px" }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="navbar not-logged-in">
          <a href="/">Login</a>
          <a href="/register">Register</a>
        </div>
      )}
    </>
  );
}
