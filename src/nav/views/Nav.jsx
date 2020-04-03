import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export class Nav extends React.PureComponent {
  constructor() {
    super();
    this.state = { activeRoute: window.location.hash };
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleHashChange);
  }

  render() {
    const { activeRoute } = this.state;
    return (
      <header className="nav">
        <nav>
          <ul>
            <NavLink to="/" activeRoute={activeRoute} title="home" />
            <NavLink to="/about" activeRoute={activeRoute} title="about" />
            <NavLink
              to="/projects"
              activeRoute={activeRoute}
              title="projects"
            />
            <NavLink to="/blog" activeRoute={activeRoute} title="blog" />
            <NavLink to="/maggie" activeRoute={activeRoute} title="maggie" />
          </ul>
        </nav>
      </header>
    );
  }

  handleHashChange = e => {
    this.setState({ activeRoute: window.location.hash });
    console.log(this.state.activeRoute);
  };
}
const NavLink = ({ to, activeRoute, title }) => (
  <li className={activeRoute.endsWith(to) ? "active" : ""}>
    <Link to={to}>{title}</Link>
  </li>
);
