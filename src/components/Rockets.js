import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reserverRocket, cancelReserve } from '../redux/rockets/rocketsSlice';
import '../App.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  console.log('logging', rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (!rockets) {
    return <div>Loading...</div>;
  }
  const handleReserveRocket = (rocketId) => {
    dispatch(reserverRocket(rocketId));
  };

  const handleCancelReserve = (rocketId) => {
    dispatch(cancelReserve(rocketId));
  };
  return (
    <div className="main">
      <div className="homeContent">
        <div>
          <div className="book-list">
            {rockets.map((rocket) => (
              <li className="rocket-list-item" key={rocket.id}>
                <div className="list-details middle">
                  <img src={rocket.flickr_images} alt="Rocket_image" className="image-spina" />
                </div>
                <div className="list-details last">
                  <h2>{rocket.name}</h2>
                  <p>
                    {rocket.reserved ? <span id="reserved">Reserved</span> : null}
                    {rocket.description}
                  </p>
                  {rocket.reserved ? (
                    <button type="button" id="button2" onClick={() => handleCancelReserve(rocket.id)}>cancel Reservation</button>
                  ) : (
                    <button type="button" id="button1" onClick={() => handleReserveRocket(rocket.id)}>Reserve rocket</button>
                  )}
                </div>
              </li>
            ))}
            ;
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rockets;
