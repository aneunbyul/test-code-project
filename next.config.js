const withPlugins = require ( "next-compose-plugins" );
const optimizedImages = require ( "next-optimized-images" );

const nextConfig = {
  webpack: ( config, { buildId, dev, isServer, defaultLoaders, webpack } ) => {
    // IMPORTANT!! - these codes must be added to import svg elements as react componets
    config.module.rules.map ( ( rule ) => {
      if (rule.test !== undefined && rule.test.source.includes ( "|svg|" )) {
        rule.test = new RegExp ( rule.test.source.replace ( "|svg|", "|" ) );
      }
    } );

    config.module.rules.push ( {
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    } );

    return config;
  },
  eslint: {
    // ESLint managed on the workspace level
    ignoreDuringBuilds: true
  },
  images: {
    disableStaticImages: true
  },
  trailingSlash: true
};

const compConfig = withPlugins (
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        optimizeImages: false
      }
    ]
  ],
  nextConfig
);

module.exports = compConfig;
