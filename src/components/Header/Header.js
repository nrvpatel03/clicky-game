import React from "react";
import "./Header.css";

const Header = props => <div className="header"><h1>{props.title}</h1><h1>{props.score}</h1></div>;

export default Header;