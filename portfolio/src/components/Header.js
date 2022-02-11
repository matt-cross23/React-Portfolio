import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Matthew Cross</h1>
      <h2> About me</h2>
      <h2> Portfolio </h2>
      <h2> Contact</h2>
      <h2> Resume</h2>
    </header>
  );
}

export default Header;
