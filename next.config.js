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
            value: "application/octet-stream",
          }
        ]
      },
      {
        source: "/Games/BattleBoi/Build/webgl.data.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "application/octet-stream",
          }
        ]
      },
      {
        source: "/Games/BattleBoi/Build/webgl.wasm.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "application/octet-stream",
          }
        ]
      },
    ];
  },
  output: "standalone",}

module.exports = nextConfig
