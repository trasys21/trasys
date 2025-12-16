module.exports = {
  apps: [
    {
      name: 'trasys-server',
      script: 'npm',
      args: 'run start',
      cwd: '/home/es-dt23-04/Public/trasys',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3102,
      },
    },
  ],
};
