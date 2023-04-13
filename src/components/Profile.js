import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const mission = useSelector((state) => state.missions);

  return (
    <div className="mission-table">
      <h2>My Missions</h2>
      <Table bordered>
        <tbody>
          {mission
            .filter((obj) => obj.reserved)
            .map((item) => (
              <tr key={item.mission_id}>
                <td>{item.mission_name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

const RocketsProfile = () => {
  const reservedRocket = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <div className="rocket-table">
      <h2>My Rockets</h2>
      <Table bordered>
        <tbody>
          {
            reservedRocket.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

const Profile = () => (
  <div className="profile-container">
    <MissionProfile />
    <RocketsProfile />
  </div>

);

export default Profile;
