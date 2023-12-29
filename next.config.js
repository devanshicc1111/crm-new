// /* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  },
  async rewrites() {
    return [
      {
        source: '/auth/token/',
        destination: 'http://gateway-test.apps.ocp4.pacosta.com/auth/token/'
      },
      {
        source: '/auth/refresh-token/',
        destination: 'http://gateway-test.apps.ocp4.pacosta.com/auth/refresh-token/'
      },
      {
        source: '/adminportal/api/getUserRoles/',
        destination: 'http://gateway-test.apps.ocp4.pacosta.com/adminportal/api/getUserRoles/'
      },
      {
        source: '/user_service/api/version/',
        destination: 'http://gateway-test.apps.ocp4.pacosta.com/user_service/api/version/'
      }
    ]
  }
}
