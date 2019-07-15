module.exports = {
  apps: [{
    name: 'proxy',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-218-160-12.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/FECCarousel.pem',
      ref: 'origin/master',
      repo: 'https://github.com/zbay-fec/LandonProxy.git',
      path: '/home/ubuntu/landonProxy',
      'post-deploy': 'npm install && pm2 startOrRestart ./ecosystem.config.js'
    }
  }
}