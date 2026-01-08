module.exports = {
  apps: [
    {
      name: 'trasys-server',
      script: './node_modules/next/dist/bin/next',
      args: 'start -p 3102',
      cwd: '/home/es-dt23-04/Public/trasys',
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
