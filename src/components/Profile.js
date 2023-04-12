import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const reservedRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  console.log('reserved', reservedRockets);

  return (
    <div className="main">
      <div className="homeContent">
        <div className="profile">
          <div>
            <h2>My Missions</h2>
          </div>
          <div>
            <h2>My Rockets</h2>
            <ul>
              {reservedRockets.map((rocket) => (
                <li key={rocket.id}>
                  <span>{rocket.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
