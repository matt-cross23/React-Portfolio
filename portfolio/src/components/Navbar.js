import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#000000',
  },
  heading: {
    background: '##000000',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'blue',
    padding: '0 50px',
  },
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Home</div>
      <div style={styles.heading}>About me!</div>
    </div>
  );
}

export default Navbar;
