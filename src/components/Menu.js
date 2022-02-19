import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/red">To RedPage</Link>
        </li>
        <li>
          <Link to="/blue">To BluePage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
