import React from 'react';
import '../App.css';
import Falcon from '../falcon.jpg';

const Rockets = () => (
  <div className="main">
    <div className="homeContent">
      <div>
        <div className="book-list">
          <li className="rocket-list-item">
            <div className="list-details middle">
              <img src={Falcon} alt="Rocket_image" className="image-spina" />
            </div>
            <div className="list-details last">
              <h2>Rocket title</h2>
              <p>
                Rocket description details
              </p>
              <button type="button" id="button2">cancel Reservation</button>
              <button type="button" id="button1">Reserve rocket</button>
            </div>
          </li>
          <li className="rocket-list-item">
            <div className="list-details middle">
              <img src={Falcon} alt="Rocket_image" className="image-spina" />
            </div>
            <div className="list-details last">
              <h2>Rocket title</h2>
              <p>
                Rocket description details
              </p>
              <button type="button" id="button2">cancel Reservation</button>
              <button type="button" id="button1">Reserve rocket</button>
            </div>
          </li>
          <li className="rocket-list-item">
            <div className="list-details middle">
              <img src={Falcon} alt="Rocket_image" className="image-spina" />
            </div>
            <div className="list-details last">
              <h2>Rocket title</h2>
              <p>
                Rocket description details
              </p>
              <button type="button" id="button2">cancel Reservation</button>
              <button type="button" id="button1">Reserve rocket</button>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
);
export default Rockets;
