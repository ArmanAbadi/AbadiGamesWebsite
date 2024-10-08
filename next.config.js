/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    appDir: true,
  },
  headers: async () => {
    return [
      {
        source: "/Games/BattleBoi/Build/webgl.framework.js.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          }
        ]
      },
    ];
  },
  output: "standalone",}

module.exports = nextConfig
