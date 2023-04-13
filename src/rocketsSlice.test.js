// check if the rockets datat is fetched from the spaceX Api
const fetchRockets = async () => {
  const response = await fetch('https://api.spacexdata.com/v4/rockets');
  const rockets = await response.json();
  return rockets;
};

describe('fetchRockets', () => {
  it('should fetch rockets from the SpaceX API', async () => {
    const rockets = await fetchRockets();
    expect(rockets).toBeDefined();
    expect(Array.isArray(rockets)).toBe(true);
    expect(rockets.length).toBeGreaterThan(0);
  });
});
