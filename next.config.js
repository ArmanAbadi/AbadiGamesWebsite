/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    appDir: true,
  },
  headers: async () => {
    return [
      {
        source: "/public/Games/BattleBoi/Build/webgl.framework.js.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          }
        ]
      },
      {
        source: "/public/Games/BattleBoi/Build/webgl.data.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          }
        ]
      },
      {
        source: "/public/Games/BattleBoi/Build/webgl.wasm.br",
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
