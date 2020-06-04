import React from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";

function Header() {
  console.log(localStorage.getItem("role"));
  return (
    <div className="nav">
      <Link to="/quest">전체문제 </Link>
      <Link to="/quest/wrong">틀린문제</Link>
    </div>
  );
}

export default Header;
