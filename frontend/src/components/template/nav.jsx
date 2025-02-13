import React from "react";
import "./nav.css";

import { Link } from "react-router-dom";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i> Home
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Funcionários
      </Link>
      <Link to="/orders">
        <i className="fa fa-shopping-cart"></i> Pedidos
      </Link>
    </nav>
  </aside>
);
