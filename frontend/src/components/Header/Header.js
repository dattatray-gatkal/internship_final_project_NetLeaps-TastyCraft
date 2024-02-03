import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import classes from "./header.module.css";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();

  const { cart } = useCart();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div classNme={classes.logo}>
          <div className="logo">
            <img
              src="/pictures/logo_transparent.png"
              style={{
                maxWidth: "30%",
                height: "1.5%",
                paddingLeft: "5px",
                marginLeft: "30px",
              }}
            />
          </div>
        </div>
        <nav>
          <ul>
            <Link to="/" className={classes.boldText}>
              Home
            </Link>

            <Link to="/about" className={classes.boldText}>
              About Us
            </Link>

            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile" className={classes.boldText}>
                    Profile
                  </Link>
                  <Link to="/orders" className={classes.boldText}>
                    Orders
                  </Link>
                  <a onClick={logout} className={classes.boldText}>
                    Logout
                  </a>
                </div>
              </li>
            ) : (
              <Link to="/login" className={classes.boldText}>
                Login
              </Link>
            )}

            <li>
              <Link to="/cart" className={classes.boldText}>
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
