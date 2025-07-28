const Docker = require('dockerode');

module.exports = async () => {
  const docker = new Docker();
  try {
    await docker.ping();
    process.env.DOCKER_RUNNING = 'true';
    // eslint-disable-next-line no-console
    console.log('[jest.env.js] Docker is running. DOCKER_RUNNING=true');
    // Check if Docker is in Swarm mode
    try {
      const info = await docker.info();
      if (info && info.Swarm && info.Swarm.LocalNodeState === 'active') {
        process.env.DOCKER_SWARM = 'true';
        console.log('[jest.env.js] Docker Swarm is active. DOCKER_SWARM=true');
      } else {
        process.env.DOCKER_SWARM = 'false';
        console.log('[jest.env.js] Docker Swarm is NOT active. DOCKER_SWARM=false');
      }
    } catch (swarmErr) {
      process.env.DOCKER_SWARM = 'false';
      console.log('[jest.env.js] Error checking Swarm status. DOCKER_SWARM=false');
    }
  } catch (err) {
    process.env.DOCKER_RUNNING = 'false';
    process.env.DOCKER_SWARM = 'false';
    // eslint-disable-next-line no-console
    console.log('[jest.env.js] Docker is NOT running. DOCKER_RUNNING=false, DOCKER_SWARM=false');
  }
};
