module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
  },
  async rewrites() {
    return [
      {source: '/tr/hakkimizda', destination: '/about', locale: false},
    ];
  },
  async redirects() {
    return [
      {
        source: '/tr/about',
        destination: '/tr/hakkimizda',
        locale: false,
        permanent: true,
      },
    ];
  },
};
