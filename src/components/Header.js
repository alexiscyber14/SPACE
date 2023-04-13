import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Planet from '../planet.png';
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
            <img src={Planet} alt="logo_image" id="lock" />
            <a href="/" id="logo-link">Space Traveler&lsquo;s Hub</a>
            <span className="trade">tm</span>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/" className={`routing ${activeIndex === 0 ? 'activated' : ''}`} onClick={(e) => handleClick(0, e)}>
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink to="/missions" className={`routing ${activeIndex === 1 ? 'activated' : ''}`} onClick={(e) => handleClick(1, e)}>
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={`routing ${activeIndex === 2 ? 'activated' : ''}`} onClick={(e) => handleClick(2, e)}>
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  );
};

export default Header;
