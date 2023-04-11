import React, { useState, useEffect } from 'react';
import '../App.css';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.location.pathname === '/missions') {
      setActiveIndex(1);
    } else if (window.location.pathname === '/profile') {
      setActiveIndex(2);
    }
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <header>
      <nav>
        <div className="logo-container">
          <div className="logo">
            <i className="fa fa-plane" id="lock" />
            <a href="/" id="logo-link">Space Traveler&lsquo;s Hub</a>
            <span className="trade">tm</span>
          </div>
        </div>
        <div>
          <ul>
            <li className="list-item"><a href="/" className={`routing ${activeIndex === 0 ? 'activated' : ''}`} onClick={(e) => handleClick(0, e)}>Rockets</a></li>
            <li><a href="/missions" className={`routing ${activeIndex === 1 ? 'activated' : ''}`} onClick={(e) => handleClick(1, e)}>Missions</a></li>
            <li><a href="/profile" className={`routing ${activeIndex === 2 ? 'activated' : ''}`} onClick={(e) => handleClick(1, e)}>My Profile</a></li>
          </ul>
        </div>
      </nav>
    </header>

  );
};

export default Header;
