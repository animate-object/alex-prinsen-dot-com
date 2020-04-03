import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => (
  <header className="nav">
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/widgets">projects</Link>
        </li>
        <li>
          <Link to="/maggie">cat game</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  </header>
);
