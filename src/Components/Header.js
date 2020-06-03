import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/quest">전체문제 </Link>

        <Link to="/quest/wrong">틀린문제</Link>
      </div>
    );
  }
}

export default Header;
